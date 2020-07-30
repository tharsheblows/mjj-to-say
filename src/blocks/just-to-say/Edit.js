import React, { useState, useEffect } from 'react';
import { TextareaControl } from '@wordpress/components';

import { createLib } from './utils';

import Inputs from './Inputs';
import OriginalWithDescription from './OriginalWithDescription';
import Original from './Original';


function Edit( props ) {
	// This is the value in the TextareaControl.
	const { attributes, setAttributes, isSelected, className, clientId } = props

	const initLib = attributes.lib || ''
	const initial = createLib( initLib )

	const [ text, setText ] = useState(initLib);
	const [ defaultText, setDefaultText ] = useState( initial.defaultLibText );
	const [ htmlText, setHtmlText ] = useState(
		initial.defaultLibHtml
	);
	const [ inputFields, setInputFields ] = useState(
		initial.inputFields
	);
	const [ which, setWhich ] = useState( 'inputs' );
	const [ whichComponent, setWhichComponent ] = useState( '' );
	const [ attribution, setAttribution ] = useState( attributes.attribution );

	const getBlockId =
		typeof attributes.blockId === 'string'
			? attributes.blockId
			: clientId;
	setAttributes( { blockId: getBlockId } );

	// When the text in the textarea is updated, the transformed version should update too so we can check out how it's going.
	const updateLib = ( t ) => {


		setText(t)
		const libs = createLib( t );
		setDefaultText( libs.defaultLibText );
		setHtmlText( libs.defaultLibHtml );
		setInputFields( libs.inputFields );

		setAttributes( { lib: t } );
	};

	const updateAttribution = ( v ) => {
		setAttribution( v )
		setAttributes( { attribution: v } )
	}

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
				setWhichComponent( 'inputs' );
		}

		// Add in attribution text field.
	}, [ which, defaultText, htmlText, inputFields ] );

	return (
		<div class="mjj-jts-edit">
			<div class="rendered">{ whichComponent }</div>
			{ ! isSelected && <div className="attribution">{ attribution }</div> }
			{ isSelected && (
				<div className="mjj-jts-enter">
					<button onClick={ () => setWhich( 'defaultLib' ) }>
						Show default lib
					</button>
					<button onClick={ () => setWhich( 'htmlLib' ) }>
						Show lib with descriptions
					</button>
					<button onClick={ () => setWhich( 'inputs' ) }>
						Show front end inputs
					</button>

					<div className="textareas">
						<TextareaControl
							rows="17"
							label="Enter the content template here."
							help="For words which should be replaced, use the default word first, then a description of the type of word the user should enter to replace it. Eg {{plums, noun}} or {{plums, thing you might eat}}"
							value={ text }
							onChange={ ( text ) => updateLib( text ) }
						/>
					</div>
					<div className="textareas">
						<TextareaControl
							label="Attribution (this is a textarea because you need a good attribution)"
							help="Please provide a correct attribution to the author of the original piece if you didn't make it up yourself."
							value={ attribution }
							onChange={ ( v ) => updateAttribution( v ) }
						/>
					</div>
				</div>
			) }
		</div>
	);
}

export default Edit;
