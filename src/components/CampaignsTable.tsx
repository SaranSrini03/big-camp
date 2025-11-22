import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FiHelpCircle, FiChevronDown } from "react-icons/fi";

export interface Campaign {
  id?: string | number;
  campaignName: string;
  startDate: string;
  noOfInfluencers: number;
  reach: string;
  impression: string;
  platform: string;
  budget: number;
  noOfPosts: number;
  spent: number;
  ends: string;
  status: "Active" | "End";
}

interface CampaignsTableProps {
  campaigns: Campaign[];
  onCampaignClick?: (campaign: Campaign) => void;
}

export default function CampaignsTable({ campaigns, onCampaignClick }: CampaignsTableProps) {
  // Helper function to create URL-friendly slug from campaign name
  const createSlug = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const tableHeaders = [
    "Campaign Name",
    "Start date",
    "No of Influencers",
    "Reach",
    "Impression",
    "Platform",
    "Budget",
    "No of Posts",
    "Spent",
    "Ends",
    "Status",
  ];

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", border: "none" }}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow sx={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafc" }}>
            {tableHeaders.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#374151",
                  whiteSpace: "nowrap",
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: "#f9fafc",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {header}
                  {header !== "Status" && header !== "Platform" && (
                    <FiHelpCircle className="text-gray-400" size={14} />
                  )}
                  {header === "Status" && (
                    <FiChevronDown className="text-gray-400" size={14} />
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign, index) => (
            <TableRow
              key={index}
              sx={{
                borderBottom: "1px solid #f3f4f6",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.875rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {onCampaignClick ? (
                  <span
                    onClick={() => onCampaignClick(campaign)}
                    style={{
                      color: "#2563eb",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {campaign.campaignName}
                  </span>
                ) : campaign.id ? (
                  <Link
                    href={`/all-campaigns/${createSlug(campaign.campaignName)}/${campaign.id}/influencers`}
                    style={{
                      color: "#2563eb",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {campaign.campaignName}
                  </Link>
                ) : (
                  <span
                    style={{
                      color: "#2563eb",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {campaign.campaignName}
                  </span>
                )}
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
                {campaign.startDate}
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
                {campaign.noOfInfluencers}
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
                {campaign.reach}
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
                {campaign.impression}
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
                {campaign.platform}
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
                {campaign.budget.toLocaleString()}
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
                {campaign.noOfPosts}
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
                {campaign.spent.toLocaleString()}
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
                {campaign.ends}
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.875rem",
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
                    backgroundColor:
                      campaign.status === "Active" ? "#d1fae5" : "#fee2e2",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor:
                        campaign.status === "Active" ? "#10b981" : "#ef4444",
                    }}
                  />
                  <span
                    style={{
                      color: campaign.status === "Active" ? "#065f46" : "#991b1b",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {campaign.status}
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
