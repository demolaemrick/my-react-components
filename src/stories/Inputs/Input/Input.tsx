/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line import/no-extraneous-dependencies
import { UseFormReturn, FieldErrors } from 'react-hook-form';
import Label from 'components/ui/InputLabel';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	type: string;
	placeholder: string;
	register: UseFormReturn['register'];
	errors?: FieldErrors;
}

const Input = ({
	id,
	label,
	type,
	placeholder,
	register,
	errors,
	...rest
}: InputProps) => {
	return (
		<div className="my-4">
			<Label htmlFor={id}>{label}</Label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				{...register(id, { required: true })}
				{...rest}
				className="w-full h-[42px] max-h-[42px] p-[10px] border-none font-light text-gray-700 bg-[#1A38601A] rounded z-0 focus:shadow focus:outline-none focus:ring-primary placeholder:text-[#1C345442] placeholder:font-extralight placeholder:text-base"
			/>
			{errors && errors[id] && (
				<span className="text-xs text-danger">
					<>{errors[id]?.message}</>
				</span>
			)}
		</div>
	);
};

export default Input;
