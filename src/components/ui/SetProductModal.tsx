import React, { useState, useEffect, FiX, FiPaperclip, GradientButton } from "@/imports/globalimport";

interface SetProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: SetProductFormData) => void;
  productData?: {
    productDetail?: File | string;
    productLink?: string;
    type?: string;
    noOfPost?: number | string;
    guidelines?: File | string;
    deadline?: string;
    status?: string;
  };
}

export interface SetProductFormData {
  productDetail: File | string | null;
  productLink: string;
  type: string;
  noOfPost: number | string;
  guidelines: File | string | null;
  deadline: string;
  status: string;
}

export default function SetProductModal({
  isOpen,
  onClose,
  onSave,
  productData,
}: SetProductModalProps) {
  const [formData, setFormData] = useState<SetProductFormData>({
    productDetail: null,
    productLink: productData?.productLink || "",
    type: productData?.type || "11234567899",
    noOfPost: productData?.noOfPost || "123545",
    guidelines: null,
    deadline: productData?.deadline || "123545",
    status: productData?.status || "123545",
  });

  const [productDetailFile, setProductDetailFile] = useState<File | null>(null);
  const [guidelinesFile, setGuidelinesFile] = useState<File | null>(null);

  useEffect(() => {
    if (productData) {
      setFormData({
        productDetail: productData.productDetail || null,
        productLink: productData.productLink || "",
        type: productData.type || "11234567899",
        noOfPost: productData.noOfPost || "123545",
        guidelines: productData.guidelines || null,
        deadline: productData.deadline || "123545",
        status: productData.status || "123545",
      });
    }
  }, [productData]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "productDetail" | "guidelines") => {
    const file = e.target.files?.[0];
    if (file) {
      if (field === "productDetail") {
        setProductDetailFile(file);
        setFormData((prev) => ({ ...prev, productDetail: file }));
      } else {
        setGuidelinesFile(file);
        setFormData((prev) => ({ ...prev, guidelines: file }));
      }
    }
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
            Set Product
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
        {/* Row 1: Product detail & Product link */}
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
              Product detail
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="file"
                id="productDetail"
                accept="*/*"
                onChange={(e) => handleFileChange(e, "productDetail")}
                style={{ display: "none" }}
              />
              <label
                htmlFor="productDetail"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "0.875rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  backgroundColor: "#f9fafb",
                  color: "#111827",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <FiPaperclip size={16} />
                <span>{productDetailFile ? productDetailFile.name : "Upload File"}</span>
              </label>
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
        </div>

        {/* Row 2: Type & No of post */}
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
              Type
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
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
              No of post
            </label>
            <input
              type="text"
              name="noOfPost"
              value={formData.noOfPost}
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

        {/* Row 3: Guidelines & Instructions & Deadline */}
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
              Guidelines & Instructions
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="file"
                id="guidelines"
                accept="*/*"
                onChange={(e) => handleFileChange(e, "guidelines")}
                style={{ display: "none" }}
              />
              <label
                htmlFor="guidelines"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "0.875rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  backgroundColor: "#f9fafb",
                  color: "#111827",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <FiPaperclip size={16} />
                <span>{guidelinesFile ? guidelinesFile.name : "Upload File"}</span>
              </label>
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
              Deadline
            </label>
            <input
              type="text"
              name="deadline"
              value={formData.deadline}
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

        {/* Status (Single Column) */}
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

