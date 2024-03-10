import React, { useState } from 'react';
import { Table, Row, Col, Popover, Button, Popconfirm } from 'antd';
import style from './style.module.scss'
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import ModalAdd from './ModalAdd'
import ModalUpdate from './ModalUpdate'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdatepen] = useState(false)
  const [editData, setEditData] = useState()
  const [data, setData] = useState([
    {
      key: '1',
      name: 'Zhala',
      surname: "Mustafayeva",
      gender: "female",
      patronymic: "Mehman"
    },
    {
      key: '2',
      name: 'Zakir',
      surname: "Mustafayev",
      gender: "male",
      patronymic: "Mehman"
    },

  ])

  // Controlling Add modal 
  const OpenAddModal = () => setIsOpen(true)
  const CloseAddModal = () => setIsOpen(false)

  // Controlling Update modal 
  const OpenUpdateModal = () => setIsUpdatepen(true)
  const CloseUpdateModal = () => setIsUpdatepen(false)

  // Get row data with this function
  const onRow = (record) => setEditData(record)

  //Confirm data to be delete
  const confirm = (e) => {
    let newData = data.filter(val => val.key !== editData.key)
    setData([...newData])
  };

  // moree button content in the table
  const content = (
    <div>
      <p onClick={OpenUpdateModal}> <EditOutlined /> Edit</p>
      <p>
        <Popconfirm
          title="Are you sure to delete this data?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined /> Delete
        </Popconfirm>
      </p>
    </div>
  );

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
    },
    {
      title: 'Patronymic',
      dataIndex: 'patronymic',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: '',
      render: () => (
        <Popover placement="bottom" content={content} >
          <MoreOutlined />
        </Popover>
      )
    },
  ];

  const SetDataToTable = (data) => setData(prev => [...prev, data])

  const UpdateTableData = (updatedData) => {
    data?.map(value => {
      if (updatedData.key === value.key) {
        value.name = updatedData.name;
        value.surname = updatedData.surname;
        value.gender = updatedData.gender;
        value.patronymic = updatedData.patronymic
      }
    })
    setData([...data])
  }

  return (
    <>
      <Row justify='end' className={style.row} >
        <Col className={style.col} span={24} flex='none'>
          <Button onClick={OpenAddModal}>Create</Button>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey={record => record.key}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => onRow(record)
              }
            }
            }
          />
        </Col>
      </Row>
      <ModalAdd
        open={isOpen}
        CloseAddModal={CloseAddModal}
        SetDataToTable={SetDataToTable}
      />
      <ModalUpdate
        open={isUpdateOpen}
        OpenUpdateModal={OpenUpdateModal}
        CloseUpdateModal={CloseUpdateModal}
        UpdateTableData={UpdateTableData}
        editData={editData}
      />
    </>
  )
};
export default Index;