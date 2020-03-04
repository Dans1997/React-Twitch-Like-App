import React from 'react';
import { connect } from 'react-redux';

import {fetchStream, deleteStream } from '../../actions'
import DeleteModal from '../Modal';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    render(){
        if(!this.props.stream)
        {
            return <div>Loading...</div>
        }

        return (
            <div style={{ padding: '10px' }}>
                <h3> Delete Stream # { this.props.match.params.id } </h3> 
                <p>Title: {this.props.stream.title} </p>
                <DeleteModal onDelete={this.onDelete}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { deleteStream, fetchStream } )(StreamDelete);