export const buttonConfig = {
	// Colors
	primary: {
		contained:
			'bg-primary hover:bg-primary-dark disabled:bg-primary text-white hover:text-white',
		text: 'bg-transparent text-primary hover:bg-primary/5',
		outlined: 'border border-primary text-primary hover:bg-primary-dark/5',
	},
	secondary: {
		contained:
			'bg-secondary hover:bg-secondary-dark disabled:bg-secondary text-white hover:text-white',
		text: 'bg-transparent text-secondary hover:bg-secondary/5',
		outlined:
			'border border-secondary text-secondary bg-opacity-0 hover:bg-secondary/10',
	},

	// Sizes
	sm: 'px-2.5 py-1',
	md: 'px-4 py-1.5',
	lg: 'px-5 py-2',
};

const INPUT_WITH_ICON_SPACING = 'px-7';

export const inputConfig = {
	//Sizes
	xs: {
		normal: 'px-2 h-6',
		withIcon: `${INPUT_WITH_ICON_SPACING} h-6`,
	},
	sm: {
		normal: 'px-3 h-8',
		withIcon: `${INPUT_WITH_ICON_SPACING} h-8`,
	},
	md: {
		normal: 'px-4 h-10',
		withIcon: `${INPUT_WITH_ICON_SPACING} h-10`,
	},
	lg: {
		normal: 'px-4 h-12',
		withIcon: `${INPUT_WITH_ICON_SPACING} h-12`,
	},
};
