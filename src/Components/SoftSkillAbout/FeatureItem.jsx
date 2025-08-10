// src/components/FeatureItem.jsx
import { CheckCircle2 } from "lucide-react"; // Optional icon lib

const FeatureItem = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="mt-1 text-orange-500" />
    <div>
      <h4 className="text-[16px] font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default FeatureItem;
