import React from 'react';
import flv from 'flv.js';

class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount(){
        const { id } = this.props;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    componentWillUnmount() {
        // Clean Video Player Resource
        this.player.destroy();
    }

    render () {
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '70%'}} controls />
                VideoPlayer!
            </div>
        )
    }
}

export default VideoPlayer;