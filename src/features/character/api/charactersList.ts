import { gql } from '@apollo/client'

export const VIEW_CHARACTERS = gql`
  query ViewCharacters {
    myQuery{
      id
      name
      img_url
    }
  }
`;
