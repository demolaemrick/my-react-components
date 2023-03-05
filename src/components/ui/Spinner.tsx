const Spinner = ({ size = 18, color }: { size?: number; color?: string }) => {
	return (
		<span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.0"
				width={size}
				height={size}
				viewBox="0 0 128 128"
			>
				<g>
					<path
						d="M75.4 126.63a11.43 11.43 0 01-2.1-22.65 40.9 40.9 0 0030.5-30.6 11.4 11.4 0 1122.27 4.87h.02a63.77 63.77 0 01-47.8 48.05v-.02a11.38 11.38 0 01-2.93.37z"
						fill={color ? color : '#fff'}
					/>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 64 64"
						to="360 64 64"
						dur="1000ms"
						repeatCount="indefinite"
					/>
				</g>
			</svg>
		</span>
	);
};

export default Spinner;
