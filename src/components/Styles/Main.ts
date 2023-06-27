import tw, { styled } from 'twin.macro';
import { mainVariants, defaultMode } from './misc';
import { MainProps } from './type';

export const Main = styled.section<MainProps>(({ variant = defaultMode }) => [
	tw`
  flex justify-center items-center m-auto lg:px-20 
  `,
	mainVariants[variant],
]);

export const MainWrapper = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
