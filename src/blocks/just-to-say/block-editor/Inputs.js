import React from 'react';

function Inputs( props ) {
	const { inputFields, divId } = props;
	let count = 1;
	const inputs =
		inputFields.length > 0
			? inputFields.map( ( i ) => {
					const id = `input-${ count++ }`;
					const input = `<div className="lib-inputs"><label for="${ id }">${ i.description }</label> <input type="text" name="${ id }-${ divId }" id="${ id }-${ divId }" /></div>`;
					return input;
			  }, [] )
			: [ 'no fields yet' ];

	const returnedInputsHtml = { __html: inputs.join( '' ) };

	return (
		<div
			className="mjj-just-to-say-inputs"
			dangerouslySetInnerHTML={ returnedInputsHtml }
		/>
	);
}

export default Inputs;
