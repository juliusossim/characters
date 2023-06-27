import { useRef, useContext } from 'react';
import { useCycle } from 'framer-motion';
import { MenuToggler } from './MenuToggler';
import { NavList } from './NavList';
import { useMeasurement } from './useMeasurment';
import { StyledCanvass, StyledNav } from '@/components/Styles/Sidebar';
import { AppProviderContext } from '@/providers/providerContex';

const sidebar = {
	open: (height = 1000) => {
		return {
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
			},
		};
	},
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const Sidebar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useMeasurement(containerRef);

	const { currentCharacters } = useContext(AppProviderContext);

	const toggle = () => toggleOpen();
	const toggleOff = () => toggleOpen(0);

	return (
		<StyledNav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}>
			<StyledCanvass variants={sidebar} />
			<NavList
				currentCharacters={currentCharacters}
				toggle={toggleOff}
				open={isOpen}
			/>
			<MenuToggler toggle={toggle} disabled={currentCharacters?.length < 1} />
		</StyledNav>
	);
};
