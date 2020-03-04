import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {
    
    onFinish = (formValues) => {
        this.props.createStream(formValues)
    }
    
    render () {
        return (
            <div style={{padding: '10px'}}>
                <h3>
                    Create a Stream
                </h3>
                <StreamForm onSubmit={this.onFinish}/>
            </div>
        )
    }
}


export default connect(null, { createStream })(StreamCreate)