import { SuspenseLoader } from '@/utils/suspenseLoader';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { FC, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/apollo';
import { ProviderContextProvider } from './providerContex';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Styles/Typography';
import { StyledCharacterCard } from '@/components/Styles/CharacterPageStyles';

const ErrorFallback = () => {
	return (
		<StyledCharacterCard>
			<Typography className="text-lg font-semibold">
				Ooops, something went wrong :{' '}
			</Typography>

			<Button onClick={() => window.location.assign(window.location.origin)}>
				Go Home
			</Button>
		</StyledCharacterCard>
	);
};

type AppProviderProps = {
	children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
	return (
		<ProviderContextProvider>
			<ApolloProvider client={client}>
				<SuspenseLoader>
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<HelmetProvider>{children}</HelmetProvider>
					</ErrorBoundary>
				</SuspenseLoader>
			</ApolloProvider>
		</ProviderContextProvider>
	);
};
