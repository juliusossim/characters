import {
	StyledListItem,
	StyledIconContainer,
	StyledTextContainer,
} from '@/components/Styles/Sidebar';
import { Link } from 'react-router-dom';
import { IntrinsicElementsKeys } from 'styled-components';
import { WrapInLink } from './WrapInLink';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

type NavItemProps = {
	item: {
		[key: string]: string | any;
	};
	key: IntrinsicElementsKeys;
	toggle: () => void;
	open: any;
};

export const NavItem = ({ open, item, toggle }: NavItemProps) => {
	const randomNumber: number = Math.floor(Math.random() * 5);

	const style = { border: `2px solid ${colors[randomNumber]}` };
	return (
		<WrapInLink open={open} to={`${item.id}`} toggle={toggle}>
			<StyledListItem
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}>
				<StyledIconContainer
					style={style}
					srcSet={item.img_url}
					alt={item.name}
				/>

				<StyledTextContainer style={style}>{item.name}</StyledTextContainer>
			</StyledListItem>
		</WrapInLink>
	);
};
