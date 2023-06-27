import { ErrorElement } from '@/components/UI/ErrorElement';
import { Layout } from '@/layout';
import { lazyImport } from '@/utils/lazyImports';
import { SuspenseLoader } from '@/utils/suspenseLoader';
import { AnimatePresence } from 'framer-motion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { viewCharacter as characterLoader } from '@/features/character/api/viewCharacter';

export const AppRoutes = () => {
	const { Character } = lazyImport(
		() => import('@/features/character/routes/Character'),
		'Character'
	);
	const { Characters } = lazyImport(
		() => import('@/features/character/routes/Characters'),
		'Characters'
	);

	const routes = createBrowserRouter([
		{
			path: '',
			errorElement: <ErrorElement />,
			element: (
				<SuspenseLoader>
					<Layout />
				</SuspenseLoader>
			),
			children: [
				{
					path: '',
					element: (
						<SuspenseLoader>
							<Characters />
						</SuspenseLoader>
					),
				},
				{
					path: ':id',
					loader: characterLoader,
					element: (
						<SuspenseLoader>
							<Character />
						</SuspenseLoader>
					),
				},
			],
		},
	]);
	return (
		<>
			<AnimatePresence>
				<RouterProvider router={routes} />
			</AnimatePresence>
		</>
	);
};
