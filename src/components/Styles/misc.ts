import { MainVariantProps } from './type'
import tw from 'twin.macro'

 export const mainVariants: MainVariantProps = {
    light: tw`bg-white text-black`,
    dark: tw`bg-black text-white`,
    darkPrimary: tw` bg-gradient-to-b from-amber-50 to-gray-700 text-white hover:text-indigo-400`,
    lightPrimary: tw` bg-gradient-to-b from-amber-50 to-gray-300 text-blue-700 hover:text-black`,
  }

  export const containerVariants: MainVariantProps ={
    light: tw`bg-gradient-to-bl from-neutral-50 to-lime-100/25 text-blue-700 hover:text-gray-600`,
    dark: tw` bg-gradient-to-b from-amber-50 to-amber-900 text-white hover:text-indigo-400`
  }

  export const textVariants: MainVariantProps ={
    light: tw`text-black`,
    dark: tw`text-orange-400`,
    primary: tw`text-blue-700`
    }

    export const Textsizes: MainVariantProps = {
      small: tw`text-sm md:text-lg lg:text-xl xl:text-2xl`,
      big: tw`font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl lg:font-extrabold`,
      large: tw`font-extrabold text-xl lg:text-3xl `
    }

    export const buttonVariants: MainVariantProps = {
      dark: tw`text-white  bg-blend-darken bg-gray-800` ,
      light: tw`bg-white text-blue-600`,
      danger: tw`bg-red-600 text-white`
    }
    
    export const buttonSizes: MainVariantProps = {
      sm: tw`py-2 px-4 text-sm`,
      md: tw`py-2 px-6 text-lg`,
      lg: tw`py-3 px-8 text-xl`,
    };

 export const defaultMode = 'dark'
