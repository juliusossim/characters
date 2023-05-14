import tw, { styled } from 'twin.macro';
import { Textsizes, textVariants } from './misc';
import { MainProps } from './type';

interface TypographyProps extends MainProps {
  size?: string;
}

export const Typography = styled.div<TypographyProps>(({ variant = 'none', size = 'small' }) => [
  textVariants[variant],
  Textsizes[size]
]);
