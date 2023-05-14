import tw, { styled } from 'twin.macro';
import { ButtonProps } from '../Button';
import { defaultMode, buttonVariants, buttonSizes, mainVariants } from './misc';
import { MainProps } from './type';

export const StyledFooter = styled.footer<MainProps>(({ variant = defaultMode }) => [
  tw`
    flex justify-center items-center bg-blend-darken backdrop-blur
     drop-shadow-2xl  font-medium w-full gap-5 py-5 fixed bottom-0 z-50 
    
      `,
  mainVariants[variant]
]);

export const FooterPageWrapper = tw.section`mb-24 w-full`;
