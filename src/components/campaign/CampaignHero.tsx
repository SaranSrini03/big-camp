import React from "react";
import SearchAndSortControls from "@/components/ui/SearchAndSortControls";

interface CampaignHeroProps {
  campaignName?: string;
  dateRange?: string;
}

export default function CampaignHero({
  campaignName = "Beauty campaigns",
  dateRange = "Dec 21st - Jan 15th",
}: CampaignHeroProps) {
  return (
    <div className="w-full bg-white  py-15 px-10">
      <div className="flex justify-between items-center">
        {/* Left Side - Title and Date */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{campaignName}</h1>
          <p className="text-sm text-gray-500">{dateRange}</p>
        </div>

        {/* Right Side - Search and Sort Controls */}
        <div className="flex-shrink-0">
          <SearchAndSortControls align="right" />
        </div>
      </div>
    </div>
  );
}
