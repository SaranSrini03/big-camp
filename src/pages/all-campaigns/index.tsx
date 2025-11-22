import React, { useState, SearchAndSortControls, GradientButton, CampaignsTable, Campaign, CreateCampaignModal, CampaignFormData } from "@/imports/globalimport";
import { campaignsData as initialCampaignsData } from "@/data/alldata";

export default function AllCampaigns() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaignsData);

  const handleCreateCampaign = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Helper function to convert YYYY-MM-DD to DD/MM/YYYY
  const convertDateFormat = (dateStr: string): string => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  };

  // Helper function to extract number from post type (e.g., "Reels, and posts" -> 15)
  const extractPostCount = (postType: string): number => {
    // Try to extract number from string, default to 15
    const match = postType.match(/\d+/);
    return match ? parseInt(match[0]) : 15;
  };

  const handleSubmit = (data: CampaignFormData) => {
    // Generate a unique ID (use max ID + 1 or timestamp)
    const maxId = campaigns.length > 0 
      ? Math.max(...campaigns.map(c => typeof c.id === 'number' ? c.id : 0))
      : 0;
    const newId = maxId + 1;

    // Convert form data to Campaign format
    const newCampaign: Campaign = {
      id: newId,
      campaignName: data.campaignName,
      startDate: convertDateFormat(data.startDate),
      noOfInfluencers: 0, // Default to 0, can be updated later
      reach: "0", // Default values
      impression: "0",
      platform: data.platform,
      budget: parseInt(data.budget) || 0,
      noOfPosts: extractPostCount(data.postType),
      spent: 0, // New campaign, no spending yet
      ends: convertDateFormat(data.endDate),
      status: "Active", // New campaigns are active by default
    };

    // Add the new campaign to the list
    setCampaigns((prev) => [newCampaign, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-white p-10">
      {/* Top Section - Controls and Button */}
      <div className="w-full flex justify-between items-center mb-6 p-10">
        <SearchAndSortControls align="left" className="flex-1" />
        <GradientButton
          label="Create campaign"
          className="px-6 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleCreateCampaign}
        />
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6 px-10">All campaigns</h1>

      {/* Table */}
      <div className="w-full overflow-x-auto px-10">
        <CampaignsTable campaigns={campaigns} />
      </div>

      {/* Create Campaign Modal */}
      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
