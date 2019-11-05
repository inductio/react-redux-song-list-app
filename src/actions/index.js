// Action creator
export const selectSong = (song) => {
    // return payload
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};