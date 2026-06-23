import { registerBlockType } from '@wordpress/blocks';

import metadata from './home-banner-section/block.json';
import Edit from './home-banner-section/edit';
import save from './home-banner-section/save';

registerBlockType(metadata.name, {
	edit: Edit,
	save,
});