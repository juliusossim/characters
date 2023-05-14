import { SuspenseLoader } from '@/utils/suspenseLoader';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { FC, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ProviderContextProvider } from './providerContex';
import { client } from '@/libs/apollo';
import { ErrorBoundaryFallback } from '../routes/errors/ErrorBoundaryFallback';

type AppProviderProps = {
  children: ReactNode};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {

  return (
   <ProviderContextProvider>
    <ApolloProvider client={client}>
      <SuspenseLoader>
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <HelmetProvider>
      
              {children}
      
        </HelmetProvider>
      </ErrorBoundary>
   </SuspenseLoader>
   </ApolloProvider>
   </ProviderContextProvider>
  );
};
