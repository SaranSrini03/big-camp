import React, { useRouter, FiArrowLeft, SearchAndSortControls, InfluencerDiscoveryTable } from "@/imports/globalimport";
import { influencerDiscoveryData } from "@/data/alldata";

export default function ChooseInfluencer() {
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

      {/* Title */}
      <div className="overflow-x-auto px-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Saved Influencers
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

