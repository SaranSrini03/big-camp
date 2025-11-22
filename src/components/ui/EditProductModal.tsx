import React, { useState, useEffect } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import { FiX, FiChevronDown } from "react-icons/fi";

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: EditProductFormData) => void;
  productData?: {
    productName?: string;
    address?: string;
    trackingId?: string;
    productLink?: string;
    noOfProduct?: number;
    status?: string;
  };
}

export interface EditProductFormData {
  productName: string;
  address: string;
  trackingId: string;
  productLink: string;
  noOfProduct: number | string;
  status: string;
}

export default function EditProductModal({
  isOpen,
  onClose,
  onSave,
  productData,
}: EditProductModalProps) {
  const [formData, setFormData] = useState<EditProductFormData>({
    productName: productData?.productName || "",
    address: productData?.address || "11234567899",
    trackingId: productData?.trackingId || "123545",
    productLink: productData?.productLink || "",
    noOfProduct: productData?.noOfProduct || "123545",
    status: productData?.status || "123545",
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        productName: productData.productName || "",
        address: productData.address || "11234567899",
        trackingId: productData.trackingId || "123545",
        productLink: productData.productLink || "",
        noOfProduct: productData.noOfProduct || "123545",
        status: productData.status || "123545",
      });
    }
  }, [productData]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          maxWidth: "600px",
          width: "100%",
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
            Edit
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Left Column */}
          <div>
            {/* Product Name */}
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
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Name"
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

            {/* Address */}
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
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
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

            {/* Tracking ID */}
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
                Trakking ID
              </label>
              <input
                type="text"
                name="trackingId"
                value={formData.trackingId}
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

          {/* Right Column */}
          <div>
            {/* Product link */}
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
                Product link
              </label>
              <input
                type="text"
                name="productLink"
                value={formData.productLink}
                onChange={handleChange}
                placeholder="name"
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

            {/* No of product */}
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
                No of product
              </label>
              <input
                type="text"
                name="noOfProduct"
                value={formData.noOfProduct}
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

            {/* Status */}
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
                Status
              </label>
              <input
                type="text"
                name="status"
                value={formData.status}
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

