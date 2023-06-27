import { PageLoader } from '@/components/UI/PageLoader';
import { Suspense, ReactNode } from 'react';

type SuspenseProps = {
	children: ReactNode;
};

export const SuspenseLoader = ({ children }: SuspenseProps) => (
	<Suspense fallback={<PageLoader />}>{children}</Suspense>
);
