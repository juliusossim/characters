import { NavItem } from './NavItem';
import { StyledList } from '@/components/Styles/Sidebar';
import { AppProviderContext } from '@/providers/providerContex';
import { useContext } from 'react';
import { CharacterDataType } from '@/features/character/types';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

type NavListProps = {
	open: any;

	toggle: () => void;
	currentCharacters: CharacterDataType[];
};

export const NavList = ({ toggle, open, currentCharacters }: NavListProps) => {
	if (currentCharacters?.length < 1) return <></>;

	return (
		<StyledList isOpen={open} variants={variants}>
			{currentCharacters?.map(
				(character, index) =>
					index < 8 && (
						<NavItem
							open={open}
							toggle={toggle}
							item={character}
							key={character.id}
						/>
					)
			)}
		</StyledList>
	);
};
