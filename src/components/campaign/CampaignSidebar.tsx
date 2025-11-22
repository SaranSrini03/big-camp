import React, { Link, useRouter, IconType, FiUsers, FiSettings, FiDollarSign, FiFileText, FiPackage, FiCode, FiCheckCircle, FiCreditCard } from "@/imports/globalimport";

interface MenuItem {
  id: string;
  label: string;
  icon: IconType;
  slug: string;
}

interface CampaignSidebarProps {
  campaignName?: string;
  dateRange?: string;
}

export default function CampaignSidebar({
  campaignName = "Beauty campaigns",
  dateRange = "Dec 21st - Jan 15th",
}: CampaignSidebarProps) {
  const router = useRouter();
  const { id } = router.query;

  const menuItems: MenuItem[] = [
    { id: "influencers", label: "Influencers", icon: FiUsers, slug: "influencers" },
    { id: "product-content", label: "Product and Content", icon: FiSettings, slug: "product-content" },
    { id: "budget-allocations", label: "Budget allocations", icon: FiDollarSign, slug: "budget-allocations" },
    { id: "terms-condition", label: "Agree Terms & condition", icon: FiFileText, slug: "terms-condition" },
    { id: "product-sending", label: "Product sending (If need)", icon: FiPackage, slug: "product-sending" },
    { id: "review", label: "Review", icon: FiCode, slug: "review" },
    { id: "monitoring", label: "Campaign Monitoring", icon: FiCheckCircle, slug: "monitoring" },
    { id: "payment", label: "Payment Management", icon: FiCreditCard, slug: "payment" },
  ];

  // Get current active section from query or pathname
  const currentPath = router.asPath;
  const pathSections = currentPath.split("/");
  const currentSection = pathSections[pathSections.length - 1] || "influencers";
  
  const basePath = id ? `/all-campaigns/beauty-product/${id}` : "";

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1 pt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const href = `${basePath}/${item.slug}`;
          const isSelected = currentSection === item.slug || (currentSection === String(id) && item.slug === "influencers");

          return (
            <Link
              key={item.id}
              href={href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                isSelected
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
