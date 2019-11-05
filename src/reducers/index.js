import { combineReducers } from 'redux';

const songsReducers = () => {
    //default initial state
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Stars', duration: '3:15'},
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'I Want it That Way', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectSong;
};

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
});