import './BlockId.scss';
import { __ } from '@wordpress/i18n';

const BlockId = (props: {
	attributes: {
		blockId: string;
	};
}) => (
	<div className={'mrblx--block-id'}>
		<div>
			<div className={'mrblx-label'}>{__('block id')}:</div>
			<div>
				<strong>mrblx-{props.attributes.blockId}</strong>
			</div>
		</div>
		<div>
			<small>
				{__(
					'This block has a persistent block ID and may be referenced in an anchor tag.'
				)}
			</small>
		</div>
	</div>
);

export default BlockId;
