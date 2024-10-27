import React, { useState, type ReactElement } from 'react';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';
import { type LearnStatusTp } from 'shared/types/entities/learnTypes';

type TagRender = SelectProps['tagRender'];

interface SelectOption {
  name: string;
}

interface TagRenderProps {
  options?: SelectOption[];
  label: string;
  valueList: any;
  changeValue?: any;
}

export const SelectTag = ({ options, valueList, changeValue, label }: TagRenderProps): ReactElement => {
  const tagRender: TagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>): void => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        color={'blue'}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={() => {
          onClose();
          changeValue((prevSelectedValues: any) => prevSelectedValues.filter((v: any) => v.code !== value.code));
        }}
        style={{ marginRight: 3 }}>
        {label}
      </Tag>
    );
  };

  const handleChange = (selectedOptions: string[]): void => {
    const arr = selectedOptions.map((selectOpt) => options?.find((opt) => opt.name === selectOpt));
    changeValue?.({ [label]: arr });
  };

  return (
    <Select
      mode="multiple"
      tagRender={tagRender}
      style={{ width: '100%', background: 'blue', height: '40px' }}
      options={options?.map((opt: any) => ({ ...opt, value: opt.name }))}
      onChange={handleChange}
      value={valueList?.map((value: LearnStatusTp) => value.name)}
    />
  );
};
