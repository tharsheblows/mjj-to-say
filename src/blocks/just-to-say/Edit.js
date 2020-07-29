import React, { useState, useEffect } from 'react';
import { TextareaControl } from '@wordpress/components';

import { createLib } from './utils';

import Inputs from './Inputs';
import OriginalWithDescription from './OriginalWithDescription';
import Original from './Original';


function Edit( props ) {
	// This is the value in the TextareaControl.
	const { attributes, setAttributes, isSelected } = props

	const initial = createLib( attributes.lib )

	const [ text, setText ] = useState(attributes.lib);
	const [ defaultText, setDefaultText ] = useState( initial.defaultLibText );
	const [ htmlText, setHtmlText ] = useState(
		initial.defaultLibHtml
	);
	const [ inputFields, setInputFields ] = useState(
		initial.inputFields
	);
	const [ which, setWhich ] = useState( 'inputs' );
	const [ whichComponent, setWhichComponent ] = useState( '' );
	const [ attribution, setAttribution ] = useState( '' );

	// When the text in the textarea is updated, the transformed version should update too so we can check out how it's going.
	const updateLib = ( t ) => {
		setText(t)
		const libs = createLib( t );
		setDefaultText( libs.defaultLibText );
		setHtmlText( libs.defaultLibHtml );
		setInputFields( libs.inputFields );

		setAttributes( { lib: t } );
	};

	useEffect( () => {

		// I know, I know I could use useReducer.
		switch ( which ) {
			case 'defaultLib':
				setWhichComponent( <Original text={ defaultText } /> );
				break;
			case 'htmlLib':
				setWhichComponent(
					<OriginalWithDescription text={ htmlText } />
				);
				break;
			case 'inputs':
				setWhichComponent( <Inputs inputFields={ inputFields } /> );
				break;
			default:
				setWhichComponent( '' );
		}

		// Add in attribution text field.
	}, [ which, defaultText, htmlText, inputFields ] );

	return (
		<div id="mjj-jts-edit">
			{ whichComponent }
			{ isSelected &&
			<div className="mjj-just-to-say">
				<button onClick={ () => setWhich( 'defaultLib' ) }>
					Show default lib
				</button>
				<button onClick={ () => setWhich( 'htmlLib' ) }>
					Show lib with descriptions
				</button>
				<button onClick={ () => setWhich( 'inputs' ) }>
					Show front end inputs
				</button>

				<TextareaControl
					rows="17"
					label="Create lib here"
					help="enter text"
					value={ text }
					onChange={ ( text ) => updateLib( text ) }
				/>
				<TextareaControl
					label="Attribution (this is a textarea because you need a good attribution)"
					help="enter attribution"
					value={ attribution }
					onChange={ ( v ) => setAttribution( v ) }
				/>
			</div> }
		</div>
	);
}

export default Edit;
