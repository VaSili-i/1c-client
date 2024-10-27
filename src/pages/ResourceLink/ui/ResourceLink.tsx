import React from 'react';
import { ConfigProvider, FloatButton, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import cls from './ResourceLink.module.scss';
import PlusIcon from 'shared/assets/icon/add_black_24dp.svg';
import { useGetAllResourceQuery } from 'shared/api/general/ResourceAnswerRtqQueryApi';
import { useGetAllResourceLinkQuery } from 'shared/api/general/ResourceRtqQueryApi';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];

const ResourceLink: React.FC = () => {
  const { data: columnsTwo } = useGetAllResourceQuery(undefined);
  const { data: dateList } = useGetAllResourceLinkQuery(undefined);
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            borderColor: 'var(--up-bg-color)',
            headerBg: 'var(--up-bg-color)',
            headerColor: 'var(--main-color)',
            colorText: 'var(--main-color)',
            colorBgContainer: 'var(--bg-color)'
            /* here is your component tokens */
          }
        }
      }}>
      <Table className={cls.ResourceLink} columns={columnsTwo ?? []} dataSource={dateList} />

      <FloatButton onClick={() => {}} className={cls.colorFill} icon={<PlusIcon />} type="default" style={{ right: 100 }} />
    </ConfigProvider>
  );
};

export default ResourceLink;
