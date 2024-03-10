import { Button, Modal, Form, Input, Select } from 'antd';
import React, { useEffect } from 'react';
import { memo } from 'react';
const { Option } = Select;
const Index = ({ open, CloseUpdateModal, UpdateTableData, editData }) => {
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
        CloseUpdateModal()
        form.resetFields()
    }

    //sent the data to UpdateTableData this this function update the data in index
    const onFinish = (values) => {
        UpdateTableData(values)
        CloseUpdateModal()
    }

    //set the datas to the form elements
    useEffect(() => {
        form.setFields([
            { name: 'name', value: editData?.name },
            { name: 'surname', value: editData?.surname },
            { name: 'patronymic', value: editData?.patronymic },
            { name: 'gender', value: editData?.gender },
            { name: 'key', value: editData?.key },
        ])
    }, [open])
    return (
        <>
            <Modal title="Modal Update" open={open} footer={false} onCancel={handleCancel}>
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