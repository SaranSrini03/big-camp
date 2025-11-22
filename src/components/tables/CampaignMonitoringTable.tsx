import React, { useState, useMemo, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, FiHelpCircle, FiChevronDown, FiExternalLink, SummaryCards, SummaryCard } from "@/imports/globalimport";
import TablePagination from "./TablePagination";

export interface CampaignMonitoring {
  id: number;
  name: string;
  username: string;
  initials: string;
  postLink: string;
  noOfPosts: number;
  audience: number;
  reach: number;
  likes: number;
  costPerEngagement: string;
  engagement: string;
  campaignSpend: number;
  conversionRate: string;
  roi: string;
}

interface CampaignMonitoringTableProps {
  data: CampaignMonitoring[];
  summaryCards?: SummaryCard[];
  onCheckboxChange?: (id: number, checked: boolean) => void;
  onPostLinkClick?: (id: number) => void;
}

export default function CampaignMonitoringTable({
  data,
  summaryCards,
  onCheckboxChange,
  onPostLinkClick,
}: CampaignMonitoringTableProps) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

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
    "Post Link",
    "No of Posts",
    "Audience",
    "Reach",
    "Likes",
    "Cost per Engagement",
    "Engagement",
    "Campaign Spend",
    "Conversion Rate (%)",
    "ROI (%)",
  ];

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
              </TableCell>
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
                    {header !== "Name" && header !== "Post Link" && header !== "No of Posts" && (
                      <FiHelpCircle className="text-gray-400" size={14} />
                    )}
                    {header === "Post Link" && (
                      <FiChevronDown className="text-gray-400" size={14} />
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
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
                    py: 1,
                    px: 2,
                    fontSize: "0.8125rem",
                    color: "#2563eb",
                    borderBottom: "1px solid #f3f4f6",
                    cursor: "pointer",
                  }}
                  onClick={() => onPostLinkClick?.(row.id)}
                >
                  {row.postLink === "Link" ? (
                    <span style={{ textDecoration: "underline" }}>{row.postLink}</span>
                  ) : (
                    row.postLink
                  )}
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
                  {row.noOfPosts}
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
                  {row.audience.toLocaleString()}
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
                  {row.reach.toLocaleString()}
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
                  {row.likes.toLocaleString()}
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
                  {row.costPerEngagement}
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
                  {row.engagement}
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
                  {row.campaignSpend.toLocaleString()}
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
                  {row.conversionRate}
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
                  {row.roi}
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          count={data.length}
          page={page}
          onChange={handlePageChange}
          rowsPerPage={rowsPerPage}
        />
      </div>
    );
}

