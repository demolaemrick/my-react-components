import { ReactNode } from 'react';
import Button from 'stories/Button';
import { HiOutlineLogout, HiLogout } from 'react-icons/hi';

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
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="flex flex-col gap-2">
				<Header>Contained Button</Header>
				<FlexRow>
					<Button>Primary</Button>
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
			</div>
		</div>
	);
}
export default App;
