import React from "react";
import { FiCheck } from "react-icons/fi";

interface InvitationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  influencerName?: string;
  campaignName?: string;
}

export default function InvitationSuccessModal({
  isOpen,
  onClose,
  onConfirm,
  influencerName,
  campaignName = "beauty campaign",
}: InvitationSuccessModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm?.();
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "24px",
          maxWidth: "480px",
          width: "90%",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              position: "relative",
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Outer glow circle */}
            <div
              style={{
                position: "absolute",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#dcfce7",
                opacity: 0.3,
              }}
            />
            {/* Middle circle */}
            <div
              style={{
                position: "absolute",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#bbf7d0",
              }}
            />
            {/* Inner circle with checkmark */}
            <div
              style={{
                position: "relative",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FiCheck size={24} color="white" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          You successfully invited the influencer for the {campaignName}
        </h2>

        {/* Body Text */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "#374151",
            lineHeight: "1.5",
            marginBottom: "24px",
          }}
        >
          This application post has been submitted. our team members will be
          review your application and will reach out to you.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#374151",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            style={{
              padding: "8px 16px",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "white",
              backgroundColor: "#2563eb",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1d4ed8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

