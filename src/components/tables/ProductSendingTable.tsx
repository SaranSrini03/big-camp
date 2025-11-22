import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FiHelpCircle, FiChevronDown, FiExternalLink } from "react-icons/fi";
import TablePagination from "./TablePagination";
import EditProductModal from "@/components/ui/EditProductModal";


export interface ProductSending {
  id: number;
  name: string;
  username: string;
  initials: string;
  product: string;
  shipTo: string;
  noOfProduct: number;
  trackingId: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
}

interface ProductSendingTableProps {
  products: ProductSending[];
  onEdit?: (id: number) => void;
  onStatusChange?: (id: number, status: ProductSending['status']) => void;
}

export default function ProductSendingTable({
  products,
  onEdit,
  onStatusChange,
}: ProductSendingTableProps) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<ProductSending | null>(null);

  const getInitialsColor = (initials: string) => {
    const colors = [
      "#E0E7FF", "#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3",
      "#E0E7FF", "#DBEAFE", "#D1FAE5", "#FEF3C7", "#FCE7F3",
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  const getInitialsTextColor = (initials: string) => {
    const colors = [
      "#3730A3", "#1E40AF", "#065F46", "#92400E", "#9F1239",
      "#3730A3", "#1E40AF", "#065F46", "#92400E", "#9F1239",
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  const tableHeaders = [
    "Name",
    "Product",
    "Ship to",
    "No of product",
    "Tracking ID",
    "Status",
  ];

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return products.slice(startIndex, endIndex);
  }, [products, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleEditClick = (product: ProductSending) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
    onEdit?.(product.id);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSave = (formData: any) => {
    // Handle save logic here
    console.log("Product updated:", formData);
    // You can add API call here to update the product
    handleEditModalClose();
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ boxShadow: "none", border: "none", padding: "16px" }}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow sx={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafc" }}>
              {tableHeaders.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    py: 2,
                    px: 2,
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "#374151",
                    whiteSpace: "nowrap",
                    borderBottom: "1px solid #e5e7eb",
                    backgroundColor: "#f9fafc",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {header}
                    {header !== "Status" && header !== "Name" && (
                      <FiHelpCircle className="text-gray-400" size={14} />
                    )}
                    {header === "Status" && (
                      <FiChevronDown className="text-gray-400" size={14} />
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
            <TableRow
              key={product.id}
              sx={{
                borderBottom: "1px solid #f3f4f6",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <FiExternalLink
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    size={16}
                    onClick={() => handleEditClick(product)}
                  />
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: getInitialsColor(product.initials),
                      color: getInitialsTextColor(product.initials),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {product.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#111827", marginBottom: "2px", fontSize: "0.875rem" }}>
                      {product.name}
                    </div>
                    <div style={{ fontSize: "0.6875rem", color: "#6b7280" }}>
                      {product.username}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {product.product}
                  <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>🔗</span>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  py: 1,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                  whiteSpace: "normal",
                  maxWidth: "350px",
                  lineHeight: "1.5",
                }}
              >
                <div style={{ lineHeight: "1.5", wordBreak: "break-word" }}>
                  {product.shipTo}
                </div>
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {product.noOfProduct}
              </TableCell>
              <TableCell
                sx={{
                  py: 2,
                  px: 2,
                  fontSize: "0.8125rem",
                  color: "#111827",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {product.trackingId}
              </TableCell>
              <TableCell
                sx={{
                  py: 1,
                  px: 2,
                  fontSize: "0.8125rem",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    backgroundColor: product.status === "Processing" ? "#d1fae5" :
                                    product.status === "Shipped" ? "#dbeafe" :
                                    product.status === "Delivered" ? "#d1fae5" : "#fee2e2",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: product.status === "Processing" ? "#10b981" :
                                      product.status === "Shipped" ? "#3b82f6" :
                                      product.status === "Delivered" ? "#10b981" : "#ef4444",
                    }}
                  />
                  <span
                    style={{
                      color: product.status === "Processing" ? "#065f46" :
                             product.status === "Shipped" ? "#1e40af" :
                             product.status === "Delivered" ? "#065f46" : "#991b1b",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {product.status}
                  </span>
                </div>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {products.length > rowsPerPage && (
        <TablePagination
          count={products.length}
          page={page}
          onChange={handlePageChange}
          rowsPerPage={rowsPerPage}
        />
      )}

            <EditProductModal
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        onSave={handleSave}
        productData={{
          productName: selectedProduct?.name,
          address: "11234567899",
          trackingId: "123545",
          productLink: selectedProduct?.product || "",
          noOfProduct: selectedProduct?.noOfProduct || 0,
          status: selectedProduct?.status || "",
        }}
      />
    </div>
  );
}

