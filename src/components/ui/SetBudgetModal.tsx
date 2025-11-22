import React, { useState, useEffect } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import { FiX } from "react-icons/fi";

interface SetBudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: BudgetFormData) => void;
  budgetData?: {
    cpp?: number;
    cps?: number;
    cpvid?: number;
    performanceHike?: string;
    budget?: number;
  };
}

export interface BudgetFormData {
  cpp: number | string;
  cps: number | string;
  cpvid: number | string;
  performanceHike: string;
  budget: number | string;
}

export default function SetBudgetModal({
  isOpen,
  onClose,
  onSave,
  budgetData,
}: SetBudgetModalProps) {
  const [formData, setFormData] = useState<BudgetFormData>({
    cpp: budgetData?.cpp || 1000,
    cps: budgetData?.cps || 1500,
    cpvid: budgetData?.cpvid || 1500,
    performanceHike: budgetData?.performanceHike || "5-10% of Eng - 1500",
    budget: budgetData?.budget || 10000,
  });

  useEffect(() => {
    if (budgetData) {
      setFormData({
        cpp: budgetData.cpp || 1000,
        cps: budgetData.cps || 1500,
        cpvid: budgetData.cpvid || 1500,
        performanceHike: budgetData.performanceHike || "5-10% of Eng - 1500",
        budget: budgetData.budget || 10000,
      });
    }
  }, [budgetData]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave?.(formData);
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
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "32px",
          maxWidth: "500px",
          width: "100%",
          borderLeft: "4px solid #3b82f6",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            Set your budget
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b7280",
            }}
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Form */}
        {/* Row 1: CPP and CPS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Cost per post (CPP)
            </label>
            <input
              type="text"
              name="cpp"
              value={formData.cpp}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 12px",
                fontSize: "0.875rem",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                backgroundColor: "#f9fafb",
                color: "#111827",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Cost per story (CPS)
            </label>
            <input
              type="text"
              name="cps"
              value={formData.cps}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 12px",
                fontSize: "0.875rem",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                backgroundColor: "#f9fafb",
                color: "#111827",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Cost per video (CPVID) */}
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Cost per video (CPVID)
          </label>
          <input
            type="text"
            name="cpvid"
            value={formData.cpvid}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "0.875rem",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              backgroundColor: "#f9fafb",
              color: "#111827",
              outline: "none",
            }}
          />
        </div>

        {/* Performance Engagement hike */}
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Performance Engagement hike
          </label>
          <input
            type="text"
            name="performanceHike"
            value={formData.performanceHike}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "0.875rem",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              backgroundColor: "#f9fafb",
              color: "#111827",
              outline: "none",
            }}
          />
        </div>

        {/* Budget */}
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Budget
          </label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "0.875rem",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              backgroundColor: "#f9fafb",
              color: "#111827",
              outline: "none",
            }}
          />
        </div>

        {/* Set Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <GradientButton
            label="Set"
            onClick={handleSave}
            className="px-12 py-3"
          />
        </div>
      </div>
    </div>
  );
}

