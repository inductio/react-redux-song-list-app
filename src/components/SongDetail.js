import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    return <div>
        {song ?
            <div>Title: {song.title}
                <div>Duration: {song.duration}</div>
            </div> :
            'Select a song!'
        }
    </div>
};

//Wrap SongDetail with connect function to get props from common state
const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);