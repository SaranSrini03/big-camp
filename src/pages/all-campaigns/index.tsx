import React from "react";
import SearchAndSortControls from "@/components/SearchAndSortControls";
import GradientButton from "@/components/GradientButton";
import CampaignsTable from "@/components/CampaignsTable";
import { campaignsData } from "@/data/alldata";

export default function AllCampaigns() {

  return (
    <div className="w-full min-h-screen bg-white p-10">
      {/* Top Section - Controls and Button */}
      <div className="w-full flex justify-between items-center mb-6 p-10">
        <SearchAndSortControls align="left" className="flex-1" />
        <GradientButton
          label="Create campaign"
          className="px-6 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white "
        />
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6 px-10">All campaigns</h1>

      {/* Table */}
      <div className="w-full overflow-x-auto px-10">
        <CampaignsTable campaigns={campaignsData} />
      </div>
    </div>
  );
}
