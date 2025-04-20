
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ReviewItem from "@/components/ReviewItem";

// Mock data
const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "North Bangalore Plot",
    documents: [
      {
        title: "Crop Report",
        date: "2024-04-26",
        description: "Monthly yield report with soil analysis",
        status: "pending"
      },
      {
        title: "Water Usage",
        date: "2024-04-25",
        description: "Irrigation and water conservation data",
        status: "pending"
      }
    ],
    paymentAmount: 25000,
    paymentDue: "Jan 2024",
  },
  {
    id: 2,
    name: "Suresh Patel",
    location: "Mysore Farm Land",
    documents: [
      {
        title: "Land Ownership Documents",
        date: "2024-04-20",
        description: "Verified ownership certificate and boundary details",
        status: "pending"
      },
      {
        title: "Soil Analysis Report",
        date: "2024-04-18",
        description: "Complete soil nutrient and composition analysis",
        status: "pending"
      },
      {
        title: "Water Source Certificate",
        date: "2024-04-15",
        description: "Borewell depth and water quality report",
        status: "pending"
      }
    ],
    paymentAmount: 32000,
    paymentDue: "Feb 2024",
  }
];

const DocumentReview = () => {
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const handleViewDetails = (reviewId: number) => {
    setSelectedReviewId(reviewId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold">Pending Reviews</h1>
          </div>
          
          <div>
            {MOCK_REVIEWS.map((review) => (
              <ReviewItem
                key={review.id}
                name={review.name}
                location={review.location}
                documents={review.documents}
                paymentAmount={review.paymentAmount}
                paymentDue={review.paymentDue}
                onViewDetails={() => handleViewDetails(review.id)}
                expanded={selectedReviewId === review.id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocumentReview;
