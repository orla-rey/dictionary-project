import React, { useState } from 'react';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {

  return (
    <div className='App'>
    <div className='container'>
    <header className='App-header'>Dictionary Search Engine</header>
    <main><Dictionary /></main>
    <footer className='App-footer'>This project was coded by <a href="https://github.com/orla-rey" target='blank'>Orla Reynolds</a>, is <a href="https://github.com/orla-rey/dictionary-project.git" target='blank'>open-sourced on GitHub</a> and <a href="https://dictionary-engine.netlify.app" target='blank'>hosted on Netlify</a></footer>
    </div>
    </div>
  );
}
