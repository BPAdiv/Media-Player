import React from 'react'
import { ContextAction } from './App'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
function MediaList() {
    const { currentSong, setCurrentSong, songs, RemoveSong } = useContext(ContextAction)
    return (
        <div>
            {songs.map((song, index) => <div>

                <p>Name {song.title}</p>
                <p>Artist {song.artist}</p>
                <p>Album {song.album}</p>
                <img src={song.img_src} alt="" />
                <button onClick={() => RemoveSong(index)}>Remove</button>
                <NavLink to="/player"><button onClick={() => setCurrentSong(index)}>play</button></NavLink>
            </div>)}
        </div>
    )
}

export default MediaList