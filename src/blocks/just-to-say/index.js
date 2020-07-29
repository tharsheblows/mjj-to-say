/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './Edit';

/**
 * Style dependencies
 */
import './editor.scss';
import './style.scss';

/**
 * Block constants
 */
const { name, category, attributes, supports } = metadata;

console.log( 'jts' )

const settings = {
	title: __( 'Just to say', 'just-to-say' ),
	description: __( 'Guided user generated poetry.', 'just-to-say' ),
	icon: 'editor-kitchensink',
	keywords: [
		__( 'poetry', 'just-to-say' )
	],
	attributes,
	supports,
	edit: Edit,
	save: () => null,
};
export { name, category, settings };
