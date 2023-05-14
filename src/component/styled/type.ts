import { TwStyle } from 'twin.macro'

export type MainVariantProps = {
    [key: string]: TwStyle;
  }

  export type MainProps = {
    variant?: string;
    isOpen?: boolean,
    size?: string
  }
