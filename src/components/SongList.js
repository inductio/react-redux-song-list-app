import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    // constructor(props) {
    //     super(props)
    // }

    renderList() {
        return this.props.songs.map(
            (song, id) => <div className="item" key={id}>
                <div className="right floated content">
                    <button
                        onClick={() => this.props.selectSong(song)}
                        className="ui button primary"
                    >
                        Select
                    </button>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        )
    }

    render() {
        this.ref = React.createRef();
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// mapStateToProps - function named by convention
const mapStateToProps = (state) => {
    //console.log(state);
    //these props will be available further in component
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps, {
    // Passing Action Creator "Select Song" to props. This function will be dispatched automatically
    // By passing action creator connect action will automatically call dispatch when needed.
    selectSong: selectSong
})(SongList);