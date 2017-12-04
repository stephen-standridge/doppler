import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './slide_show.jsx';

export function initialize(){
	ReactDOM.render( React.createElement(SlideShow), document.getElementById('slide_show'))
}
