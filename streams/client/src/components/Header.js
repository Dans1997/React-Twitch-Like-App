import React from 'react'
import { Link } from 'react-router-dom';
import { PageHeader, Button } from 'antd';

import './Header.css'

const Header = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
            ghost={false}
            title="Streamy"
            subTitle="Welcome!"
            extra={[
                <Button key="2">      
                    <Link to="/">Streams</Link>
                </Button>,
                <Button key="1" type="primary">
                    <Link to="/">Login</Link>
                </Button>
            ]}
            >
            </PageHeader>
        </div>
    )
}

export default Header;