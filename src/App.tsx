/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { HiOutlineLogout, HiLogout, HiOutlineEye } from 'react-icons/hi';

import Button from 'stories/Inputs/Button/Button';
import Input from 'stories/Inputs/Input/Input';
import Select, { OptionType } from 'stories/Inputs/Select/Select';
import InputAdornment from 'components/ui/InputAdornment';
import ReactSelect from 'react-select';

export interface ColourOption {
	readonly value: string;
	readonly label: string;
	readonly color: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
	{ value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
	{ value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
	{ value: 'purple', label: 'Purple', color: '#5243AA' },
	{ value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
	{ value: 'orange', label: 'Orange', color: '#FF8B00' },
	{ value: 'yellow', label: 'Yellow', color: '#FFC400' },
	{ value: 'green', label: 'Green', color: '#36B37E' },
	{ value: 'forest', label: 'Forest', color: '#00875A' },
	{ value: 'slate', label: 'Slate', color: '#253858' },
	{ value: 'silver', label: 'Silver', color: '#666666' },
];

const options: OptionType[] = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

const loginSchema = yup.object({
	name: yup.string().required().min(3),
	favorites: yup.array().min(2).required(),
});

interface PropTypes {
	children: ReactNode;
}

const Header = ({ children }: PropTypes) => (
	<h1 className="text-center text-2xl text-green-500">{children}</h1>
);
const FlexRow = ({ children }: PropTypes) => (
	<div className="flex justify-center gap-2 mb-6">{children}</div>
);

function App() {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		resolver: yupResolver(loginSchema),
		mode: 'all', //this allows validation to happen on every input state e.g onFocus
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => alert(data);
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="flex flex-col gap-2">
				<Header>Contained Button</Header>
				<FlexRow>
					<Button>Primary</Button>
					<Button color="secondary">Secondary</Button>
					<Button color="success">Success</Button>
					<Button color="warning">Warning</Button>
					<Button color="danger">Danger</Button>
					<Button color="info">Info</Button>
					<Button disabled>Disabled</Button>
				</FlexRow>
				<Header>Outlined Button</Header>
				<FlexRow>
					<Button variant="outlined">Primary</Button>
					<Button variant="outlined" color="secondary">
						Secondary
					</Button>
					<Button variant="outlined" disabled>
						Disabled
					</Button>
				</FlexRow>
				<Header>Text Button</Header>
				<FlexRow>
					<Button variant="text">Primary</Button>
					<Button variant="text" color="secondary">
						Secondary
					</Button>
					<Button variant="text" disabled>
						Disabled
					</Button>
				</FlexRow>
				<Header>Buttons with Icon</Header>
				<FlexRow>
					<Button startIcon={<HiOutlineLogout />}>Primary</Button>
					<Button color="secondary" disableElevation endIcon={<HiLogout />}>
						Secondary
					</Button>
				</FlexRow>
				{/* <button className="bg-red-500 text-white px-[10px] py-1 min-w-[64px] hover:bg-black rounded-lg cursor-default select-none shadow-mui-button text-sm">
					SMALL
				</button> */}
				<form
					className="w-[300px] space-y-6 mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Input
						id="name"
						label="Name"
						type="text"
						placeholder="Enter your name"
						register={register}
						errors={errors}
						inputProps={{
							endAdornment: (
								<InputAdornment position="end" adornment={<HiOutlineEye />} />
							),
						}}
					/>
					<Select
						placeholder="Choose your favorite"
						isMulti
						control={control}
						options={options}
					/>
					<ReactSelect
						defaultValue={[colourOptions[2], colourOptions[3]]}
						isMulti
						name="colors"
						options={colourOptions}
						className="basic-multi-select"
						classNamePrefix="select"
					/>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
export default App;
