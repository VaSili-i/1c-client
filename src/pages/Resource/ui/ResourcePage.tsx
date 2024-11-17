import { memo, type ReactElement, useState } from 'react';
import { Box, Grid, Flex, Input, Select, Button } from '@chakra-ui/react';
import { ResourceCard } from 'shared/ui/CardChak/CardChak';
import { AddResource } from 'features/AddResource/ui/AddLearnResource/AddResource';
import { useGetAllLearnResourceQuery } from 'shared/api/general/LearnResourceRtqQueryApi';

function ResourcePage(): ReactElement {
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { data: resourceList } = useGetAllLearnResourceQuery(undefined);

  return (
    <Box p="4">
      {/* Фильтр */}
      <Flex mb="4" justify="space-between" align="center">
        <Input
          placeholder="Search cards..."
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          maxW="300px"
        />
        <Select placeholder="Sort by" maxW="200px">
          <option value="title">Title</option>
          {/* Другие варианты сортировки */}
        </Select>
      </Flex>

      {/* Список карточек */}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)', // Одна колонка на маленьких экранах
          md: 'repeat(2, 1fr)', // Две колонки на средних экранах
          lg: 'repeat(3, 1fr)' // Три колонки на больших экранах
        }}
        gap={6}>
        {(resourceList ?? []).map((card) => (
          <ResourceCard key={card._id} resource={card} />
        ))}
      </Grid>
      <AddResource isOpen={isOpen} toggleOpen={setIsOpen} />
      <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
        <Button
          colorScheme="teal"
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Добавить
        </Button>
      </Box>
    </Box>
  );
}

export default memo(ResourcePage);
