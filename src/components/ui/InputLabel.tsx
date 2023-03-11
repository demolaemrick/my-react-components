const InputLabel = ({
	htmlFor,
	children,
}: {
	htmlFor: string;
	children: React.ReactNode;
}) => {
	return (
		<label
			htmlFor={htmlFor}
			className="select-none inline-block mb-2 font-light text-sm text-[#1B2B41B8]"
		>
			{children}
		</label>
	);
};

export default InputLabel;
