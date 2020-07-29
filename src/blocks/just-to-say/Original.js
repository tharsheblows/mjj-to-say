import React from 'react';

function Original( props ) {
	return <div dangerouslySetInnerHTML={{ __html: props.text}} />;
}

export default Original;
