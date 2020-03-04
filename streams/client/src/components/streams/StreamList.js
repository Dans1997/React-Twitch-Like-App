import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Divider } from 'antd'

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <Row gutter={4}>
                    <Col >
                        <Link to={`/streams/edit/${stream.id}`} >
                            <Button danger size="small">
                                EDIT
                            </Button>
                        </Link>
                    </Col>

                    <Col >
                        <Link to={`/streams/delete/${stream.id}`} >
                            <Button type="primary" danger size="small">
                                DELETE
                            </Button>
                        </Link>
                    </Col>
                </Row>
            )
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return (
                <Col key={stream.title} className="gutter-row" span={12}>
                    <Row gutter={12}>
                        <Col> <h2>{stream.title}</h2> </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col > {stream.description} </Col>  
                        <Col > {this.renderAdmin(stream)} </Col>
                    </Row>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}/>
                </Col>
            )
        });
    }

    renderCreate(){
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/streams/new">
                        <Button type="primary" size="medium" block >
                            Create Stream
                        </Button>
                    </Link>
                </div>
            )
        }
    }

    render () {
        return (
            <div style={{padding: '10px'}} >
                <Row gutter={16}>
                    {this.renderList()}
                </Row>
                <div style={{padding: '10px'}}>
                    {this.renderCreate()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect (mapStateToProps, { fetchStreams })(StreamList);