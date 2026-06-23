import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { heading, text, button1Text, button2Text } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				display: 'flex',
				gap: '20px'
			}}>

				{/* LEFT */}
				<div style={{ width: '50%' }}>
					<RichText.Content tagName="h1" value={heading} />
					<RichText.Content tagName="p" value={text} />

					<div style={{ display: 'flex', gap: '10px' }}>
						<span>{button1Text}</span>
						<span>{button2Text}</span>
					</div>
				</div>

				{/* RIGHT */}
				<div style={{ width: '50%' }}></div>

			</div>
		</div>
	);
}