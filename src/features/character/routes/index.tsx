import { lazyImport } from '@/utils/lazyImports';
import { SuspenseLoader } from '@/utils/suspenseLoader';
import { viewCharacter as characterLoader } from '../api/viewCharacter';

const { Character } = lazyImport(() => import('./Character'), 'Character');
const { Characters } = lazyImport(() => import('./Characters'), 'Characters');

export const characterRoutes = [
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
];
