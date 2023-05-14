import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageBox, ImageLoader, LoaderSvg } from '../Styles/ImgBox';
import { Loader } from './Loader';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

type FigureProps = { uri: any; alt: string };

export const FigureBox = ({ uri, alt }: FigureProps) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<Loader />
			<motion.div
				initial={false}
				animate={
					isLoaded && isInView
						? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
						: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
				}
				transition={{ duration: 1, delay: 1 }}
				viewport={{ once: true }}
				onViewportEnter={() => setIsInView(true)}>
				<ImageBox src={uri} alt={alt} onLoad={() => setIsLoaded(true)} />
			</motion.div>
		</div>
	);
};
