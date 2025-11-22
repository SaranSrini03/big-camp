import React, { useState } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import { FiX, FiCopy } from "react-icons/fi";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPayment?: (data: PaymentFormData) => void;
  paymentData?: {
    name?: string;
    accountNumber?: string;
    ifscCode?: string;
    upi?: string;
  };
}

export interface PaymentFormData {
  holderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  upi: string;
}

export default function PaymentModal({
  isOpen,
  onClose,
  onPayment,
  paymentData,
}: PaymentModalProps) {
  const [formData, setFormData] = useState<PaymentFormData>({
    holderName: paymentData?.name || "",
    bankName: "",
    accountNumber: paymentData?.accountNumber || "11234567899",
    ifscCode: paymentData?.ifscCode || "123545",
    upi: paymentData?.upi || "11234567899",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here if needed
  };

  const handlePayment = () => {
    onPayment?.(formData);
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
            Payment
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

        {/* Bank Account Details Section */}
        <div style={{ marginBottom: "24px" }}>
          {/* Row 1: Holder Name & Bank Name */}
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
                Holder Name
              </label>
              <input
                type="text"
                name="holderName"
                value={formData.holderName}
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
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
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
          </div>

          {/* Row 2: Account Number & IFSC Code */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
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
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
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
                IFSC Code
              </label>
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
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

        {/* UPI Section */}
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
            UPI
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="upi"
              value={formData.upi}
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
              }}
            />
            <button
              onClick={() => handleCopy(formData.upi)}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
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
              <FiCopy size={18} />
            </button>
          </div>
        </div>

        {/* Payment Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <GradientButton
            label="Payment"
            onClick={handlePayment}
            className="px-12 py-3"
          />
        </div>
      </div>
    </div>
  );
}

