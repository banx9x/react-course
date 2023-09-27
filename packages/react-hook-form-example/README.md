# Rawg.io Clone với Chakra UI

Repository này chứa một dự án là bản sao của trang web chơi game phổ biến [Rawg.io](https://rawg.io/). Dự án này sử dụng API của Rawg.io để lấy và hiển thị thông tin về các trò chơi video và được xây dựng bằng thư viện thành phần Chakra UI cho React.

## Tổng quan dự án

Dự án Rawg.io Clone nhằm cung cấp một phiên bản đơn giản của Rawg.io, cho phép người dùng duyệt và khám phá các trò chơi video, xem chi tiết về các trò chơi cụ thể và tìm kiếm các trò chơi mà họ quan tâm. Dự án này thể hiện cách tận dụng API của Rawg.io và tạo giao diện người dùng đáp ứng và thẩm mỹ bằng cách sử dụng Chakra UI.

## Tính năng

- **Thư viện trò chơi**: Duyệt qua thư viện các trò chơi video với thông tin như tiêu đề, ngày phát hành và ảnh bìa.

- **Chi tiết trò chơi**: Xem thông tin chi tiết về một trò chơi đã chọn, bao gồm mô tả, đánh giá và hình ảnh chụp màn hình.

- **Chức năng tìm kiếm**: Tìm kiếm các trò chơi theo tiêu đề và lọc kết quả theo nhiều tiêu chí.

- **Thiết kế đáp ứng**: Trải nghiệm mượt mà trên cả máy tính và thiết bị di động.

## Công nghệ sử dụng

- **React**: Dự án được xây dựng bằng React, một thư viện JavaScript phổ biến để xây dựng giao diện người dùng.

- **Chakra UI**: Chakra UI được sử dụng để thiết kế và tạo thành phần đáp ứng, mang lại một thiết kế thống nhất và thẩm mỹ.

- **Rawg.io API**: Dự án phụ thuộc vào [Rawg.io API](https://rawg.io/apidocs) để lấy dữ liệu về các trò chơi.

## Bắt đầu

Để chạy dự án này trên máy tính của bạn, làm theo các bước sau:

1. **Clone Repository**: Sao chép repository này về máy tính của bạn bằng lệnh sau:

   ```bash
   git clone https://github.com/banx9x/react-course.git
   ```

2. **Cài đặt dependencies**: Mở terminal trong thư mục gốc của dự án và chạy lệnh sau để cài đặt các phụ thuộc của monorepo:

   ```bash
   npm install
   ```

3. **Thiết lập API Key**: Bạn cần lấy một API key từ [Rawg.io](https://rawg.io/apidocs) và thiết lập nó trong dự án. Tạo một tệp `.env` trong thư mục gốc của dự án và thêm API key của bạn như sau:

   ```env
   REACT_APP_RAWG_API_KEY=your-api-key
   ```

4. **Chạy Ứng Dụng**: Khởi chạy máy chủ phát triển:

   ```bash
   npx lerna run dev --scope rawg.io
   ```

5. **Truy cập Ứng Dụng**: Mở trình duyệt web của bạn và truy cập theo đường dẫn hiển thị trong `console`

## Đóng Góp

Nếu bạn muốn đóng góp vào dự án này hoặc báo cáo vấn đề, vui lòng mở pull requests hoặc vấn đề trên repository GitHub của dự án.

## Liên Hệ

Nếu bạn có bất kỳ câu hỏi hoặc ý kiến đóng góp, bạn có thể liên hệ với tôi qua email tại [contact@banx.dev](contact@banx.dev)