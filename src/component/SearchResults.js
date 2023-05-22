import React, {useState}  from "react";
import PlayList from './PlayList'
import TrackList from "./Tracklist";
import data from '../assets/fake-data/data.json';


const SearchResults = () => {

    let tracks = JSON.stringify(data);
    tracks = JSON.parse(tracks);
    tracks = tracks.tracks.items;

    const [playlistData, setPlaylistData] = useState([]);

    
    const handleClick = (songname, artist) => {
        console.log(songname, artist);
        const track = {
          name: songname,
          artist: artist
        };
        setPlaylistData(prevData => [...prevData, track]);

        console.log(playlistData);
    };

    const handleRemove = (index) => {
        const updatedPlaylistData = [...playlistData];
        updatedPlaylistData.splice(index, 1);
        setPlaylistData(updatedPlaylistData);
    };


    return ( 
        <section class="Search Results">
            <TrackList tracks={tracks} handleClick={handleClick} />
            <PlayList playlistData={playlistData} handleRemove={handleRemove} />
        </section>
    );
}

export default SearchResults;