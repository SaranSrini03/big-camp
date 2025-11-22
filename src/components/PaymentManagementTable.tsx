import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { FiHelpCircle, FiChevronDown } from "react-icons/fi";
import SummaryCards, { SummaryCard } from "./SummaryCards";

export interface PaymentManagement {
  id: number;
  name: string;
  username: string;
  initials: string;
  cpp: number;
  cps: number;
  cpvid: number;
  performanceHike: number;
  spend: number;
  date: string;
  status: "Processing" | "Paid" | "Pending" | "Failed";
}

interface PaymentManagementTableProps {
  data: PaymentManagement[];
  summaryCards?: SummaryCard[];
  onCheckboxChange?: (id: number, checked: boolean) => void;
  onPay?: (id: number) => void;
}

export default function PaymentManagementTable({
  data,
  summaryCards,
  onCheckboxChange,
  onPay,
}: PaymentManagementTableProps) {
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
    "Name",
    "CPP",
    "CPS",
    "CPVID",
    "Performance Hike",
    "Spend",
    "Date",
    "Status",
    "Payment",
  ];

  return (
    <div>
      {/* Summary Cards */}
      {summaryCards && summaryCards.length > 0 && (
        <SummaryCards cards={summaryCards} />
      )}

      {/* Table */}
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
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {header}
                    {(header === "CPP" || header === "CPS" || header === "CPVID" || header === "Performance Hike" || header === "Spend") && (
                      <FiHelpCircle className="text-gray-400" size={14} />
                    )}
                    {header === "Payment" && (
                      <FiChevronDown className="text-gray-400" size={14} />
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  borderBottom: "1px solid #f3f4f6",
                  "&:hover": { backgroundColor: "#f9fafb" },
                }}
              >
                <TableCell padding="checkbox" sx={{ borderBottom: "1px solid #f3f4f6" }}>
                  <Checkbox
                    size="small"
                    onChange={(e) => onCheckboxChange?.(row.id, e.target.checked)}
                  />
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
                        backgroundColor: getInitialsColor(row.initials),
                        color: getInitialsTextColor(row.initials),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {row.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#111827", marginBottom: "2px", fontSize: "0.875rem" }}>
                        {row.name}
                      </div>
                      <div style={{ fontSize: "0.6875rem", color: "#6b7280" }}>
                        {row.username}
                      </div>
                    </div>
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
                  {row.cpp.toLocaleString()}
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
                  {row.cps.toLocaleString()}
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
                  {row.cpvid.toLocaleString()}
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
                  {row.performanceHike.toLocaleString()}
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
                  {row.spend.toLocaleString()}
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
                  {row.date}
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
                      backgroundColor: row.status === "Processing" ? "#d1fae5" :
                                      row.status === "Paid" ? "#d1fae5" :
                                      row.status === "Pending" ? "#fef3c7" : "#fee2e2",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: row.status === "Processing" ? "#10b981" :
                                        row.status === "Paid" ? "#10b981" :
                                        row.status === "Pending" ? "#d97706" : "#ef4444",
                      }}
                    />
                    <span
                      style={{
                        color: row.status === "Processing" ? "#065f46" :
                               row.status === "Paid" ? "#065f46" :
                               row.status === "Pending" ? "#92400E" : "#991b1b",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      {row.status}
                    </span>
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
                  <button
                    onClick={() => onPay?.(row.id)}
                    style={{
                      backgroundColor: "#10b981",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 20px",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#059669";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#10b981";
                    }}
                  >
                    Pay
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

