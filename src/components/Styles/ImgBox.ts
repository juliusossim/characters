import tw from 'twin.macro';

export const ImageBox = tw.img`
w-[300px] h-[300px] 
`;
export const ImageLoader = tw.div`
absolute bg-white bg-opacity-60 w-full h-full lg:h-[300px] lg:w-[300px] flex items-center justify-center 
lg:group-hover:w-[98%] lg:group-hover:h-[98%]
 group-hover:bg-gradient-to-tl group-hover:from-white group-hover:to-purple-400
 transition-all duration-300 ease-linear
`;
export const LoaderSvg = tw.svg`
animate-spin h-5 w-5 text-gray-600 
first-of-type:opacity-25
last-of-type:opacity-75
`;
