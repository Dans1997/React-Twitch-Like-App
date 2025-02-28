import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onFinish = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render(){
        if(!this.props.stream)
        {
            return <div>Loading...</div>
        }

        return (
            <div style={{padding: '10px'}}>
            <h3>
                Edit Stream
            </h3>
            <StreamForm initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} onSubmit={this.onFinish}/>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);