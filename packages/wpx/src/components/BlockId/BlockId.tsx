import './BlockId.scss';
import { __ } from '@wordpress/i18n';

const BlockId = (props: {
	attributes: {
		blockId: string;
	};
}) => (
	<div className={'wpx--block-id'}>
		<div>
			<div className={'wpx-label'}>{__('block id')}:</div>
			<div>
				<strong>wpx-{props.attributes.blockId}</strong>
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
