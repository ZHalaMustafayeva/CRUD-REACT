import { Button, Modal, Form, Input, Select } from 'antd';
import React from 'react';
import { memo } from 'react';
const { Option } = Select;
const Index = ({ open, CloseAddModal, SetDataToTable }) => {
    const [form] = Form.useForm();

    const gender = [
        {
            key: "male",
            value: "Male"
        },
        {
            key: "female",
            value: "Female"
        },
        {
            key: "other",
            value: "Other"
        }
    ]
    
    //close the modal
    const handleCancel = () => {
        CloseAddModal()
        form.resetFields()
    }

    // send the data to SetDataToTable which this function create data in index
    const onFinish = (values) => {
        values.key = Math.random()
        SetDataToTable(values)
        form.resetFields()
        CloseAddModal()
    }
    return (
        <>
            <Modal title="Modal Add" open={open} footer={false} onCancel={handleCancel}>
                <Form layout='vertical' onFinish={onFinish} form={form}>
                    <Form.Item hidden name='key' >
                        <Input />
                    </Form.Item>
                    <Form.Item name='name' label="Name">
                        <Input placeholder='Please write the name' />
                    </Form.Item>
                    <Form.Item name="surname" label="Surname">
                        <Input placeholder='Please write the surname' />
                    </Form.Item>
                    <Form.Item name="patronymic" label="Patronymic">
                        <Input placeholder='Please write the patronymic' />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender">
                        <Select placeholder='Please choose the gender'>
                            {gender?.map(value => (
                                <Option key={value?.key} value={value?.key}>{value?.value}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Button htmlType='submit'>Create</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </Form>
            </Modal >
        </>
    );
};
export default memo(Index);