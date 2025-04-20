
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyDetailProps {
  title: string;
  location: string;
  price: number;
  perYear?: boolean;
  acres: number;
  leaseTerms: string;
  soilType: string;
  waterSource: string;
  facilities: string[];
  preferredCrops: string[];
  owner: {
    name: string;
    profession: string;
  };
  onClose: () => void;
}

const PropertyDetail = ({
  title,
  location,
  price,
  perYear = true,
  acres,
  leaseTerms,
  soilType,
  waterSource,
  facilities,
  preferredCrops,
  owner,
  onClose,
}: PropertyDetailProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl mx-auto">
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button 
          variant="outline" 
          onClick={onClose}
        >
          Back
        </Button>
      </div>
      
      <div className="p-6">
        <div className="h-[300px] bg-gray-200 rounded-lg flex items-center justify-center mb-6">
          <span className="text-gray-400">Property Image Placeholder</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-medium text-urban-green-600">₹{price.toLocaleString()}{perYear ? '/acre/year' : ''}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Area</p>
                <p className="font-medium">{acres} acres</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Lease Terms</p>
                <p className="font-medium">{leaseTerms}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Soil Type</p>
                <p className="font-medium">{soilType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Water Source</p>
                <p className="font-medium">{waterSource}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            
            {facilities.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Available Facilities</p>
                <div className="flex flex-wrap gap-2">
                  {facilities.map((facility, index) => (
                    <Badge key={index} variant="outline" className="bg-urban-green-50 border-urban-green-200">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {preferredCrops.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Preferred Crops</p>
                <div className="flex flex-wrap gap-2">
                  {preferredCrops.map((crop, index) => (
                    <Badge key={index} variant="outline" className="bg-urban-green-50 border-urban-green-200">
                      {crop}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">About the Owner</h4>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-urban-green-100 rounded-full flex items-center justify-center text-urban-green-800 font-medium">
                  {owner.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{owner.name}</p>
                  <p className="text-sm text-gray-500">Profession: {owner.profession}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Button className="bg-urban-green-500 hover:bg-urban-green-600 px-8">
            Request to Rent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
