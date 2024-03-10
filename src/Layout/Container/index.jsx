import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const Index = () => {
    return (
        <Content>
            <Outlet />
        </Content>
    )
}

export default Index