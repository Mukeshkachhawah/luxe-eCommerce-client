import MuiPagination from "@mui/material/Pagination";

const Pagination = ({ count, page, onPageChange }) => {
  return (
    <MuiPagination
      count={count}
      page={page}
      onChange={(_, newPage) => onPageChange(newPage)}
      color="primary"
      shape="rounded"
    />
  );
};

export default Pagination;
