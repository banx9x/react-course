import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Typography,
  Upload,
  notification,
} from 'antd';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';
import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { useEffect, useRef, useState } from 'react';
// import { Html5Qrcode } from 'html5-qrcode';
import { parseInfo } from '../lib/parse-info';
import { type Dayjs } from 'dayjs';
import ScanbotSDK from 'scanbot-web-sdk';
import { Html5Qrcode } from 'html5-qrcode';

type ExampleFormValues = {
  scanner: 'scanbot' | 'html5-qrcode';
  citizenIdentifierId: string;
  oldCitizenIdentifierId: string;
  fullName: string;
  dateOfBirth: Dayjs;
  gender: string;
  address: string;
  issueDate: Dayjs;
  citizenIdentifierCard: UploadFile[];
};

const ExampleForm = () => {
  const [form] = Form.useForm<ExampleFormValues>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  useRef(() => {});
  const scanbotSDK = useRef<ScanbotSDK | null>(null);

  useEffect(() => {
    const LICENSE_KEY =
      'YHy9cEziIasdrrJwvC6qfL8lCavp2V' +
      '5Qor6Jrr96PTdmVKXkIGIcMHyFF/y9' +
      'qtU5CBwXCYVxibp06/8BdbDGk7ulIC' +
      'Sb+byQinaQd7eUn1wk4oTIelPajT0e' +
      'Xk3bYYk97Pun3LZwNSnw7U0s/3n2wJ' +
      'qHJ+jbBDzG6t+FELHrIvzWXZBslBSE' +
      'xdOcw3TeW6kKVb8GyE6DB8i5iMf9cX' +
      'G4eInnnq7ZWWZIpIz8Tv5ynt7Hmprm' +
      'X6EWsfGZ+a2VFxPFTRao6DJAiRqEoc' +
      'g8grysPbabU266jk6sYkGjmk65AdRS' +
      'DwvjBBf/x5ycxQFX+nKnnP1iNdimkP' +
      '11O04n1MUiaw==\nU2NhbmJvdFNESw' +
      'psb2NhbGhvc3R8cXItY29kZS5iYW54' +
      'LmRldgoxNjk2ODk1OTk5CjgzODg2MD' +
      'cKOA==\n';

    ScanbotSDK.initialize({
      licenseKey: LICENSE_KEY,
      engine: '/wasm',
    }).then((sdk) => {
      scanbotSDK.current = sdk;
    });
  }, []);

  const onFinish = (values: ExampleFormValues) => {
    notification.success({
      message: 'Success',
      description: (
        <pre>
          <code>
            {JSON.stringify(
              {
                ...values,
                dateOfBirth: values['dateOfBirth'].format('YYYY-MM-DD'),
                issueDate: values['issueDate'].format('YYYY-MM-DD'),
                citizenIdentifierCard: 'Image',
              },
              null,
              2,
            )}
          </code>
        </pre>
      ),
      style: { width: 600 },
    });
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  const beforeUpload = async (file: RcFile) => {
    console.log('Before Upload');
    const scanner = form.getFieldValue('scanner');

    console.log('Use scanner:', scanner);

    if (scanner === 'html5-qrcode') {
      const html5QrCode = new Html5Qrcode('render');

      try {
        const decoded = await html5QrCode.scanFileV2(file, false);
        const data = parseInfo(decoded.decodedText);
        form.setFieldsValue(data);
        return true;
      } catch (error) {
        console.error(error);
        notification.error({
          message: `Cannot read QR Code in image`,
          description: `Please choose another image.`,
          placement: 'top',
        });
        return false;
      }
    } else if (scanner === 'scanbot') {
      if (scanbotSDK.current) {
        const sdk = scanbotSDK.current;
        const license = await sdk.getLicenseInfo();

        if (license.isValid()) {
          const reader = new FileReader();

          reader.readAsDataURL(file);

          reader.onload = async () => {
            const result = await sdk.detectBarcodes(reader.result as string);

            if (result.barcodes.length > 0) {
              form.setFieldsValue(parseInfo(result.barcodes[0].text));
            } else {
              notification.error({
                message: `Cannot read QR Code in image`,
                description: `Please choose another image.`,
                placement: 'top',
              });
            }
          };
        } else {
          notification.error({
            message: `SDK not working properly`,
            description: `Please try again.`,
            placement: 'top',
          });
        }
      }
    }
  };

  const handleUpload = (options: RcCustomRequestOptions) => {
    console.log('Upload');
    options.onProgress && options.onProgress({ percent: 50 });

    setTimeout(() => {
      const imageURL = URL.createObjectURL(options.file as RcFile);
      options.onSuccess && options.onSuccess(imageURL);
    }, 2000);
  };

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    console.log('Change', info);

    setFileList(info.fileList);
  };

  const handleRemove = () => {
    console.log('Remove');
    setFileList([]);
    form.resetFields([
      'citizenIdentifierId',
      'oldCitizenIdentifierId',
      'fullName',
      'dateOfBirth',
      'gender',
      'address',
      'issueDate',
      'citizenIdentifierCard',
    ]);
  };

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form<ExampleFormValues>
      form={form}
      layout={'horizontal'}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        scanner: 'html5-qrcode',
      }}>
      <div
        id='render'
        style={{ display: 'block' }}></div>

      <Typography.Title style={{ textAlign: 'center' }}>
        QR Scanner Example
      </Typography.Title>

      <Row gutter={12}>
        <Col span={12}>
          <Form.Item
            name='citizenIdentifierId'
            label='Citizen Identification ID'
            rules={[{ required: true, message: 'Please input your ID!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='oldCitizenIdentifierId'
            label='Old Citizen Identification ID'
            rules={[{ required: true, message: 'Please input your ID!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='fullName'
            label='Full Name'
            rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='dateOfBirth'
            label='Date of Birth'
            rules={[
              { required: true, message: 'Please input your date of birth!' },
            ]}>
            <DatePicker />
          </Form.Item>

          <Form.Item
            name='gender'
            label='Gender'
            rules={[{ required: true, message: 'Please input your gender!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='address'
            label='Address'
            rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='issueDate'
            label='Issue Date'
            rules={[
              { required: true, message: 'Please input your issue date!' },
            ]}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={'scanner'}
            label='Use scanner'
            labelCol={{ span: 24 }}>
            <Radio.Group>
              <Radio value={'scanbot'}>ScanbotSDK ($25K)</Radio>
              <Radio value={'html5-qrcode'}>HTML5-QRCode ($0 - Free)</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name='citizenIdentifierCard'
            label='Upload Citizen Identification Card Image'
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please upload your Citizen Identifier Card!',
              },
            ]}
            valuePropName='fileList'
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }

              return e.fileList;
            }}>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={true}
              beforeUpload={beforeUpload}
              customRequest={handleUpload}
              onChange={handleChange}
              onRemove={handleRemove}
              maxCount={1}>
              {fileList.length == 0 && uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ExampleForm;
