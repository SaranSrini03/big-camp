import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FiHelpCircle, FiChevronDown, FiExternalLink } from "react-icons/fi";

export interface ProductContent {
  id: number;
  name: string;
  username: string;
  initials: string;
  productDetail: boolean;
  productLink: boolean;
  type: string;
  noOfPost: number;
  guidelines: boolean;
  deadline: string;
  status: "Yet to start" | "In progress" | "Completed";
}

interface ProductContentTableProps {
  data: ProductContent[];
}

export default function ProductContentTable({ data }: ProductContentTableProps) {
  const getInitialsColor = (initials: string) => {
    const colors = [
      "#E0E7FF", "#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3",
      "#E0E7FF", "#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3",
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  const getInitialsTextColor = (initials: string) => {
    const colors = [
      "#3730A3", "#1E40AF", "#065F46", "#92400E", "#9F1239",
      "#3730A3", "#1E40AF", "#065F46", "#92400E", "#9F1239",
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", border: "none", padding: "16px" }}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow sx={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafc" }}>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            ></TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                Product detail
                <FiHelpCircle className="text-gray-400" size={14} />
              </div>
            </TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                Product link
                <FiHelpCircle className="text-gray-400" size={14} />
              </div>
            </TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                Type
                <FiHelpCircle className="text-gray-400" size={14} />
              </div>
            </TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                No of post
                <FiHelpCircle className="text-gray-400" size={14} />
              </div>
            </TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                Guidelines & instruction
                <FiHelpCircle className="text-gray-400" size={14} />
              </div>
            </TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              Deadline
            </TableCell>
            <TableCell
              sx={{
                py: 2,
                px: 2,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#f9fafc",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                Status
                <FiChevronDown className="text-gray-400" size={14} />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                borderBottom: "1px solid #f3f4f6",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <FiExternalLink className="text-gray-400" size={18} />
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: getInitialsColor(item.initials),
                      color: getInitialsTextColor(item.initials),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#111827", marginBottom: "2px", fontSize: "0.875rem" }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: "0.6875rem", color: "#6b7280" }}>
                      {item.username}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <button
                  className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                >
                  Link
                </button>
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <button
                  className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                >
                  Link
                </button>
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {item.type}
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {item.noOfPost}
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <button
                  className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                >
                  Link
                </button>
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {item.deadline}
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    backgroundColor: "#d1fae5",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                    }}
                  />
                  <span
                    style={{
                      color: "#065f46",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
