// import { ReactNode, createContext, useMemo } from 'react';
// import {
// 	UseDataProps,
// 	DataProps,
// 	useData,
// } from '../hooks/useCharactersListData';

// interface GqlDataContextProviderProps extends UseDataProps {
// 	children: ReactNode;
// }
// type GqlDataContextValueProps = DataProps;

// export const GqlDataContext = createContext<
// 	GqlDataContextValueProps | undefined
// >(undefined);

// export const GqlDataContextProvider = ({
// 	query,
// 	variables,
// 	children,
// }: GqlDataContextProviderProps) => {
// 	const { loading, error, data } = useData({ query, variables });
// 	const values = useMemo(
// 		() => ({ loading, error, data }),
// 		[loading, error, data]
// 	);

// 	return (
// 		<GqlDataContext.Provider value={values}>{children}</GqlDataContext.Provider>
// 	);
// };
