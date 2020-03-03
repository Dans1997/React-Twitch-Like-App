import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd'

import { fetchStreams } from '../../actions';

const style = { background: '#0092ff', padding: '8px 0' };

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList(){
        return this.props.streams.map(stream => {
            return (
                <Col key={stream.title} className="gutter-row" span={12}>
                    <h2>{stream.title}</h2>
                    {stream.description}
                </Col>
            )
        });
    }

    render () {
        return (
            <Row gutter={16}>
                {this.renderList()}
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return { streams: Object.values(state.streams)}
}

export default connect (mapStateToProps, { fetchStreams })(StreamList);