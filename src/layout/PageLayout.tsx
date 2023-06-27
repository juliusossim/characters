import { Head } from '@/components/Head';
import { ReactNode } from 'react';

type PageLayoutProps = {
	children: ReactNode;
	title: string;
};
export const PageLayout = ({ children, title }: PageLayoutProps) => (
	<div>
		<Head title={title} />
		{children}
	</div>
);
