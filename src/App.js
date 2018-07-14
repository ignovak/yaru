import React, { Component } from 'react';
import PostCard from './components/PostCard';
import comments from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {comments.map((_, i) => <PostCard key={i} data={_} />)}
      </div>
    );
  }
}

export default App;
