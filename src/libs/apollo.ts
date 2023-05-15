// import { config } from '@/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://masaki.stepzen.net/api/character/__graphql',
	cache: new InMemoryCache(),
	headers: {
		authorization:
			'Apikey masaki::stepzen.net+1000::a759737d62e6231e9a97a2b410ead2d8f5c276ce46b8c04df14588d5d8f64a83',
	},
});
