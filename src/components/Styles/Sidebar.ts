import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledIconContainer = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	flex: 40px 0;
	margin-right: 20px;
	margin-top: 10px;
`;

export const StyledTextContainer = tw.div`
  rounded-lg min-w-[150px] h-fit p-3

  `;

export const StyledList = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 40px;
	width: 230px;

	${tw`m-0  h-full `}
`;
export const StyledListItem = styled(motion.li)`
	list-style: none;
	display: flex;
	align-items: center;
	cursor: pointer;
	${tw`m-0 invisible lg:visible`}
`;

export const StyledCanvass = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	background: #fff;
	${tw`invisible lg:visible`}
`;

export const StyledNav = tw(motion.nav)`
    fixed top-0 left-0 bottom-0 w-[300px] z-50 invisible lg:visible
`;

export const StyledIconButton = styled.button`
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	border-radius: 50%;
	background: transparent;
	width: 50px;
	height: 50px;
`;

export const SidebarIconButton = styled(StyledIconButton)`
	top: 18px;
	left: 25px;
	${tw`disabled:cursor-not-allowed`}
`;
export const HomeIcon = tw(StyledIconButton)`
  rounded-full bg-black text-white z-50
flex items-center justify-center text-3xl
top-5 fixed hover:scale-105 right-0 
`;
