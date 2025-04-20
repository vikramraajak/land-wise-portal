
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface LandRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandRegistrationModal = ({ isOpen, onClose }: LandRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    area: '',
    price: '',
    soilType: '',
    waterSource: '',
    description: '',
    ownerName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Property successfully registered!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">List Property for Sale</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid gap-3">
            <Label htmlFor="title">Property Title*</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter property title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="location">Location*</Label>
            <Input
              id="location"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="area">Total Area (in acres)*</Label>
              <Input
                id="area"
                name="area"
                placeholder="Enter area"
                value={formData.area}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">Asking Price (₹)*</Label>
              <Input
                id="price"
                name="price"
                placeholder="Enter amount"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="soilType">Soil Type*</Label>
              <Select onValueChange={(value) => handleSelectChange('soilType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="black">Black Soil</SelectItem>
                  <SelectItem value="red">Red Soil</SelectItem>
                  <SelectItem value="alluvial">Alluvial Soil</SelectItem>
                  <SelectItem value="clay">Clay Soil</SelectItem>
                  <SelectItem value="sandy">Sandy Soil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="waterSource">Water Source*</Label>
              <Select onValueChange={(value) => handleSelectChange('waterSource', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select water source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="borewell">Borewell</SelectItem>
                  <SelectItem value="canal">Canal</SelectItem>
                  <SelectItem value="river">River Nearby</SelectItem>
                  <SelectItem value="rainfall">Rainfall Dependent</SelectItem>
                  <SelectItem value="dam">Dam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="description">Property Description*</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your property, facilities, preferred crops, etc."
              value={formData.description}
              onChange={handleChange}
              className="min-h-[100px]"
              required
            />
          </div>
          
          <h3 className="text-lg font-semibold pt-2">Contact Information</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="ownerName">Owner Name*</Label>
              <Input
                id="ownerName"
                name="ownerName"
                placeholder="Enter your name"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phoneNumber">Phone Number*</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter email address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <DialogFooter className="sm:justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-urban-green-500 hover:bg-urban-green-600">
              Register
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LandRegistrationModal;
