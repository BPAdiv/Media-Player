import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import MediaControls from './MediaControls';
import MediaContext from './MediaContext';
import MediaList from './MediaList';
import { Route, Routes } from 'react-router-dom';



export const ContextAction = createContext()
function App() {
  const { currentSong, setCurrentSong, songs, RemoveSong } = MediaContext()
  const values = { currentSong, setCurrentSong, songs, RemoveSong }


  console.log(songs);

  return (
    <div className="App">

      <ContextAction.Provider value={values}>
        <Routes>
          <Route path='/player' element={<MediaControls />} />
          <Route path='/list' element={<MediaList />} />
        </Routes>

      </ContextAction.Provider>
    </div>
  );
}

export default App;

{/* <input type="text" onChange={(e) => setInputValue(e.target.value)} />
<button onClick={handleClick}>SUBMIT</button>
<div>
{inputList}
</div> */}
// const [inputList, setInputList] = useState([])
// const [inputValue, setInputValue] = useState('')

// useEffect(() => {
//   const data = JSON.parse(localStorage.getItem("Input_List"))
//   if (data !== null) { setInputList(data) }
// }, [])

// useEffect(() => {
//   localStorage.setItem("Input_List", JSON.stringify(inputList))


// }, [inputList])

// function handleClick() {
//   setInputList([...inputList, inputValue])
//   setInputValue(" ")
// }