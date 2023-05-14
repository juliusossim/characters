import { useState } from 'react';

type UsePaginateProps = {
  data: string[];
  itemsPerPage: number;
}

export const usePaginate = ({ data, itemsPerPage = 10 }: UsePaginateProps) => {
    if(!data) return;

  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const currentItems = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if(currentPage >= totalPages) return
     setCurrentPage((prevPage) => prevPage + 1);
  };

  const gotoPage = (pageNo = 1) => {
    if(pageNo === currentPage || pageNo >= totalPages || pageNo < 1 ) return
     setCurrentPage(pageNo);
  };

  const previousPage = () => {
    if(currentPage <= 1) return

    setCurrentPage((prevPage) => prevPage - 1);
  };
  return {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    gotoPage,
    setCurrentPage
  };
};

