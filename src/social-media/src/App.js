import './App.css';
import Post from "./components/Post.js";
import Feed from "./components/Feed.js";
import getState from "./state/MockState.js";
import { useState } from 'react';

var counter = 0;

function App() {

  const [content, addContent] = useState([]);
  
  const state = getState();

  counter++;

  state.push({ content, id: counter });

  return (
    <div>
      <h1>Generic Social Media App</h1>
      <h3>Post Something</h3>
      <Post addContent={addContent} />
      <Feed feed={state}/>
    </div>
  );
}

export default App;