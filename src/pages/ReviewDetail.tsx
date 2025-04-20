
import Navbar from "@/components/Navbar";
import ReviewItem from "@/components/ReviewItem";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock data - would be fetched based on the ID in a real application
const MOCK_REVIEW = {
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
};

const ReviewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, we would fetch the review data using the ID
  // const review = fetchReviewById(id);

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
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <ReviewItem
            name={MOCK_REVIEW.name}
            location={MOCK_REVIEW.location}
            documents={MOCK_REVIEW.documents}
            paymentAmount={MOCK_REVIEW.paymentAmount}
            paymentDue={MOCK_REVIEW.paymentDue}
            expanded={true}
          />
        </div>
      </main>
    </div>
  );
};

export default ReviewDetail;
