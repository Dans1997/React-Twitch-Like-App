import React from 'react';
import { connect } from 'react-redux';

import { deleteStream } from '../../actions'
import DeleteModal from '../Modal';

class StreamDelete extends React.Component {

    componentDidMount() {
        // do i need this?
    }

    onDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    render(){
        if(!this.props.streamId)
        {
            return <div> </div>
        }

        return (
            <div style={{ padding: '10px' }}>
                <h3> Delete Stream # { this.props.streamId } </h3> 
                <DeleteModal onDelete={this.onDelete}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { streamId: ownProps.match.params.id }
}

export default connect(mapStateToProps, { deleteStream } )(StreamDelete);