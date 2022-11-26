import React, { useContext } from 'react';
import { Songs } from '../Context';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function Playing() {
    const { song , handleSetSong } = useContext(Songs)
    const handeNext = () =>{
        handleSetSong(song.id + 1)
    }
    const handePrevious = () =>{
        handleSetSong(song.id - 1)
    }

    return <AudioPlayer
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        layout="stacked-reverse"
        onClickNext={handeNext}
        onClickPrevious={handePrevious}
    />
}
export default Playing