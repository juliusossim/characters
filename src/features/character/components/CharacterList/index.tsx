import {
	CharactersWrapper,
	StyledCharacterCard,
} from '@/components/Styles/CharacterPageStyles';
import { PageLoader } from '@/components/UI/PageLoader';
import { Spinner } from '@/components/UI/Spinner';
import { ServerError } from '@/components/UI/serverError/ServerError';
import { FC, useContext } from 'react';
// import { GqlDataContext } from '../../contexts/GqlDataContextProvider';
import { ListTemp } from './ListTemp';
import { CharacterDataType } from '../../types';
import { GqlDataContext } from '../../routes/Characters';

type CharactersListProp = {
	characters: CharacterDataType
}

export const CharactersList = () => {
	// const { loading, error, data } = useContext(GqlDataContext);
	// console.log(characters);
	const { data } = useContext(GqlDataContext);

	return (
		<CharactersWrapper>
			{/* {loading && <PageLoader />}
			{error && <ServerError message={error?.message || error} />} */}
			{console.log(data)}
			{data && <ListTemp  />}
		</CharactersWrapper>
	);
};
