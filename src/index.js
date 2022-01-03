import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import './CSS/Themes.css';
import Gallery from './Components/Gallery'; 
import { getPictures } from './Services/service';

ReactDOM.render(
  <Gallery />,
  document.getElementById('root')
);