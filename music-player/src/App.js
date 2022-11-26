import './App.css';
import Detail from './component/Detail';
import ListSong from './component/ListSong';
import NavBar from "./component/Navbar"
import { Songs } from './Context';
import Datasong from "./data/songs.json";
import Playing from './component/Playing';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(Datasong[0])

  const handleSetSong = (idSong) =>{
    const song = Datasong.find((song) => song.id === idSong)
  
    !song ? setSong(Datasong[0]) : setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ Datasong , song ,handleSetSong}} >
        <NavBar />
        <div className="content">
          <Detail />
          <ListSong />
        </div>

        <div>
          <Playing />
        </div>
      </Songs.Provider>
    </div>
  );
}

export default App;
