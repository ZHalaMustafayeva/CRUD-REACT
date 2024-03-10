import React, { useState } from 'react'
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Row, Col, Menu, Typography } from 'antd';
import style from './style.module.scss'
const { Title } = Typography

const Index = () => {
    function getItem(label, key, url, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
            url
        };
    }
    const items = [
        getItem('Crud', "crud", '/crud', <PieChartOutlined />,),
        getItem('Crud 2', '2', "/crud-2", <DesktopOutlined />),
    ];
  
    return (
        <>
            <Row>
                <Col span={24}>
                    <Title className={style.logo}>Logo</Title>
                </Col>
            </Row>
            <Menu
                defaultSelectedKeys={['crud']}
                mode="inline"
                theme="dark"
                items={items}
            />
        </>
    )
}

export default Index