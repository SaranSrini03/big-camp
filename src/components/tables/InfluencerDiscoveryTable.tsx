import React, { useState, useMemo } from "react";
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
import TablePagination from "./TablePagination";
import GradientButton from "@/components/buttons/GradientButton";
import InfluencerAddedModal from "@/components/ui/InfluencerAddedModal";

export interface InfluencerDiscovery {
  id: number;
  name: string;
  username: string;
  initials: string;
  matchPercentage: number;
  location: string;
  niches: string[];
  additionalNiches: number;
}

interface InfluencerDiscoveryTableProps {
  influencers: InfluencerDiscovery[];
  onAddToCampaign?: (id: number) => void;
}

export default function InfluencerDiscoveryTable({
  influencers,
  onAddToCampaign,
}: InfluencerDiscoveryTableProps) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState<InfluencerDiscovery | null>(null);

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

  const getMatchBadgeColor = (percentage: number) => {
    if (percentage === 100) return { bg: "#fee2e2", text: "#991b1b", dot: "#ef4444" };
    if (percentage >= 80) return { bg: "#fed7aa", text: "#9a3412", dot: "#ea580c" };
    return { bg: "#fef3c7", text: "#92400e", dot: "#d97706" };
  };

  const paginatedInfluencers = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return influencers.slice(startIndex, endIndex);
  }, [influencers, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleAddClick = (influencer: InfluencerDiscovery) => {
    setSelectedInfluencer(influencer);
    setIsModalOpen(true);
    onAddToCampaign?.(influencer.id);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedInfluencer(null);
  };

  const handleModalConfirm = () => {
    handleModalClose();
  };

  return (
    <div>
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
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  Name
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
                  Location
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
                  Niche
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
                  Add to campaign
                  <FiHelpCircle className="text-gray-400" size={14} />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedInfluencers.map((influencer) => {
              const matchColor = getMatchBadgeColor(influencer.matchPercentage);
              return (
                <TableRow
                  key={influencer.id}
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
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          backgroundColor: matchColor.bg,
                        }}
                      >
                        <span
                          style={{
                            color: matchColor.text,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                          }}
                        >
                          {influencer.matchPercentage}% Match
                        </span>
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
                    {influencer.location}
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
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                      {influencer.niches.map((niche, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: "inline-block",
                            padding: "2px 8px",
                            borderRadius: "12px",
                            backgroundColor: "#f3e8ff",
                            color: "#6b21a8",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        >
                          {niche}
                        </span>
                      ))}
                      {influencer.additionalNiches > 0 && (
                        <span
                          style={{
                            display: "inline-block",
                            padding: "2px 8px",
                            borderRadius: "12px",
                            backgroundColor: "#f3e8ff",
                            color: "#6b21a8",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        >
                          +{influencer.additionalNiches}
                        </span>
                      )}
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
                    <GradientButton
                      label="Add"
                      onClick={() => handleAddClick(influencer)}
                      className="px-4 py-1.5 text-sm rounded-full"
                      colors="bg-[#ef4444] hover:bg-[#dc2626] text-white"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {influencers.length > rowsPerPage && (
        <TablePagination
          count={influencers.length}
          page={page}
          onChange={handlePageChange}
          rowsPerPage={rowsPerPage}
        />
      )}
      <InfluencerAddedModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        influencerName={selectedInfluencer?.name}
        campaignName="beauty campaign"
      />
    </div>
  );
}

