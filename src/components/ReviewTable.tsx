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
import { FiDownload } from "react-icons/fi";

export interface ReviewItem {
  id: number;
  name: string;
  username: string;
  initials: string;
  status: "Done" | "Pending" | "Rejected";
  contentType: string;
  noOfPosts: number;
}

interface ReviewTableProps {
  reviews: ReviewItem[];
  onAccept?: (id: number) => void;
  onReject?: (id: number) => void;
  onDownload?: (id: number) => void;
}

export default function ReviewTable({
  reviews,
  onAccept,
  onReject,
  onDownload,
}: ReviewTableProps) {
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

  const tableHeaders = [
    "Influencer Name",
    "Status",
    "Content type",
    "No of posts",
    "Approval",
    "Submitted",
  ];

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", border: "none", padding: "16px" }}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow sx={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafc" }}>
            {tableHeaders.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "#374151",
                  whiteSpace: "nowrap",
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: "#f9fafc",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((review) => (
            <TableRow
              key={review.id}
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
                      backgroundColor: getInitialsColor(review.initials),
                      color: getInitialsTextColor(review.initials),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#111827", marginBottom: "2px", fontSize: "0.875rem" }}>
                      {review.name}
                    </div>
                    <div style={{ fontSize: "0.6875rem", color: "#6b7280" }}>
                      {review.username}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  py: 1,
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
                    backgroundColor: review.status === "Done" ? "#d1fae5" :
                                    review.status === "Pending" ? "#fef3c7" : "#fee2e2",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: review.status === "Done" ? "#10b981" :
                                      review.status === "Pending" ? "#d97706" : "#ef4444",
                    }}
                  />
                  <span
                    style={{
                      color: review.status === "Done" ? "#065f46" :
                             review.status === "Pending" ? "#92400E" : "#991b1b",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {review.status}
                  </span>
                </div>
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
                {review.contentType}
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
                {review.noOfPosts}
              </TableCell>
              <TableCell
                sx={{
                  py: 1,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => onAccept?.(review.id)}
                    style={{
                      backgroundColor: "#dc2626",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 16px",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#b91c1c";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#dc2626";
                    }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => onReject?.(review.id)}
                    style={{
                      backgroundColor: "#dc2626",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 16px",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#b91c1c";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#dc2626";
                    }}
                  >
                    Reject
                  </button>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  py: 1,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#111827",
                    cursor: "pointer",
                  }}
                  onClick={() => onDownload?.(review.id)}
                >
                  <FiDownload size={16} />
                  <span style={{ fontSize: "0.8125rem" }}>Download</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

