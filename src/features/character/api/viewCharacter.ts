import { apiRequest } from '@/libs/axios';
import { AxiosRequestConfig } from 'axios';
import { Params } from 'react-router-dom';
import { CharacterDataType } from '../types';

type viewCharacterResponseProps = CharacterDataType;

export const viewCharacterConfig = (
	id: string | undefined
): AxiosRequestConfig => ({
	method: 'GET',
	url: `${id}`,
});

export const viewCharacter = async ({
	params,
}: Params): Promise<viewCharacterResponseProps> => {
	const response = await apiRequest<viewCharacterResponseProps>(
		viewCharacterConfig(params?.id)
	);
	return response;
};
