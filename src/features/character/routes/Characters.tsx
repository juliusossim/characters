import { PageLayout } from '@/layout/PageLayout';
import { createContext, FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { VIEW_CHARACTERS } from '../api/charactersList';
import { CharactersList } from '../components/CharacterList';
// import { GqlDataContextProvider } from '../contexts/GqlDataContextProvider';
import { CharacterDataType } from '../types';


type AxiosDataProps = CharacterDataType[]
export const GqlDataContext = createContext<
AxiosDataProps | undefined
>(undefined);

export const Characters: FC = () => {
	const data = useLoaderData();
	return (
		
		<PageLayout title="Character List">
			<GqlDataContext.Provider value={{ data }}>
				<CharactersList />
			</GqlDataContext.Provider>
		</PageLayout>
	);
};
