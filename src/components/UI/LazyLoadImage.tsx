import {
	LazyLoadComponentProps,
	LazyLoadImage,
} from 'react-lazy-load-image-component';

interface LazyImageProps extends LazyLoadComponentProps {
	src: any;
	alt: string;
	placeholder: any;
	effect: any;
}

export const LazyLoadImageComponent = ({
	src,
	afterLoad,
	alt,
	placeholder,
	scrollPosition,
}: LazyImageProps) => {
	<LazyLoadImage
		src={src}
		alt={alt}
		placeholderSrc={placeholder}
		scrollPosition={scrollPosition}
		afterLoad={afterLoad}
		width={500}
		height={500}
	/>;
};
