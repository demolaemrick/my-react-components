import { clsx } from 'clsx';

const positionConfig = {
	start: 'left-2',
	end: 'right-2',
};
interface InputAdornmentProps {
	adornment: JSX.Element;
	pointerEvents?: 'none' | 'auto';
	position: 'start' | 'end';
}

const InputAdornment = ({
	adornment,
	pointerEvents = 'auto',
	position,
}: InputAdornmentProps) => (
	<div
		className={clsx(
			`absolute ${positionConfig[position]} ${
				pointerEvents === 'auto' ? 'pointer-events-auto' : 'pointer-events-none'
			} z-10 select-none`
		)}
	>
		{adornment}
	</div>
);

export default InputAdornment;
