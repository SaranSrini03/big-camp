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
import { FiHelpCircle, FiChevronDown, FiTrash2 } from "react-icons/fi";

export interface Influencer {
  id: number;
  name: string;
  username: string;
  initials: string;
  role: string;
  invitation: "Send invitation" | "Invited";
  status: "Accepted" | "Pending";
}

interface InfluencersTableProps {
  influencers: Influencer[];
  onDelete?: (id: number) => void;
  onInvitationClick?: (influencer: Influencer) => void;
}

export default function InfluencersTable({
  influencers,
  onDelete,
  onInvitationClick,
}: InfluencersTableProps) {
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
                Role
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
              Invitation
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
          </TableRow>
        </TableHead>
        <TableBody>
          {influencers.map((influencer) => (
            <TableRow
              key={influencer.id}
              sx={{
                borderBottom: "1px solid #f3f4f6",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <TableCell padding="checkbox" sx={{ borderBottom: "1px solid #f3f4f6" }}>
                <Checkbox size="small" />
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.875rem",
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
                      backgroundColor: getInitialsColor(influencer.initials),
                      color: getInitialsTextColor(influencer.initials),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {influencer.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#111827", marginBottom: "2px", fontSize: "0.875rem" }}>
                      {influencer.name}
                    </div>
                    <div style={{ fontSize: "0.6875rem", color: "#6b7280" }}>
                      {influencer.username}
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
                {influencer.role}
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <span
                  onClick={() => onInvitationClick?.(influencer)}
                  style={{
                    color: "#9333ea",
                    cursor: influencer.invitation === "Send invitation" ? "pointer" : "default",
                    textDecoration: influencer.invitation === "Send invitation" ? "underline" : "none",
                  }}
                >
                  {influencer.invitation}
                </span>
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
                    {influencer.status}
                  </span>
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
                <FiTrash2
                  onClick={() => onDelete?.(influencer.id)}
                  className="text-gray-400 hover:text-red-500 cursor-pointer"
                  size={18}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
