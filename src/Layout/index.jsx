import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Container from './Container'
import { Layout } from 'antd'
import style from './style.module.scss'
const { Sider } = Layout;
const Index = () => {
    return (
        <Layout className={style.layout}>
            <Sider>
                <Menu />
            </Sider>
            <Layout>
                <Header />
                <Container />
                <Footer />
            </Layout>
        </Layout>
    )
}

export default Index