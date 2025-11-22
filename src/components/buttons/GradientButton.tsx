import React, { Link, FiArrowRight } from "@/imports/globalimport";

interface GradientButtonProps {
  href?: string; // Acts as link if provided
  label: React.ReactNode;
  width?: string;
  onClick?: () => void;
  variant?: "vertical" | "horizontal";
  className?: string;
  colors?: string; // Custom gradient override
  disabled?: boolean;
  showIcon?: boolean; // Show arrow icon in circle
  icon?: React.ReactNode; // Custom icon component
}

// Export the icon component for standalone use
export function ArrowIconCircle({ 
  className = "",
  icon,
}: { 
  className?: string;
  icon?: React.ReactNode;
}) {
  const defaultIcon = <FiArrowRight className="text-white font-bold" size={12} />;
  
  return (
    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full border border-white font-bold ${className}`}>
      {icon || defaultIcon}
    </span>
  );
}

export default function GradientButton({
  href,
  label,
  width = "w-auto",
  onClick,
  variant = "vertical",
  className = "",
  colors,
  disabled = false,
  showIcon = false,
  icon,
}: GradientButtonProps) {
  const baseClasses = `
    flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-full
    shadow-lg transition-all duration-300 transform hover:scale-[1.02]
    ${width}
  `;

  const gradients = {
    vertical: "bg-gradient-to-b from-[#264d99] to-[#66b3ff] hover:opacity-90 text-white",
    horizontal: "bg-gradient-to-r from-[#1e40af] to-[#3b82f6] hover:shadow-xl text-white",
  };

  const combinedClasses = `
    ${baseClasses}
    ${colors ? colors : gradients[variant]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `.trim();

  const content = (
    <>
      {label}
      {showIcon && <ArrowIconCircle icon={icon} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClasses}>
      {content}
    </button>
  );
}
