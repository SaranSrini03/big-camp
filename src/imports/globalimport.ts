// React - Export default and hooks
export { default as React } from "react";
export { default } from "react";
export { useState, useMemo, useEffect, useCallback, useRef } from "react";
export type { ReactNode, ChangeEvent, FormEvent, MouseEvent } from "react";

// Next.js
export { useRouter } from "next/router";
export { default as Link } from "next/link";
export type { AppProps } from "next/app";

// Material-UI Components
export {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Pagination,
  Box,
} from "@mui/material";

// React Icons - Feather Icons (Fi)
export {
  FiHelpCircle,
  FiChevronDown,
  FiTrash2,
  FiExternalLink,
  FiCheck,
  FiX,
  FiSearch,
  FiArrowRight,
  FiArrowLeft,
  FiDownload,
  FiCopy,
  FiMoreVertical,
  FiPaperclip,
  FiUsers,
  FiSettings,
  FiDollarSign,
  FiFileText,
  FiPackage,
  FiCode,
  FiCheckCircle,
  FiCreditCard,
} from "react-icons/fi";

// React Icons - Types
export type { IconType } from "react-icons";

// Components - Buttons
export { default as GradientButton } from "@/components/buttons/GradientButton";

// Components - UI
export { default as SearchAndSortControls } from "@/components/ui/SearchAndSortControls";
export { default as SummaryCards } from "@/components/ui/SummaryCards";
export type { SummaryCard } from "@/components/ui/SummaryCards";

// Components - Campaign
export { default as CampaignSidebar } from "@/components/campaign/CampaignSidebar";
export { default as CampaignHero } from "@/components/campaign/CampaignHero";
export { default as TermsAndConditions } from "@/components/campaign/TermsAndConditions";

// Components - Tables
export { default as CampaignsTable } from "@/components/tables/CampaignsTable";
export type { Campaign } from "@/components/tables/CampaignsTable";
export { default as InfluencersTable } from "@/components/tables/InfluencersTable";
export type { Influencer } from "@/components/tables/InfluencersTable";
export { default as ProductContentTable } from "@/components/tables/ProductContentTable";
export type { ProductContent } from "@/components/tables/ProductContentTable";
export { default as BudgetAllocationsTable } from "@/components/tables/BudgetAllocationsTable";
export type { BudgetAllocation } from "@/components/tables/BudgetAllocationsTable";
export { default as ProductSendingTable } from "@/components/tables/ProductSendingTable";
export type { ProductSending } from "@/components/tables/ProductSendingTable";
export { default as ReviewTable } from "@/components/tables/ReviewTable";
export type { ReviewItem } from "@/components/tables/ReviewTable";
export { default as CampaignMonitoringTable } from "@/components/tables/CampaignMonitoringTable";
export type { CampaignMonitoring } from "@/components/tables/CampaignMonitoringTable";
export { default as PaymentManagementTable } from "@/components/tables/PaymentManagementTable";
export type { PaymentManagement } from "@/components/tables/PaymentManagementTable";
export { default as InfluencerDiscoveryTable } from "@/components/tables/InfluencerDiscoveryTable";
export type { InfluencerDiscovery } from "@/components/tables/InfluencerDiscoveryTable";

// Components - Modals
export { default as CreateCampaignModal } from "@/components/ui/CreateCampaignModal";
export type { CampaignFormData } from "@/components/ui/CreateCampaignModal";
export { default as InfluencerAddedModal } from "@/components/ui/InfluencerAddedModal";
export { default as InvitationSuccessModal } from "@/components/ui/InvitationSuccessModal";
export { default as PaymentModal } from "@/components/ui/PaymentModal";
export { default as EditProductModal } from "@/components/ui/EditProductModal";
export { default as SetBudgetModal } from "@/components/ui/SetBudgetModal";
export type { BudgetFormData } from "@/components/ui/SetBudgetModal";
export { default as SetProductModal } from "@/components/ui/SetProductModal";
