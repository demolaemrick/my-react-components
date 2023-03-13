/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line import/no-extraneous-dependencies
import { UseFormReturn, FieldErrors } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

import Label from 'components/ui/InputLabel';
import FormGroup from 'components/ui/FormGroup';

import { inputConfig } from 'theme';

interface InputProps {
	id: string;
	label: string;
	type: string;
	placeholder: string;
	size?: 'xs' | 'sm' | 'md' | 'lg';
	variant?: 'outlined' | 'filled' | 'flushed' | 'unstyled';
	inputProps?: {
		startAdornment?: JSX.Element;
		endAdornment?: JSX.Element;
	};
	className?: string;
	register: UseFormReturn['register'];
	errors?: FieldErrors;
}

const Input = ({
	id,
	label,
	type,
	size = 'lg',
	variant = 'outlined',
	inputProps,
	placeholder,
	className,
	register,
	errors,
}: InputProps) => {
	return (
		<div className="w-full">
			<Label htmlFor={id}>{label}</Label>
			<FormGroup>
				{inputProps?.startAdornment}
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register(id, { required: true })}
					className={twMerge(
						clsx(
							'w-full font-light text-gray-700  overflow-visible rounded select-none  placeholder:text-[#1C345442] placeholder:font-normal placeholder:text-base transition ease-in-out duration-200',
							size && !inputProps
								? inputConfig[size].normal
								: inputConfig[size].withIcon,
							{
								'outline-primary':
									variant === 'outlined' || variant === 'filled',
								'outline-none': variant === 'flushed' || variant === 'unstyled',
								'border hover:border-gray-300': variant === 'outlined',
								'bg-gray-100 shadow hover:bg-gray-200 focus:bg-transparent focus:shadow-none':
									variant === 'filled',
								'border-b px-0 rounded-none focus:border-b-2 focus:border-primary':
									variant === 'flushed',
								'rounded-none': variant === 'unstyled',
							},

							className
						)
					)}
				/>
				{inputProps?.endAdornment}
			</FormGroup>
			{errors && errors[id] && (
				<span className="text-xs text-danger select-none">
					<>{errors[id]?.message}</>
				</span>
			)}
		</div>
	);
};

export default Input;
