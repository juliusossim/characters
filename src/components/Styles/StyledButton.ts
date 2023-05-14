import tw, { styled } from "twin.macro";
import { ButtonProps } from "../Button";
import { defaultMode, buttonVariants, buttonSizes } from "./misc";


export const StyledButton = styled.button<ButtonProps>(({ variant = defaultMode, size = 'sm', }) => [
    tw`
    flex justify-center items-center border border-gray-300 disabled:opacity-70 
    disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none
     hover:opacity-80
      `,
    buttonVariants[variant],
    buttonSizes[size]

  ]);
