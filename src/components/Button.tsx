import { ButtonHTMLAttributes, forwardRef, ReactElement } from 'react';
import { buttonSizes, buttonVariants } from './Styles/misc';
import { StyledButton } from './Styles/StyledButton';
import { Spinner } from './UI/Spinner';

type IconProps =
	| { startIcon: ReactElement; endIcon?: never }
	| { endIcon: ReactElement; startIcon?: never }
	| { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof buttonVariants;
	size?: keyof typeof buttonSizes;
	isLoading?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			type = 'button',
			className = '',
			variant = 'primary',
			size = 'md',
			isLoading = false,
			startIcon,
			endIcon,
			...props
		},
		ref
	) => {
		return (
			<StyledButton ref={ref} type={type} {...props}>
				{isLoading && <Spinner size="sm" className="text-current" />}
				{!isLoading && startIcon}
				<span className="mx-2">{props.children}</span> {!isLoading && endIcon}
			</StyledButton>
		);
	}
);

Button.displayName = 'Button';
