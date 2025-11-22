import React, { FiMoreVertical } from "@/imports/globalimport";

export interface SummaryCard {
  id: string;
  value: string;
  label: string;
}

interface SummaryCardsProps {
  cards: SummaryCard[];
}

export default function SummaryCards({ cards }: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white border border-gray-200 rounded-lg p-4 relative hover:shadow-md transition-shadow"
        >
          <div className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-gray-600">
            <FiMoreVertical size={18} />
          </div>
          <div className="mt-1">
            <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
            <div className="text-sm text-gray-600">{card.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

