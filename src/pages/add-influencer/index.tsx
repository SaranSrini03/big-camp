import React from "react";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";
import SearchAndSortControls from "@/components/ui/SearchAndSortControls";
import GradientButton from "@/components/buttons/GradientButton";
import InfluencerDiscoveryTable from "@/components/tables/InfluencerDiscoveryTable";
import { influencerDiscoveryData } from "@/data/alldata";

export default function AddInfluencer() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleAddToCampaign = (id: number) => {
    console.log("Adding influencer to campaign:", id);
    // You can add logic here to add influencer to campaign
  };

  return (
    <div className="w-full min-h-screen bg-white p-10">
      {/* Top Navigation */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FiArrowLeft size={20} className="text-gray-600" />
        </button>
        <div className="flex-1 flex justify-between items-center">
          <div className="flex-1 flex justify-end gap-4">
            <SearchAndSortControls
              align="right"
              sortOptions={["Location", "Match", "Name"]}
              defaultSortValue="Location"
            />
          </div>
        </div>
      </div>

      {/* Choose from saved list button */}
      <div className="mb-6 flex justify-end">
        <GradientButton
          href="/add-influencer/choose-influencer"
          label="Choose from saved list"
          className="px-6 py-2 text-sm font-semibold rounded-full"
          colors="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
        />
      </div>

      {/* Title */}
      <div className="overflow-x-auto px-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Influencers (Based on your audience interests)
        </h1>

        {/* Table */}
        <InfluencerDiscoveryTable
          influencers={influencerDiscoveryData}
          onAddToCampaign={handleAddToCampaign}
        />
      </div>
    </div>
  );
}

