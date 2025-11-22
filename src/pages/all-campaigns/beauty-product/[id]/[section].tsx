import React from "react";
import { useRouter } from "next/router";
import CampaignSidebar from "@/components/campaign/CampaignSidebar";
import CampaignHero from "@/components/campaign/CampaignHero";
import GradientButton from "@/components/buttons/GradientButton";
import InfluencersTable from "@/components/tables/InfluencersTable";
import ProductContentTable from "@/components/tables/ProductContentTable";
import BudgetAllocationsTable from "@/components/tables/BudgetAllocationsTable";
import TermsAndConditions from "@/components/campaign/TermsAndConditions";
import ProductSendingTable from "@/components/tables/ProductSendingTable";
import ReviewTable from "@/components/tables/ReviewTable";
import CampaignMonitoringTable from "@/components/tables/CampaignMonitoringTable";
import PaymentManagementTable from "@/components/tables/PaymentManagementTable";
import { influencersData, productContentData, budgetAllocationsData, productSendingData, reviewData, campaignMonitoringData, campaignMonitoringCards, paymentManagementData, paymentManagementCards, sectionTitles } from "@/data/alldata";

export default function CampaignSection() {
  const router = useRouter();
  const { id, section } = router.query;

  const title = sectionTitles[section as string] || "Campaign Detail";
  const isInfluencersSection = section === "influencers";
  const isProductContentSection = section === "product-content";
  const isBudgetAllocationsSection = section === "budget-allocations";
  const isTermsConditionSection = section === "terms-condition";
  const isProductSendingSection = section === "product-sending";
  const isReviewSection = section === "review";
  const isMonitoringSection = section === "monitoring";
  const isPaymentSection = section === "payment";

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* Hero Section - Full Width */}
      <CampaignHero />
      
      {/* Content Area with Sidebar and Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <CampaignSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
          {isInfluencersSection ? (
            <>
              {/* Button */}
              <div className="flex justify-end mb-6">
                <GradientButton label="Add influencers" width="w-auto" className="rounded-lg" colors="bg-[#4094f7] hover:bg-blue-700" />
              </div>

              {/* Influencers Table */}
              <InfluencersTable influencers={influencersData} />
            </>
          ) : isProductContentSection ? (
            <>
              {/* Product Content Table */}
              <ProductContentTable data={productContentData} />
            </>
          ) : isBudgetAllocationsSection ? (
            <>
              {/* Budget Allocations Table */}
              <BudgetAllocationsTable allocations={budgetAllocationsData} />
            </>
          ) : isTermsConditionSection ? (
            <>
              {/* Terms and Conditions */}
              <TermsAndConditions />
            </>
          ) : isProductSendingSection ? (
            <>
              {/* Product Sending Table */}
              <ProductSendingTable products={productSendingData} />
            </>
          ) : isReviewSection ? (
            <>
              {/* Review Table */}
              <ReviewTable reviews={reviewData} />
            </>
          ) : isMonitoringSection ? (
            <>
              {/* Campaign Monitoring Table */}
              <CampaignMonitoringTable data={campaignMonitoringData} summaryCards={campaignMonitoringCards} />
            </>
          ) : isPaymentSection ? (
            <>
              {/* Payment Management Table */}
              <PaymentManagementTable data={paymentManagementData} summaryCards={paymentManagementCards} />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
              <div className="text-gray-600">
                <p>{title} content will be displayed here.</p>
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
