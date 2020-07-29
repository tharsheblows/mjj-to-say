import React from 'react';

function OriginalWithDescription( props ) {
	return <div dangerouslySetInnerHTML={ { __html: props.text } }></div>;
}

export default OriginalWithDescription;
