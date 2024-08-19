import React from 'react'
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"

interface PaginationProps {
    count: number;
    onChange: (e: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({count,onChange}) => {
const pages = Math.ceil(count/ 9)
    console.log(pages)
    return (
        <div className={styles.root}>
            <ReactPaginate
                key={count}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => onChange(e.selected + 1)}
                pageRangeDisplayed={5}
                pageCount={pages}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}
export default Pagination;
