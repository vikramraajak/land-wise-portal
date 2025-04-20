
import Navbar from "@/components/Navbar";
import ReviewItem, { Document } from "@/components/ReviewItem";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock data - would be fetched based on the ID in a real application
const MOCK_REVIEWS = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "North Bangalore Plot",
    documents: [
      {
        title: "Crop Report",
        date: "2024-04-26",
        description: "Monthly yield report with soil analysis",
        status: "pending" as const
      },
      {
        title: "Water Usage",
        date: "2024-04-25",
        description: "Irrigation and water conservation data",
        status: "pending" as const
      }
    ],
    paymentAmount: 25000,
    paymentDue: "Jan 2024",
  },
  {
    id: "2",
    name: "Suresh Patel",
    location: "Mysore Farm Land",
    documents: [
      {
        title: "Land Ownership Documents",
        date: "2024-04-20",
        description: "Verified ownership certificate and boundary details",
        status: "pending" as const
      },
      {
        title: "Soil Analysis Report",
        date: "2024-04-18",
        description: "Complete soil nutrient and composition analysis",
        status: "pending" as const
      },
      {
        title: "Water Source Certificate",
        date: "2024-04-15",
        description: "Borewell depth and water quality report",
        status: "pending" as const
      }
    ],
    paymentAmount: 32000,
    paymentDue: "Feb 2024",
  }
];

const ReviewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the review with the matching ID
  const review = MOCK_REVIEWS.find(r => r.id === id);

  if (!review) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Button 
            variant="outline" 
            className="mb-4"
            onClick={() => navigate('/document-review')}
          >
            Back to Reviews
          </Button>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p>Review not found</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-4"
          onClick={() => navigate('/document-review')}
        >
          Back to Reviews
        </Button>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl mx-auto">
          <ReviewItem
            name={review.name}
            location={review.location}
            documents={review.documents}
            paymentAmount={review.paymentAmount}
            paymentDue={review.paymentDue}
            expanded={true}
          />
        </div>
      </main>
    </div>
  );
};

export default ReviewDetail;
