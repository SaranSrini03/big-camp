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

export interface BudgetAllocation {
  id: number;
  name: string;
  username: string;
  initials: string;
  cpp: number; // Cost Per Purchase
  cps: number; // Cost Per Sale
  cpvid: number; // Cost Per Video Impression
  performanceHike: string;
  spend: number;
  budget?: number; // Optional, may be set or not
}

interface BudgetAllocationsTableProps {
  allocations: BudgetAllocation[];
  onBudgetSet?: (id: number) => void;
  onCheckboxChange?: (id: number, checked: boolean) => void;
}

export default function BudgetAllocationsTable({
  allocations,
  onBudgetSet,
  onCheckboxChange,
}: BudgetAllocationsTableProps) {
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
    "Budget",
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
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {header}
                  {header !== "Budget" && header !== "Name" && (
                    <FiHelpCircle className="text-gray-400" size={14} />
                  )}
                  {header === "Budget" && (
                    <FiChevronDown className="text-gray-400" size={14} />
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {allocations.map((allocation) => (
            <TableRow
              key={allocation.id}
              sx={{
                borderBottom: "1px solid #f3f4f6",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <TableCell padding="checkbox" sx={{ borderBottom: "1px solid #f3f4f6" }}>
                <Checkbox
                  size="small"
                  onChange={(e) => onCheckboxChange?.(allocation.id, e.target.checked)}
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
                      backgroundColor: getInitialsColor(allocation.initials),
                      color: getInitialsTextColor(allocation.initials),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {allocation.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#111827", marginBottom: "2px", fontSize: "0.875rem" }}>
                      {allocation.name}
                    </div>
                    <div style={{ fontSize: "0.6875rem", color: "#6b7280" }}>
                      {allocation.username}
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
                {allocation.cpp.toLocaleString()}
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
                {allocation.cps.toLocaleString()}
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
                {allocation.cpvid.toLocaleString()}
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
                {allocation.performanceHike}
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
                {allocation.spend.toLocaleString()}
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
                  onClick={() => onBudgetSet?.(allocation.id)}
                  style={{
                    backgroundColor: "#10b981",
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
                    e.currentTarget.style.backgroundColor = "#059669";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#10b981";
                  }}
                >
                  {allocation.budget ? `$${allocation.budget.toLocaleString()}` : "Set a budget"}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

