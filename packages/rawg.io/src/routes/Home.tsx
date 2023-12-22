import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCard from '../components/GameCard';
import { PageHeading } from '../components/PageHeading';
import {
  QueryGameResponse,
  Result,
  getTrending,
} from '../services/game.services';

const Home = () => {
  const [data, setData] = useState<QueryGameResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const columns = useBreakpointValue(
    {
      base: 1,
      sm: 2,
      md: 3,
      xl: 4,
      '2xl': 5,
    },
    {
      fallback: 'base',
    },
  );
  const pageRef = useRef(1);

  useEffect(() => {
    let ignored = false;

    getTrending({ page: 1 })
      .then((data) => {
        if (!ignored) {
          setData(data);
        }
      })
      .finally(() => {
        if (!ignored) {
          setIsLoading(false);
        }
      });

    return () => {
      ignored = true;
    };
  }, []);

  return (
    <Box as={'main'}>
      <Box
        as={'section'}
        mb={6}>
        <PageHeading>New and trending</PageHeading>
        <Text>Base on player counts and release date</Text>
      </Box>

      <Box as={'section'}>
        {isLoading ? (
          <Box>Loading...</Box>
        ) : !data ? (
          <Box>Something wrong :(</Box>
        ) : (
          <InfiniteScroll
            dataLength={data.results.length}
            next={() => {
              pageRef.current += 1;
              getTrending({ page: pageRef.current }).then((data) => {
                setData((prev) => ({
                  ...data,
                  results: prev
                    ? [...prev.results, ...data.results]
                    : [...data.results],
                }));
              });
            }}
            hasMore={!!data.next}
            loader={
              <Flex
                justifyContent={'center'}
                my={6}>
                <Button
                  isLoading
                  _light={{
                    bg: 'blackAlpha.200',
                  }}
                  _dark={{
                    bg: 'whiteAlpha.200',
                  }}
                  width={48}></Button>
              </Flex>
            }>
            <Grid
              templateColumns={{
                base: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
                '2xl': 'repeat(5, 1fr)',
              }}
              templateRows={'auto'}
              gap={5}>
              {data.results
                .reduce((acc, item, index) => {
                  const col = index % (columns || 1);

                  if (Array.isArray(acc[col])) {
                    acc[col].push(item);
                  } else {
                    acc[col] = [] as Result[];
                    acc[col].push(item);
                  }

                  return acc;
                }, [] as Result[][])
                .map((colData, index) => (
                  <GridItem key={index}>
                    <Flex
                      flexDirection={'column'}
                      gap={5}>
                      {colData.map((item) => (
                        <GameCard
                          key={item.id}
                          data={item}
                        />
                      ))}
                    </Flex>
                  </GridItem>
                ))}
            </Grid>
          </InfiniteScroll>
        )}
      </Box>
    </Box>
  );
};

export default Home;
