import { useNavigate } from "react-router-dom";

const Programs = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Import–Export Servicess</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Explore our service programs. Click on a card to view detailed services.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card A */}
        <div
          className="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg cursor-pointer transition-all duration-300"
          onClick={() => navigate("/services/import-export-services/import-export-services")}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">A) Import–Export Services (Execution Catalog)</h2>
          <p className="text-gray-600 text-sm">
            Explore our import-export service catalog covering compliance, logistics, and execution support.
          </p>
        </div>

        {/* Card B */}
        <div
          className="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg cursor-pointer transition-all duration-300"
          onClick={() => navigate("/services/import-export-services/india-usa-products")} // matches your route
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            B) India → USA: In-Demand Product Categories (Grouped)
          </h2>
          <p className="text-gray-600 text-sm">
            Discover top Indian product categories in demand in the USA, with detailed descriptions for each product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
