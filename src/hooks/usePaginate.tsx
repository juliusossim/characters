import { useCallback, useState } from 'react';

export const usePaginate = ({ data, itemsPerPage = 10 }) => {
	if (!data) return;

	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data?.length / itemsPerPage);

	const currentItems = data?.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const nextPage = useCallback(() => {
		if (currentPage >= totalPages) return;
		setCurrentPage((prevPage) => prevPage + 1);
	}, []);

	const gotoPage = useCallback((pageNo = 1) => {
		if (pageNo === currentPage || pageNo >= totalPages || pageNo < 1) return;
		setCurrentPage(pageNo);
	}, []);

	const previousPage = useCallback(() => {
		if (currentPage <= 1) return;

		setCurrentPage((prevPage) => prevPage - 1);
	}, []);

	return {
		currentItems,
		currentPage,
		totalPages,
		nextPage,
		previousPage,
		gotoPage,
		setCurrentPage,
	};
};
