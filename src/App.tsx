/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'stories/Inputs/Button/Button';
import Input from 'stories/Inputs/Input/Input';
import InputAdornment from 'components/ui/InputAdornment';
import { HiOutlineLogout, HiLogout, HiOutlineEye } from 'react-icons/hi';

const loginSchema = yup.object({
	name: yup.string().required().min(3),
	age: yup
		.number()
		.required()
		.min(18, 'you must be atleast 18years old to continnue'),
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
					<Button loading useDefaultLoader>
						Primary
					</Button>
					<Button color="secondary">Secondary</Button>
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
					<Button color="secondary" endIcon={<HiLogout />}>
						Secondary
					</Button>
				</FlexRow>
				{/* <button className="bg-red-500 text-white px-[10px] py-1 min-w-[64px] hover:bg-black rounded-lg cursor-default select-none shadow-mui-button text-sm">
					SMALL
				</button> */}
				<form className="w-[300px] space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<Input
						id="name"
						label="Name"
						type="text"
						placeholder="Enter your name"
						register={register}
						errors={errors}
						inputProps={{
							startAdornment: (
								<InputAdornment position="start" adornment={<HiOutlineEye />} />
							),
							endAdornment: (
								<InputAdornment position="end" adornment={<HiOutlineEye />} />
							),
						}}
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
