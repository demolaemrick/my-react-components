/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/no-extraneous-dependencies */
import ReactSelect, { OptionProps, StylesConfig } from 'react-select';
import { clsx } from 'clsx';

import Label from 'components/ui/InputLabel';

interface OptionType {
	readonly value: string;
	readonly label: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}

interface SelectProps {
	size?: 'base' | 'lg';
	isMulti?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	isSearchable?: boolean;
	isClearable?: boolean;
	hideSelectedOptions?: boolean;
	isRtl?: boolean;
}

const options: readonly OptionType[] = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

const sizeStyles = {
	base: {
		height: 40,
		padding: '0 16px',
	},
	lg: {
		height: 48,
	},
};

const CustomOption = ({
	innerProps,
	isDisabled,
	label,
	isSelected,
}: OptionProps<OptionType>) =>
	!isDisabled ? (
		<div {...innerProps}>
			<div
				className={clsx(
					'flex items-center gap-2 text-primary font-light px-6 py-2 rounded cursor-pointer transition-all duration-200',
					isSelected && 'bg-primary text-light',
					!isSelected && 'hover:bg-primary/50'
				)}
			>
				{isSelected && (
					<svg
						width="11"
						height="9"
						viewBox="0 0 11 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.28033 4.77494C0.987437 4.48205 0.512563 4.48205 0.21967 4.77494C-0.0732233 5.06784 -0.0732233 5.54271 0.21967 5.8356L2.94202 8.55796C3.23491 8.85085 3.70979 8.85085 4.00268 8.55796L10.447 2.11364C10.7399 1.82075 10.7399 1.34588 10.447 1.05298C10.1541 0.76009 9.67923 0.76009 9.38634 1.05298L3.47235 6.96697L1.28033 4.77494Z"
							fill="#50AAA7"
						/>
					</svg>
				)}

				<>{label}</>
			</div>
		</div>
	) : null;

const customStyles: StylesConfig<OptionType> = {
	control: (base, { isFocused }) => ({
		...base,
		boxShadow: 'none',
		borderColor: isFocused ? '#7749F8' : '#e5e7eb',
		borderWidth: isFocused ? 2 : 1,
		'&:hover': {
			borderColor: isFocused ? '#7749F8' : '#e5e7eb',
		},
	}),
	placeholder: (base) => ({
		...base,
		fontSize: '1em',
		color: '#18273AF0',
		fontWeight: 300,
	}),
	valueContainer: (base) => ({
		...base,
	}),
};
const Select = ({
	size = 'base',
	isMulti = false,
	isDisabled = false,
	isLoading = false,
	isSearchable = true,
	isClearable = true,
	hideSelectedOptions = false,
	isRtl = false,
	...rest
}: SelectProps) => {
	return (
		<div className="w-full">
			<Label htmlFor="">Favorites</Label>
			<ReactSelect
				styles={{
					...customStyles,
					control: (base) => ({
						...base,
						...(!isMulti && { height: sizeStyles[size].height }),
					}),
				}}
				isMulti={isMulti}
				isDisabled={isDisabled}
				isLoading={isLoading}
				isClearable={isClearable}
				isRtl={isRtl}
				isSearchable={isSearchable}
				hideSelectedOptions={hideSelectedOptions}
				options={options}
				components={{
					IndicatorSeparator: () => null,
					Option: CustomOption,
				}}
				{...rest}
			/>
		</div>
	);
};

export default Select;
