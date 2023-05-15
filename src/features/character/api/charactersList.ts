import { gql } from '@apollo/client';
import { apiRequest } from '@/libs/axios';
import { AxiosRequestConfig } from 'axios';
import { Params } from 'react-router-dom';
import { CharacterDataType } from '../types';

export const VIEW_CHARACTERS = gql`
  query ViewCharacters {
    myQuery {
      id
      name
      img_url
    }
  }
`;


// Using Axios



type viewCharactersResponseProps = CharacterDataType[];

export const viewCharacterConfig = (): AxiosRequestConfig => ({
  method: 'GET'
});

export const viewCharacters = async (): Promise<viewCharactersResponseProps> => {
  const response = await apiRequest<viewCharactersResponseProps>(viewCharacterConfig());
  return response;
};
