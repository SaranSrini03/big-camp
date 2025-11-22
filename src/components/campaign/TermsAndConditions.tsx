import React, { FiExternalLink } from "@/imports/globalimport";

interface TermsAndConditionsProps {
  brandName?: string;
  influencerName?: string;
  campaignName?: string;
  paymentDetails?: string;
  days?: number;
  jurisdiction?: string;
}

export default function TermsAndConditions({
  brandName = "[Brand Name]",
  influencerName = "[Influencer Name]",
  campaignName = "[Campaign Name]",
  paymentDetails = "[Insert Payment Details]",
  days = 30,
  jurisdiction = "[Insert Jurisdiction]",
}: TermsAndConditionsProps) {
  return (
    <div className="w-full">
      {/* Title with Edit Icon */}
      <div className="flex items-center justify-center mb-8 relative w-full max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">Terms and conditions</h1>
        <button
          className="absolute right-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Edit terms and conditions"
        >
          <FiExternalLink size={18} />
        </button>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto">
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            These Terms and Conditions ("Agreement") govern the collaboration between{" "}
            <span className="font-semibold text-gray-900">{brandName}</span> ("Brand") and{" "}
            <span className="font-semibold text-gray-900">{influencerName}</span> ("Influencer") for the campaign titled{" "}
            <span className="font-semibold text-gray-900">{campaignName}</span>.
          </p>

          <p>
            The Influencer agrees to create and deliver original content in accordance with the Brand's guidelines and specifications. All content must be authentic, engaging, and aligned with the campaign objectives. The Influencer shall adhere to all content guidelines provided by the Brand, including but not limited to messaging, tone, visual requirements, and compliance with applicable laws and regulations.
          </p>

          <p>
            All content must be submitted to the Brand for review and approval prior to publication. The Brand reserves the right to request revisions or reject content that does not meet the agreed-upon standards. Payment terms: <span className="font-semibold text-gray-900">{paymentDetails}</span>. The Influencer shall receive compensation as outlined in the campaign agreement upon satisfactory completion of deliverables.
          </p>

          <p>
            The campaign performance will be measured based on agreed-upon metrics including reach, engagement, impressions, and other key performance indicators as specified in the campaign brief. Both parties agree to maintain confidentiality regarding any proprietary information, trade secrets, or confidential data shared during the course of this collaboration.
          </p>

          <p>
            Either party may terminate this agreement with <span className="font-semibold text-gray-900">{days}</span> days' written notice. Upon termination, all outstanding obligations and payments shall be settled in accordance with the terms of this agreement. The Brand shall have the right to use, reproduce, distribute, and display the content created by the Influencer for promotional and marketing purposes related to this campaign and future campaigns, subject to the Influencer's right to use the content on their own platforms.
          </p>

          <p>
            Each party agrees to indemnify and hold harmless the other party from any claims, damages, losses, or liabilities arising from their breach of this agreement or violation of any applicable laws or regulations. This Agreement shall be governed by and construed in accordance with the laws of{" "}
            <span className="font-semibold text-gray-900">{jurisdiction}</span>. Any disputes arising from this agreement shall be resolved through binding arbitration or in the appropriate courts of the aforementioned jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}

