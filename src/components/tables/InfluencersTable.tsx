import React, { useState, useMemo } from "react";
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
import TablePagination from "./TablePagination";
import InvitationSuccessModal from "@/components/ui/InvitationSuccessModal";
import GradientButton from "@/components/buttons/GradientButton";

export interface Influencer {
  id: number;
  name: string;
  username: string;
  initials: string;
  role: string;
  invitation: "Send invitation" | "Invited";
  status: "Accepted" | "Pending" | "Ongoing";
  // Campaign metrics (shown after campaign starts)
  audience?: string;
  engRate?: string;
  totalReach?: string;
  earned?: number;
  posts?: number;
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
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [invitedInfluencers, setInvitedInfluencers] = useState<Set<number>>(new Set());
  const [campaignStarted, setCampaignStarted] = useState(false);

  // Merge local invitation status with props and campaign status
  const influencersWithStatus = useMemo(() => {
    return influencers.map((influencer) => ({
      ...influencer,
      invitation: invitedInfluencers.has(influencer.id)
        ? "Invited"
        : influencer.invitation,
      status: campaignStarted ? "Ongoing" : influencer.status,
      // Default campaign metrics if not provided
      audience: influencer.audience || (campaignStarted ? "1M" : undefined),
      engRate: influencer.engRate || (campaignStarted ? "4.5-11%" : undefined),
      totalReach: influencer.totalReach || (campaignStarted ? "5M" : undefined),
      earned: influencer.earned || (campaignStarted ? 5000 : undefined),
      posts: influencer.posts || (campaignStarted ? 15 : undefined),
    }));
  }, [influencers, invitedInfluencers, campaignStarted]);

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

  const paginatedInfluencers = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return influencersWithStatus.slice(startIndex, endIndex);
  }, [influencersWithStatus, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleInvitationClick = (influencer: Influencer) => {
    if (influencer.invitation === "Send invitation") {
      setSelectedInfluencer(influencer);
      setIsModalOpen(true);
      onInvitationClick?.(influencer);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedInfluencer(null);
  };

  const handleModalConfirm = () => {
    if (selectedInfluencer) {
      // Mark influencer as invited
      setInvitedInfluencers((prev) => new Set([...prev, selectedInfluencer.id]));
    }
    handleModalClose();
  };

  // Check if all influencers have status "Accepted" (but not "Ongoing")
  const allAccepted = useMemo(() => {
    return influencersWithStatus.length > 0 && 
           influencersWithStatus.every(influencer => 
             influencer.status === "Accepted" && !campaignStarted
           );
  }, [influencersWithStatus, campaignStarted]);

  const handleStartCampaign = () => {
    setCampaignStarted(true);
    console.log("Campaign started!");
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
                Name
              </TableCell>
              {campaignStarted ? (
                <>
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
                      Audience
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
                      ENG Rate
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
                      Total reach
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
                      Links
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
                      Earned
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
                    Posts
                  </TableCell>
                </>
              ) : (
                <>
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
                </>
              )}
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
              {!campaignStarted && (
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
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedInfluencers.map((influencer) => (
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
              {campaignStarted ? (
                <>
                  <TableCell
                    sx={{
                      py: 2,
                      px: 2,
                      fontSize: "0.8125rem",
                      color: "#111827",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    {influencer.audience || "-"}
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
                    {influencer.engRate || "-"}
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
                    {influencer.totalReach || "-"}
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
                      className="px-3 py-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      Links
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
                    {influencer.earned?.toLocaleString() || "-"}
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
                    {influencer.posts || "-"}
                  </TableCell>
                </>
              ) : (
                <>
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
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 12px",
                        borderRadius: "12px",
                        backgroundColor: "#f3e8ff",
                        cursor: influencer.invitation === "Send invitation" ? "pointer" : "default",
                        pointerEvents: influencer.invitation === "Invited" ? "none" : "auto",
                        opacity: influencer.invitation === "Invited" ? 0.7 : 1,
                      }}
                      onClick={() => handleInvitationClick(influencer)}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#9333ea",
                        }}
                      />
                      <span
                        style={{
                          color: "#6b21a8",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                        }}
                      >
                        {influencer.invitation}
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
                </>
              )}
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
                    backgroundColor: influencer.status === "Ongoing" ? "#d1fae5" : "#d1fae5",
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
                    {influencer.status === "Ongoing" ? "Ongoing" : influencer.status}
                  </span>
                </div>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Start Campaign Button - Only show if all influencers are Accepted */}
      {allAccepted && (
        <div className="flex justify-end mt-4 mb-4">
          <GradientButton
            label="Start Campaign"
            onClick={handleStartCampaign}
            className="px-6 py-2 text-sm font-semibold rounded-lg"
            colors="bg-[#4094f7] hover:bg-blue-700 text-white"
          />
        </div>
      )}

      {influencersWithStatus.length > rowsPerPage && (
        <TablePagination
          count={influencersWithStatus.length}
          page={page}
          onChange={handlePageChange}
          rowsPerPage={rowsPerPage}
        />
      )}

      <InvitationSuccessModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        influencerName={selectedInfluencer?.name}
      />
    </div>
  );
}
