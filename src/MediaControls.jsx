import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextAction } from './App';
import MediaContext from './MediaContext';
// import song from './$orries.mp3'

function MediaControls() {
    const [isPlaying, setIsPlaying] = useState(false)

    const { currentSong, setCurrentSong, songs } = useContext(ContextAction)
    console.log(songs)
    const audioEle = useRef()

    function Play() {
        audioEle.current.play()
        setIsPlaying(!isPlaying)
    }
    function Pause() {
        console.log("media has stop");
        audioEle.current.pause()
        setIsPlaying(!isPlaying)
    }
    function Next() {
        setCurrentSong(currentSong + 1)
        console.log(currentSong);
    }
    function Prev() {
        setCurrentSong(currentSong - 1)
    }
    return (
        <div>
            <img src={`${songs[currentSong].img_src}`} alt="" />
            <h1>Now playing:{`${songs[currentSong].title}`}</h1>
            <audio ref={audioEle} src={`${songs[currentSong].src}`}>
            </audio>
            <div> song</div>

            {isPlaying ? <button onClick={Pause}>Pause</button> : <button onClick={Play}>Play</button>
            }
            <button onClick={Next}>skip next</button>
            <button onClick={Prev}>previviues</button>

            <NavLink to="/list"><button>List</button></NavLink>

        </div>
    )
}

export default MediaControls