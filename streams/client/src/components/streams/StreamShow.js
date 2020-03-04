import React from 'react';
import { connect } from 'react-redux' ;
import { fetchStream } from '../../actions'
import VideoPlayer from '../VideoPlayer';

class StreamShow extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
        if(!this.props.stream)
        {
            return <div>Loading...</div>
        }

        return (
            <div style={{ padding: '10px' }}>
                <VideoPlayer id={this.props.match.params.id}/>
                <h3>{this.props.stream.title} </h3>
                <p>{this.props.stream.description} </p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream } )(StreamShow);