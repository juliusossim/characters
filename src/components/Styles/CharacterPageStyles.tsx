import { motion } from "framer-motion";
import tw from "twin.macro";
import { Typography } from "./Typography";

export const StyledCharacterCard = tw(motion.section)`
max-w-screen-lg bg-indigo-50 

flex justify-center items-center
flex-col px-10 py-5 rounded-tl-2xl
gap-10 
`
export const StyledCharacterImage = tw(motion.img)`
aspect-auto group-hover:shadow-2xl group-hover:drop-shadow-2xl group-hover:shadow-blue-200
rounded-full bg-amber-500 group-hover:px-5 py-7 group-hover:bg-indigo-200

`

export const StyledCharacterList = tw.ul`
border-2 border-amber-50  group-hover:border-t-0 group-hover:border-r-0 w-full py-20 my-5
px-10 group-hover:drop-shadow-2xl group-hover:shadow-gray-500 group-hover:shadow-2xl flex flex-wrap justify-center
`

export const StyledCharacterListItem = tw.li`
text-blue-500 bg-neutral-700 last-of-type:bg-white first-of-type:bg-amber-500 min-w-fit p-2 m-4
text-2xl rounded-full py-10
`
export const CharactersWrapper = tw(StyledCharacterCard)`bg-white `

export const CharacterFooter = tw.footer`
bg-gradient-to-b from-transparent via-gray-400 
w-[109%] static bottom-0 box-decoration-slice flex-col px-5 flex flex-wrap
`

export const BorderedText = tw(Typography)`border-amber-300 border-solid border-2 bg-white pl-24 py-1
pr-2 my-1 rounded-2xl ml-2
`

export const ClippedText = tw(Typography)`bg-clip-text bg-gradient-to-r from-amber-500 to-purple-400 text-transparent`

export const LeftBox = tw(motion.div)`
 rounded-full lg:w-fit  p-10 bg-white flex flex-wrap h-fit
justify-center gap-x-2
`

export const RightBox = tw(motion.div)`w-full flex justify-end p-7 bg-gradient-to-r from-transparent to-white`