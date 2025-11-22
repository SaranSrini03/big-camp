import React from "react";
import GradientButton from "@/components/GradientButton";
import SearchAndSortControls from "@/components/SearchAndSortControls";

export default function InfluencerWelcome() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-10 gap-10 bg-white">
      {/* Top Controls */}
      <SearchAndSortControls align="left" />

      {/* Center Content */}
      <div className="flex flex-col items-center text-center mt-10 px-4">
        <h1 className="text-3xl text-black font-semibold">Welcome to Influencer campaigns!</h1>
        <p className="text-gray-600 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae.
        </p>

        <img
          src="/image1.png"
          alt="Character"
          className="w-120 h-120"
        />

        <GradientButton href="/all-campaigns" label="Let's start" className="mb-10 h-8 text-sm" showIcon={true}/>
      </div>
    </div>
  );
}
