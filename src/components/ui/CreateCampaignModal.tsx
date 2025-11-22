import React, { useState } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import { FiX, FiChevronDown } from "react-icons/fi";

interface CreateCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: CampaignFormData) => void;
}

export interface CampaignFormData {
  campaignName: string;
  startDate: string;
  endDate: string;
  reason: string;
  budget: string;
  postType: string;
  platform: string;
  objective: string;
  age: string;
  gender: string;
  languages: string;
  country: string;
  state: string;
  city: string;
}

export default function CreateCampaignModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateCampaignModalProps) {
  const [formData, setFormData] = useState<CampaignFormData>({
    campaignName: "Beauty products",
    startDate: "2024-12-28",
    endDate: "2025-01-15",
    reason: "Website traffic, and sales",
    budget: "30000",
    postType: "Reels, and posts",
    platform: "Instagram, Tik Tok",
    objective: "Engagement Traffic Sales",
    age: "20-25",
    gender: "Male",
    languages: "English, kannada",
    country: "",
    state: "Karnataka",
    city: "Bangalore",
  });

  const [showObjectiveDropdown, setShowObjectiveDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // Helper function to convert DD/MM/YYYY to YYYY-MM-DD
  const convertToDateInputFormat = (dateStr: string): string => {
    if (!dateStr) return "";
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateStr;
  };

  // Helper function to convert YYYY-MM-DD to DD/MM/YYYY
  const convertToDisplayFormat = (dateStr: string): string => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  };

  // Indian States list
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    onClose();
  };

  const handleButtonClick = () => {
    onSubmit?.(formData);
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
          maxWidth: "600px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
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
            Create a campaigns
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
        <form onSubmit={handleSubmit}>
          {/* Campaign Name */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Campaign Name
            </label>
            <input
              type="text"
              name="campaignName"
              value={formData.campaignName}
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

          {/* Start date & End date */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "20px",
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
                Start date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
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
                End date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
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

          {/* Reason for the campaign */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Reason for the campaign
            </label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
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
          <div style={{ marginBottom: "20px" }}>
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

          {/* Post type */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Post type
            </label>
            <input
              type="text"
              name="postType"
              value={formData.postType}
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

          {/* Platform */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Platform
            </label>
            <input
              type="text"
              name="platform"
              value={formData.platform}
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

          {/* Objective */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Objective
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                readOnly
                onClick={() => setShowObjectiveDropdown(!showObjectiveDropdown)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  paddingRight: "40px",
                  fontSize: "0.875rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  backgroundColor: "#f9fafb",
                  color: "#111827",
                  outline: "none",
                  cursor: "pointer",
                }}
              />
              <FiChevronDown
                size={20}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6b7280",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Audience Section */}
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Audience
            </h3>

            {/* Age */}
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
                Age
              </label>
              <input
                type="text"
                name="age"
                value={formData.age}
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

            {/* Gender */}
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
                Gender
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  readOnly
                  onClick={() => setShowGenderDropdown(!showGenderDropdown)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    paddingRight: "40px",
                    fontSize: "0.875rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                    backgroundColor: "#f9fafb",
                    color: "#111827",
                    outline: "none",
                    cursor: "pointer",
                  }}
                />
                <FiChevronDown
                  size={20}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6b7280",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Languages */}
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
                Languages
              </label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
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

            {/* Country */}
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
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
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

            {/* State and City */}
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
                  State
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      paddingRight: "40px",
                      fontSize: "0.875rem",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      backgroundColor: "#f9fafb",
                      color: "#111827",
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                    }}
                  >
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown
                    size={20}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#6b7280",
                      pointerEvents: "none",
                    }}
                  />
                </div>
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
                  City
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    readOnly
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      paddingRight: "40px",
                      fontSize: "0.875rem",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      backgroundColor: "#f9fafb",
                      color: "#111827",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  />
                  <FiChevronDown
                    size={20}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#6b7280",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Create Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "24px",
            }}
          >
            <GradientButton
              label="Create"
              onClick={handleButtonClick}
              className="px-8 py-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

