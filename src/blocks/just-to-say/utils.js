export const libRegEx = /{{(.*?)}}/g;

export const createLib = ( markup ) => {
	const matchesArray = getMatches( markup );
	let defaultLibHtml = markup; // This is going to be the html (with span tags for styling purposes) of the default lib.
	let defaultLibText = markup; // The straight up text of the default lib.
	let inputFields = [];

	defaultLibText = defaultLibText.replace( /\n/g, '<br>' )

	matchesArray.forEach( ( e ) => {
		const stringToReplace = e[ 0 ];
		const values = e[ 1 ].split( ',' );

		const defaultWord =
			values.length >= 1
				? values[ 0 ].trim()
				: 'please enter a default word and description';
		const description =
			values.length >= 2
				? values[ 1 ].trim()
				: 'please enter a description';

		defaultLibText = defaultLibText.replace( stringToReplace, defaultWord ); // Just the text.
		defaultLibHtml = defaultLibHtml.replace(
			stringToReplace,
			`<span class='mjj-libs-default-word'>${ defaultWord }</span> <span class="mjj-libs-description">${ description }</span>`
		); // For styling innit.
		inputFields.push( { description: description } ); // Push the description to the end of the array. These are going to be done in order for now, we can complicate it later.
	} );

	return {
		defaultLibHtml: defaultLibHtml,
		defaultLibText: defaultLibText,
		inputFields: inputFields,
	};
};

const getMatches = ( markup ) => {
	return [ ...markup.matchAll( libRegEx ) ];
};
