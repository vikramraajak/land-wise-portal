
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Fertile Agricultural Plot",
    location: "North Bangalore",
    price: 25000,
    acres: 3.2,
    leaseTerms: "2 years minimum",
    soilType: "Black Cotton",
    waterSource: "Canal + Borewell",
    facilities: ["Borewell", "Storage Shed", "Fencing"],
    preferredCrops: ["Paddy", "Vegetables"],
    owner: {
      name: "Priya Sharma",
      profession: "Software Engineer",
    },
  },
  {
    id: 2,
    title: "Cultivable Land Parcel",
    location: "Mysore Rural",
    price: 20000,
    acres: 2.8,
    leaseTerms: "3 years minimum",
    soilType: "Red Soil",
    waterSource: "Borewell",
    facilities: ["Power Connection", "Road Access"],
    preferredCrops: ["Any"],
    owner: {
      name: "Arun Kumar",
      profession: "Bank Manager",
    },
  },
  {
    id: 3,
    title: "Premium Farm Land",
    location: "Hassan District",
    price: 30000,
    acres: 4.0,
    leaseTerms: "5 years minimum",
    soilType: "Alluvial",
    waterSource: "River Nearby",
    facilities: ["Farmhouse", "Equipment Storage", "Power"],
    preferredCrops: ["Commercial Crops"],
    owner: {
      name: "Deepak Verma",
      profession: "IT Consultant",
    },
  },
];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProperties = MOCK_PROPERTIES.filter(property => 
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.soilType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.waterSource.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-urban-green-800">Available Properties for Rent</h1>
          
          <Button className="bg-urban-green-500 hover:bg-urban-green-600">
            For Rent
          </Button>
        </div>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10 py-6 rounded-lg"
            placeholder="Search by location, soil type, water source..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              acres={property.acres}
              leaseTerms={property.leaseTerms}
              soilType={property.soilType}
              waterSource={property.waterSource}
              facilities={property.facilities}
              preferredCrops={property.preferredCrops}
              owner={property.owner}
              onViewDetails={() => console.log(`Viewing details for ${property.title}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Properties;
