import { useQuery } from '@apollo/client';
import { UseDataProps } from './types';

export const useData = ({ query, variables }: UseDataProps) => {
	const { loading, error, data } = useQuery(query, { variables });

	if (error) {
		console.log(error);
	}

	return { loading, error, data };
};
