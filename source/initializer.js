import React from 'react';
import ReactDOM from 'react-dom';
import Doppler from './doppler.jsx';

export function initialize(){
	ReactDOM.render( React.createElement(Doppler), document.getElementById('doppler'))
}
