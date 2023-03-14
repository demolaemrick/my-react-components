/* eslint-disable import/no-extraneous-dependencies */
import { MouseEvent, ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Spinner from 'components/ui/Spinner';

import { buttonConfig } from 'theme';

interface ButtonProps {
	children?: ReactNode;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'contained' | 'outlined' | 'text';
	color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	loadingIndicator?: string;
	loader?: JSX.Element;
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
	useDefaultLoader?: boolean;
	disableElevation?: boolean;
}

// type SpanStyles = { [key: string]: React.CSSProperties };

const Button = ({
	children,
	className,
	onClick,
	type = 'button',
	variant = 'contained',
	color = 'primary',
	size = 'md',
	fullWidth,
	disabled,
	loading,
	loadingIndicator = 'Loading...',
	loader = <Spinner />,
	endIcon,
	startIcon,
	useDefaultLoader = false,
	disableElevation = false,
}: ButtonProps) => {
	// const [count, setCount] = useState(0);
	// const [spanStyles, setSpanStyles] = useState<SpanStyles>({});
	// const debounceTimeout = useRef<number | undefined>();

	// const showRipple = (e: MouseEvent<HTMLDivElement>) => {
	// 	const rippleContainer = e.currentTarget;
	// 	const sizeVar = rippleContainer.offsetWidth;
	// 	const pos = rippleContainer.getBoundingClientRect();
	// 	const x = e.pageX - pos.x - sizeVar / 2;
	// 	const y = e.pageY - pos.y - sizeVar / 2;
	// 	// const spanStyles = {
	// 	// 	top: y + 'px',
	// 	// 	left: x + 'px',
	// 	// 	height: size + 'px',
	// 	// 	width: size + 'px',
	// 	// };
	// 	const spanStylesVar = {
	// 		top: `${y}px`,
	// 		left: `${x}px`,
	// 		height: `${sizeVar}px`,
	// 		width: `${sizeVar}px`,
	// 	};
	// 	setCount((prevCount) => prevCount + 1);
	// 	setSpanStyles((prevSpanStyles) => {
	// 		return { ...prevSpanStyles, [count]: spanStylesVar };
	// 	});
	// 	// this.setState({
	// 	// 	spanStyles: { ...this.state.spanStyles, [count]: spanStyles },
	// 	// 	count,
	// 	// });
	// };

	// const renderRippleSpan = () => {
	// 	const spanArray = Object.keys(spanStyles);
	// 	if (spanArray && spanArray.length > 0) {
	// 		return spanArray.map((key, index) => {
	// 			return (
	// 				<span
	// 					key={`spanCount_${index}`}
	// 					className="scale-0 rounded-full absolute overflow-hidden opacity-75 bg-white animate-ripple"
	// 					style={{ ...spanStyles[key] }}
	// 				></span>
	// 			);
	// 		});
	// 	} else {
	// 		return null;
	// 	}
	// };

	// const cleanUp = () => {
	// 	// const initialState = this.initializeState();
	// 	// this.setState({ ...initialState });
	// 	setCount(0);
	// 	setSpanStyles({});
	// };

	// const callCleanUp = (cleanup: () => void, delay: number) => {
	// 	return () => {
	// 		clearTimeout(debounceTimeout.current);
	// 		debounceTimeout.current = window.setTimeout(() => {
	// 			cleanup();
	// 		}, delay);
	// 	};
	// };

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		onClick && onClick(e);
	};

	const classList = clsx(
		'relative hidden flex items-center justify-center gap-2',
		{
			[`${buttonConfig[color].contained}`]:
				variant === 'contained' && !disabled,
			[`${buttonConfig[color].text}`]: variant === 'text',
			[`${buttonConfig[color].outlined}`]: variant === 'outlined',
			'shadow-mui-button hover:shadow-mui-button-hover active:shadow-mui-button-active':
				variant === 'contained' && !disabled && !loading && !disableElevation,
			'cursor-default text-black/25': disabled || loading,
			'bg-black/[0.12]': disabled && variant === 'contained',
			'hover:bg-transparent': disabled && variant !== 'contained',
			'border-black/[0.12]': disabled && variant === 'outlined',
			'w-full': fullWidth,
			'text-transparent hover:text-transparent': loading && useDefaultLoader,
		},
		size && buttonConfig[size],
		className
	);

	let buttonContent = (
		<>
			{startIcon && <>{startIcon}</>}
			{children}
			{endIcon && <>{endIcon}</>}
		</>
	);
	if (loading && !useDefaultLoader) {
		buttonContent = <>{loadingIndicator}</>;
	}
	if (loading && useDefaultLoader) {
		buttonContent = (
			<>
				<>{loader}</>
				{buttonContent}
			</>
		);
	}
	return (
		<button
			type={type}
			disabled={disabled || loading}
			onClick={handleClick}
			className={twMerge(
				clsx(
					classList,
					'min-w-[64px] font-medium rounded-md uppercase leading-7 select-none'
				)
			)}
		>
			{buttonContent}
		</button>
	);
};

export default Button;
