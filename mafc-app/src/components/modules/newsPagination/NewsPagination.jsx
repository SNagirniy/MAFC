"use client";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import s from './news_pagination.module.scss';

export default function NewsPagination({ totalPages, currentPage, category }) {
    if(totalPages <=1) return null;
  const router = useRouter();

  const handlePageClick = ({ selected }) => {
    router.push(`/news/all_news/${category}/${selected + 1}`);
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={totalPages}
      forcePage={currentPage - 1} 
      onPageChange={handlePageClick}
      containerClassName={s.pagination}
      pageClassName={s.pageItem}
      pageLinkClassName={s.pageLink}
      previousClassName={s.pageItem}
      nextClassName={s.pageItem}
      activeClassName={s.active}
    />
  );
}