import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const { heading, text, button1Text, button2Text } = attributes;

	return (
		<div {...useBlockProps()}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				display: 'flex',
				gap: '20px'
			}}>

				{/* LEFT */}
				<div style={{ width: '50%' }}>

					<RichText
						tagName="h1"
						value={heading}
						onChange={(val) => setAttributes({ heading: val })}
						placeholder="Heading"
					/>

					<RichText
						tagName="p"
						value={text}
						onChange={(val) => setAttributes({ text: val })}
						placeholder="Text"
					/>

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