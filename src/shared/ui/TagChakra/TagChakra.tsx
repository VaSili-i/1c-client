import React, { useState } from 'react';
import { Box, Tag, TagCloseButton, TagLabel, Wrap, WrapItem } from '@chakra-ui/react';
import { type TagTpV } from 'shared/types/entities/learnTypes';

interface TagInputProps {
  options: TagTpV[]; // Список всех доступных тегов передается через пропсы
  valueList?: TagTpV[]; // Начальные выбранные теги
  changeValue?: (tags: TagTpV[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ options, valueList = [], changeValue }) => {
  const [tags, setTags] = useState<TagTpV[]>(valueList);

  const handleAddTag = (tag: TagTpV | null): void => {
    if (tag !== null) {
      const updatedTags = [...tags, tag];
      setTags(updatedTags);
      changeValue?.(updatedTags);
    }
  };

  const handleRemoveTag = (tagToRemove: TagTpV): void => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    changeValue?.(updatedTags);
  };

  return (
    <Box>
      <Wrap>
        {options.map((tag, index) => (
          <WrapItem key={tag._id}>
            <Tag
              colorScheme={tags.includes(tag) ? 'teal' : 'gray'}
              cursor="pointer"
              onClick={() => {
                handleAddTag(tag);
              }}>
              <TagLabel>{tag.name}</TagLabel>
              {tags.includes(tag) && (
                <TagCloseButton
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              )}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default TagInput;
