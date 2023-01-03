import React from 'react'
import { useState } from 'react'
function MediaContext() {

    const [songs, setSongs] = useState([
        {
            "title": "$orries",
            "artist": "Peachy!",
            "album": " Shiloh",
            "track": "$orries",
            "year": "1",
            "img_src": "./songs_images/$orries_Cover (front)_e.jpg",
            "src": "./songs/$orries.mp3"
        },

        {
            "title": "5:32pm",
            "artist": "The Deli",
            "album": "Vibes 2",
            "track": "12",
            "year": "",
            "img_src": "./songs_images/5 32pm_Cover (front)_e.jpg",
            "src": "./songs/5 32pm.mp3"
        },
        {
            "title": "88 Keys",
            "artist": "Oatmello",
            "album": "Snapshots",
            "track": "3",
            "year": "",
            "img_src": "./songs_images/88 Keys_Cover (front)_e.jpg",
            "src": "./songs/88 Keys.mp3"
        }])

    const [currentSong, setCurrentSong] = useState(0)

    function RemoveSong(id) {
        const TempsSong = songs.filter((song, index) => id != index)
        console.log(TempsSong)
        setSongs(TempsSong)

    }


    return {
        currentSong, setCurrentSong, songs, RemoveSong
    }
}

export default MediaContext