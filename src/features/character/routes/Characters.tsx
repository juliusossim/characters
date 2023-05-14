import { PageLayout } from '@/layout/PageLayout';
import { FC, useContext } from 'react';
import { VIEW_CHARACTERS } from '../api/charactersList';
import { CharactersList } from '../components/CharacterList';
import { GqlDataContextProvider } from '../contexts/GqlDataContextProvider';

export const Characters: FC = () => {
	return (
		<PageLayout title="Character List">
			<GqlDataContextProvider query={VIEW_CHARACTERS}>
				<CharactersList />
			</GqlDataContextProvider>
		</PageLayout>
	);
};
