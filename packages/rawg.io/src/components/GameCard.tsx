import { AddIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useRef, useState } from 'react';
import { platforms } from '../lib/platforms';
import { GameData, ShortScreenshot } from '../services/game.services';
import { Link as RouterLink } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

type ScreenShotPreviewProps = {
  images: ShortScreenshot[];
};

const ScreenShotPreview = ({ images }: ScreenShotPreviewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const image = images[currentImageIndex];

  return (
    <Box
      w={'full'}
      h={'full'}
      position={'relative'}>
      {image && (
        <Image
          src={image.image}
          width={'full'}
          height={'full'}
          objectFit={'cover'}
        />
      )}

      <Flex
        w={'full'}
        h={'full'}
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        alignItems={'stretch'}
        justifyContent={'center'}
        gap={1}
        display={'none'}
        _groupHover={{ display: 'flex' }}>
        {images.map((image, index) => (
          <Flex
            key={image.id}
            w={8}
            onMouseEnter={() => setCurrentImageIndex(index)}
            alignItems={'flex-end'}>
            <Box
              className='item'
              w={'full'}
              h={1}
              bg={
                index === currentImageIndex
                  ? 'whiteAlpha.600'
                  : 'whiteAlpha.300'
              }
              rounded={'lg'}
              mb={2}></Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

type GameCardProps = {
  data: GameData;
};

const GameCard = ({ data }: GameCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Box
      rounded={'lg'}
      role='group'
      _dark={{
        backgroundColor: '#292929',
      }}
      _light={{ backgroundColor: 'gray.50' }}
      _hover={{ transform: 'scale(1.05)', zIndex: 10 }}
      position={'relative'}>
      <AspectRatio
        ratio={16 / 9}
        roundedTop={'lg'}
        overflow={'hidden'}>
        {data.short_screenshots ? (
          <ScreenShotPreview images={data.short_screenshots} />
        ) : (
          <></>
        )}
      </AspectRatio>

      <Box p={4}>
        <Flex
          gap={'6px'}
          mb={'7px'}>
          {(data.parent_platforms || []).map((platform) => (
            <Icon
              key={platform.platform.id}
              height={'13px'}
              as={
                platforms[platform.platform.id as keyof typeof platforms].icon
              }
            />
          ))}
        </Flex>

        <Heading
          as={RouterLink}
          to={`/games/${data.id}`}
          fontSize={'24px'}
          lineHeight={'28px'}
          fontWeight={700}
          mb={'10px'}
          display={'block'}>
          {data.name}
        </Heading>

        <Button
          size={'xs'}
          leftIcon={<AddIcon />}
          _dark={{
            bg: 'whiteAlpha.200',
          }}
          _light={{
            bg: 'blackAlpha.200',
          }}>
          {data.added}
        </Button>

        <Flex
          flexDirection={'column'}
          gap={2}
          p={4}
          position={'absolute'}
          zIndex={10}
          display={'none'}
          _groupHover={{
            display: 'block',
          }}
          _dark={{
            backgroundColor: '#292929',
          }}
          _light={{ backgroundColor: 'gray.50' }}
          roundedBottom={'lg'}
          left={0}
          right={0}
          top={'calc(100% - 16px)'}>
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={2}>
            <Text
              fontSize={'xs'}
              color={'gray.500'}>
              Release date:
            </Text>
            <Text fontSize={'xs'}>
              {format(new Date(data.released), 'MMM dd, yyyy')}
            </Text>
          </Flex>

          <Divider mb={2} />

          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Text
              fontSize={'xs'}
              color={'gray.500'}>
              Genres:
            </Text>

            <Flex>
              {data.genres.map((genre, index) => (
                <Text
                  key={genre.id}
                  fontSize={'xs'}>
                  <Link>{genre.name}</Link>

                  {index === data.genres.length - 1 ? null : (
                    <span>,&nbsp;</span>
                  )}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default GameCard;
