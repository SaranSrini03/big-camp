import React, { FiSearch, FiChevronDown } from "@/imports/globalimport";

interface SearchAndSortControlsProps {
  onSearchChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
  sortOptions?: string[];
  defaultSortValue?: string;
  className?: string;
  align?: "left" | "right"; // Alignment prop
}

export default function SearchAndSortControls({
  onSearchChange,
  onSortChange,
  sortOptions = ["Name", "Date", "Category"],
  defaultSortValue = "Name",
  className = "",
  align = "left", // Default to left
}: SearchAndSortControlsProps) {
  const alignmentClass = align === "right" ? "justify-end" : "justify-start";
  const maxWidthClass = align === "right" ? "max-w-none" : "max-w-7xl";
  
  return (
    <div className={`w-full ${maxWidthClass} flex ${alignmentClass} items-center gap-4 pl-0 ${className}`}>
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-74 border border-gray-200 rounded-full px-5 py-1.5 pr-10 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onChange={(e) => onSearchChange?.(e.target.value)}
        />
        <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
      </div>

      {/* Sort By */}
      <div className="flex items-center gap-2">
        <span className="text-gray-700 text-xs font-medium">Sort by</span>
        <div className="relative">
          <select
            className="border border-gray-200 w-30 rounded-lg px-3 py-1.5 pr-7 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none cursor-pointer"
            defaultValue={defaultSortValue}
            onChange={(e) => onSortChange?.(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
      </div>
    </div>
  );
}
