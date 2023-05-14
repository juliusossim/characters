import styled  from 'twin.macro'
import { Textsizes, textVariants } from './misc';
import { MainProps } from './type';


export const Typography = styled.div<MainProps>(({ variant = 'none', size = 'small'}) => [
  textVariants[variant],
  Textsizes[size]
]);

