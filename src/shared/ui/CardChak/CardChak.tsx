import { Box, Image, Badge, Text, Stack, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { type ResourceTvP } from 'shared/types/entities/learnTypes';

interface ResourceCardProps {
  resource: ResourceTvP;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const bgColor = useColorModeValue('up-bg-color', 'up-bg-color');
  const textColor = useColorModeValue('main-color', 'up-bg-color');
  const descriptionColor = useColorModeValue('main-color', 'up-bg-color');
  const badgeColorScheme = 'teal';
  const buttonBgColor = useColorModeValue('main-color', 'up-bg-color');

  const handleClick = (): void => {
    window.open(resource.link, '_blank'); // Открыть в новом окне
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" bg={bgColor} shadow="md">
      {/* Изображение */}
      <Image src={resource.img} alt={resource.name} />

      <Box p="4">
        {/* Название ресурса */}
        <Text color={textColor} fontWeight="bold" fontSize="xl" mb="2">
          {resource.name}
        </Text>

        {/* Описание */}
        <Text color={descriptionColor} mb="4">
          {resource.description}
        </Text>

        {/* Теги */}
        <Flex wrap="wrap" gap="1">
          {resource.tag.map((tag) => (
            <Badge key={tag._id} colorScheme={badgeColorScheme} mr="1">
              {tag.name}
            </Badge>
          ))}
        </Flex>

        {/* Источник */}
{/*        <Text color={descriptionColor} fontSize="sm" mt="2">
          Источник: <a href={resource.source.url}>{resource.source.name}</a>
        </Text>*/}

        {/* Приоритет */}
        <Text fontSize="sm" mt="2" color={resource.priority.level > 2 ? 'red.500' : 'green.500'}>
          Приоритет: {resource.priority.name} (Уровень {resource.priority.level})
        </Text>

        {/* Статус */}
        <Text color={descriptionColor} fontSize="sm" mt="2">
          Статус: {resource.status.name}
        </Text>

        {/* Счетчик использования */}
        <Text color={descriptionColor} fontSize="sm" mt="2">
          Использовано {resource.usageCount} раз(а)
        </Text>

        {/* Кнопки */}
        <Stack direction="row" spacing="4" mt="4">
          <Button onClick={handleClick} bg={buttonBgColor} color="white" variant="solid">
            Перейти к ресурсу
          </Button>
          <Button bg={buttonBgColor} color="white" variant="outline">
            Сохранить
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
