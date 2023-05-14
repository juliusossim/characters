import {
	CharactersWrapper,
	StyledCharacterCard,
} from '@/components/Styles/CharacterPageStyles';
import { PageLoader } from '@/components/UI/PageLoader';
import { Spinner } from '@/components/UI/Spinner';
import { ServerError } from '@/components/UI/serverError/ServerError';
import { FC, useContext } from 'react';
import { GqlDataContext } from '../../contexts/GqlDataContextProvider';
import { ListTemp } from './ListTemp';

export const CharactersList: FC = () => {
	const { loading, error, data } = useContext(GqlDataContext);

	return (
		<CharactersWrapper>
			{loading && <PageLoader />}
			{error && <ServerError message={error?.message || error} />}

			{data && <ListTemp />}
		</CharactersWrapper>
	);
};
