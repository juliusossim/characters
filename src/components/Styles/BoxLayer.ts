import tw, { styled } from 'twin.macro';

export const BoxLayer = styled.div`
  ${tw`
  w-full
  rounded
  flex justify-center items-center m-auto

  lg:w-fit lg:min-w-[50%] lg:max-w-[60%] lg:h-1/4 lg:px-3
  lg:absolute lg:translate-x-1/3 top-1/2
  lg:invisible
  group-hover:font-semibold group-hover:font-serif group-hover:text-2xl
  lg:group-hover:visible lg:group-hover:backdrop-blur lg:group-hover:bg-purple-100
  `}
`;
