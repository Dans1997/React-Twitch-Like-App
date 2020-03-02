import React from 'react'
import { Link } from 'react-router-dom';
import { PageHeader, Button } from 'antd';

import GoogleAuth from './GoogleAuth';
import './Header.css'

const Header = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
            ghost={false}
            title="Streamy"
            subTitle="Welcome!"
            extra={[
                <Button key="1">      
                    <Link to="/">Streams</Link>
                </Button>,
                <GoogleAuth key="2"/>
            ]}
            >
            </PageHeader>
        </div>
    )
}

export default Header;