import tw, { styled } from 'twin.macro'
import { containerVariants, defaultMode } from './misc';
import { MainProps } from './type';


export const StyledCard = styled.div<MainProps>(({ variant = defaultMode }) => [
  tw` max-w-sm md:w-fit lg:p-3 rounded-md h-full flex-col justify-center items-center
  relative
    `,
  containerVariants[variant],

]);


