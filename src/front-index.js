/**
 * The entry point for building the front end.
 * This is working around the file structure already set up for the block editor blocks.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import MJJJustToSay from './blocks/just-to-say/front-end/MJJJustToSay.js';

const elementsToRender = document.getElementsByClassName( 'mjj-why');

for (let element of elementsToRender ) {
	const attrString = element.getAttribute( 'data-attr' );
	const attr       = JSON.parse( attrString );
	console.log(attr);
	ReactDOM.render( <MJJJustToSay block={attr} />, element );
}