import { Campaign } from "@/components/tables/CampaignsTable";
import { Influencer } from "@/components/tables/InfluencersTable";
import { ProductContent } from "@/components/tables/ProductContentTable";
import { BudgetAllocation } from "@/components/tables/BudgetAllocationsTable";
import { ProductSending } from "@/components/tables/ProductSendingTable";
import { ReviewItem } from "@/components/tables/ReviewTable";
import { CampaignMonitoring } from "@/components/tables/CampaignMonitoringTable";
import { PaymentManagement } from "@/components/tables/PaymentManagementTable";
import { SummaryCard } from "@/components/ui/SummaryCards";

// Campaigns data
export const campaignsData: Campaign[] = [
  { id: 1, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 12, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "Active" },
  { id: 2, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 15, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "Active" },
  { id: 3, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 10, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "Active" },
  { id: 4, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 8, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "End" },
  { id: 5, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 10, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "End" },
  { id: 6, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 12, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "End" },
  { id: 7, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 5, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "End" },
  { id: 8, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 6, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "End" },
  { id: 9, campaignName: "Beauty product", startDate: "28/12/2024", noOfInfluencers: 7, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, noOfPosts: 15, spent: 20000, ends: "15/01/2025", status: "End" },
];

// Influencers data
export const influencersData: Influencer[] = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", initials: "OR", role: "Product Designer", invitation: "Send invitation", status: "Accepted" },
  { id: 2, name: "Phoenix Baker", username: "@phoenix", initials: "PB", role: "Frontend Developer", invitation: "Invited", status: "Pending" },
  { id: 3, name: "Lana Steiner", username: "@lana", initials: "LS", role: "Product Designer", invitation: "Send invitation", status: "Accepted" },
  { id: 4, name: "Demi Wilkinson", username: "@demi", initials: "DW", role: "Frontend Developer", invitation: "Invited", status: "Accepted" },
  { id: 5, name: "Candice Wu", username: "@candice", initials: "CW", role: "Product Designer", invitation: "Send invitation", status: "Accepted" },
  { id: 6, name: "Natali Craig", username: "@natali", initials: "NC", role: "Frontend Developer", invitation: "Invited", status: "Accepted" },
  { id: 7, name: "Drew Cano", username: "@drew", initials: "DC", role: "Product Designer", invitation: "Send invitation", status: "Accepted" },
  { id: 8, name: "Orlando Diggs", username: "@orlando", initials: "OD", role: "Frontend Developer", invitation: "Invited", status: "Accepted" },
  { id: 9, name: "Andi Lane", username: "@andi", initials: "AL", role: "Product Designer", invitation: "Send invitation", status: "Accepted" },
  { id: 10, name: "Kate Morrison", username: "@kate", initials: "KM", role: "Frontend Developer", invitation: "Invited", status: "Accepted" },
  { id: 11, name: "Kate Morrison", username: "@kate", initials: "KM", role: "Frontend Developer", invitation: "Invited", status: "Accepted" },
];

// Product Content data
export const productContentData: ProductContent[] = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
  { id: 2, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
  { id: 3, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
  { id: 4, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
  { id: 5, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
  { id: 6, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
  { id: 7, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
  { id: 8, name: "Olivia Rhye", username: "@olivia", initials: "OR", productDetail: true, productLink: true, type: "Reels", noOfPost: 2, guidelines: true, deadline: "25/05/2024", status: "Yet to start" },
];

// Budget Allocations data
export const budgetAllocationsData: BudgetAllocation[] = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
  { id: 2, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
  { id: 3, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
  { id: 4, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
  { id: 5, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
  { id: 6, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
  { id: 7, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
  { id: 8, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: "10-15% eng - 2000", spend: 7000 },
];

// Product Sending data
export const productSendingData: ProductSending[] = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
  { id: 2, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
  { id: 3, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
  { id: 4, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
  { id: 5, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
  { id: 6, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
  { id: 7, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
  { id: 8, name: "Olivia Rhye", username: "@olivia", initials: "OR", product: "Red floral kurta", shipTo: "22, 12, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001, India", noOfProduct: 2, trackingId: "cityproduct25154", status: "Processing" },
];

// Review data
export const reviewData: ReviewItem[] = [
  { id: 1, name: "Steve", username: "@olivia", initials: "ST", status: "Done", contentType: "Reels", noOfPosts: 2 },
  { id: 2, name: "Xac", username: "@xac", initials: "XA", status: "Done", contentType: "Reels", noOfPosts: 1 },
  { id: 3, name: "Anu", username: "@anu", initials: "AN", status: "Done", contentType: "Reels", noOfPosts: 3 },
  { id: 4, name: "Adline", username: "@adline", initials: "AD", status: "Done", contentType: "Reels", noOfPosts: 2 },
  { id: 5, name: "Olivia Rhye", username: "@olivia", initials: "OR", status: "Done", contentType: "Reels", noOfPosts: 1 },
  { id: 6, name: "Phoenix Baker", username: "@phoenix", initials: "PB", status: "Done", contentType: "Reels", noOfPosts: 2 },
];

// Campaign Monitoring data
export const campaignMonitoringData: CampaignMonitoring[] = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "Link", noOfPosts: 3, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "₹2.50", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "7.1%", roi: "7.1%" },
  { id: 2, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "1500", noOfPosts: 1500, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "1000", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "1500", roi: "1500" },
  { id: 3, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "1500", noOfPosts: 1500, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "1000", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "1500", roi: "1500" },
  { id: 4, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "1500", noOfPosts: 1500, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "1000", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "1500", roi: "1500" },
  { id: 5, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "1500", noOfPosts: 1500, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "1000", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "1500", roi: "1500" },
  { id: 6, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "1500", noOfPosts: 1500, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "1000", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "1500", roi: "1500" },
  { id: 7, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "1500", noOfPosts: 1500, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "1000", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "1500", roi: "1500" },
  { id: 8, name: "Olivia Rhye", username: "@olivia", initials: "OR", postLink: "1500", noOfPosts: 1500, audience: 1500, reach: 2500, likes: 1500, costPerEngagement: "1000", engagement: "10-15% eng - 2000", campaignSpend: 7000, conversionRate: "1500", roi: "1500" },
];

// Campaign Monitoring Summary Cards
export const campaignMonitoringCards: SummaryCard[] = [
  { id: "1", value: "102K", label: "Total Audience" },
  { id: "2", value: "92K", label: "Total Engagement" },
  { id: "3", value: "12K", label: "Total Reach" },
  { id: "4", value: "110", label: "Total Impression" },
  { id: "5", value: "1K", label: "Avg. Daily Reach" },
];

// Payment Management data
export const paymentManagementData: PaymentManagement[] = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: 2000, spend: 7000, date: "27/12/2023", status: "Processing" },
  { id: 2, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: 2000, spend: 7000, date: "27/12/2023", status: "Processing" },
  { id: 3, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: 2000, spend: 7000, date: "27/12/2023", status: "Processing" },
  { id: 4, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: 2000, spend: 7000, date: "27/12/2023", status: "Processing" },
  { id: 5, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: 2000, spend: 7000, date: "27/12/2023", status: "Processing" },
  { id: 6, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: 2000, spend: 7000, date: "27/12/2023", status: "Processing" },
  { id: 7, name: "Olivia Rhye", username: "@olivia", initials: "OR", cpp: 1500, cps: 1000, cpvid: 2500, performanceHike: 2000, spend: 7000, date: "27/12/2023", status: "Processing" },
];

// Payment Management Summary Cards
export const paymentManagementCards: SummaryCard[] = [
  { id: "1", value: "102K", label: "Budget" },
  { id: "2", value: "92K", label: "Spent" },
  { id: "3", value: "12K", label: "Eng. Commissions" },
  { id: "4", value: "110", label: "Paid" },
  { id: "5", value: "1K", label: "Balance" },
];

// Influencer Discovery data (for add-influencer page)
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

export const influencerDiscoveryData: InfluencerDiscovery[] = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", initials: "OR", matchPercentage: 70, location: "Bangalore", niches: ["Fashion", "Model", "Food"], additionalNiches: 4 },
  { id: 2, name: "Phoenix Baker", username: "@phoenix", initials: "PB", matchPercentage: 100, location: "Bangalore", niches: ["Model", "Product", "Beauty"], additionalNiches: 4 },
  { id: 3, name: "Lana Steiner", username: "@lana", initials: "LS", matchPercentage: 80, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 4, name: "Demi Wilkinson", username: "@demi", initials: "DW", matchPercentage: 70, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 5, name: "Candice Wu", username: "@candice", initials: "CW", matchPercentage: 80, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 6, name: "Natali Craig", username: "@natali", initials: "NC", matchPercentage: 70, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 7, name: "Drew Cano", username: "@drew", initials: "DC", matchPercentage: 75, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 8, name: "Orlando Diggs", username: "@orlando", initials: "OD", matchPercentage: 80, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 9, name: "Andi Lane", username: "@andi", initials: "AL", matchPercentage: 100, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 10, name: "Kate Morrison", username: "@kate", initials: "KM", matchPercentage: 100, location: "Bangalore", niches: ["Design", "Product", "Marketing"], additionalNiches: 4 },
  { id: 11, name: "Alice Johnson", username: "@alice", initials: "AJ", matchPercentage: 85, location: "Bangalore", niches: ["Fashion", "Beauty", "Lifestyle"], additionalNiches: 4 },
  { id: 12, name: "Bob Smith", username: "@bob", initials: "BS", matchPercentage: 75, location: "Bangalore", niches: ["Tech", "Gaming", "Entertainment"], additionalNiches: 4 },
];

// Section titles mapping
export const sectionTitles: Record<string, string> = {
  influencers: "Influencers",
  "product-content": "Product and Content",
  "budget-allocations": "Budget allocations",
  "terms-condition": "Agree Terms & condition",
  "product-sending": "Product sending (If need)",
  review: "Review",
  monitoring: "Campaign Monitoring",
  payment: "Payment Management",
};

