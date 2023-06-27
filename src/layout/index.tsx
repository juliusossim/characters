import { useContext, useRef } from 'react';
import { Link, useOutlet } from 'react-router-dom';
import { Sidebar } from '@/components/UI/Sidebar';
import { HomeIcon } from '@/components/Styles/Sidebar';
import { HiOutlineHome } from 'react-icons/hi';
import { AppProviderContext } from '@/providers/providerContex';
import { StyledTopbar } from '@/components/Styles/StyledTopbar';

export const Layout = () => {
	const { currentCharacters } = useContext(AppProviderContext);
	const SHOW_MENU = currentCharacters?.length > 0;

	return (
		<>
			<Sidebar />

			<Link to="">
				<HomeIcon>
					<HiOutlineHome />
				</HomeIcon>
			</Link>

			{useOutlet()}
		</>
	);
};
