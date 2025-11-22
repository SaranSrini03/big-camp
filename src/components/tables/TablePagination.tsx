import React from "react";
import { Pagination, Box } from "@mui/material";

interface TablePaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  rowsPerPage?: number;
}

export default function TablePagination({
  count,
  page,
  onChange,
  rowsPerPage = 10,
}: TablePaginationProps) {
  const totalPages = Math.ceil(count / rowsPerPage);

  if (count <= rowsPerPage) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        marginTop: "8px",
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={onChange}
        color="primary"
        shape="rounded"
        size="medium"
        sx={{
          "& .MuiPaginationItem-root": {
            fontSize: "0.875rem",
          },
        }}
      />
    </Box>
  );
}

