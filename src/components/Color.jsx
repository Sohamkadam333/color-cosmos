import { useState } from 'react';
import '../styles/color.css';
const Color = (props) => {
	const [hover, setHover] = useState(false);

	const onMouseEnter = () => {
		setHover(true);
	};

	const onMouseLeave = () => {
		setHover(false);
	};
	return (
		<div
			className='color'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			style={{ backgroundColor: props.color }}>
			<p className='colorCode'>{props.color}</p>
			{hover ? (
				<div className='action-btns'>
					<button>Open Color</button>
					<button>Copy Color</button>
				</div>
			) : null}
		</div>
	);
};

export default Color;
