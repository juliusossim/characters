import { TwStyle } from 'twin.macro';

export type MainVariantProps = {
  [key: string]: TwStyle;
};

export interface MainProps {
  variant?: string;
  isOpen?: boolean;
}
