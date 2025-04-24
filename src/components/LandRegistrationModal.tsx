
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface LandRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitProperty: (property: any) => void;
}

const initialState = {
  title: "",
  location: "",
  area: "",
  price: "",
  soilType: "",
  waterSource: "",
  description: "",
  ownerName: "",
  phone: "",
  email: "",
};

const LandRegistrationModal = ({ isOpen, onClose, onSubmitProperty }: LandRegistrationModalProps) => {
  const [form, setForm] = useState(initialState);

  // Responsive size for card
  const cardSize = "max-w-md w-full";

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
  };

  const handleSelect = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prop = {
      id: Date.now(), // simple unique ID
      title: form.title,
      location: form.location,
      price: Number(form.price),
      acres: Number(form.area),
      leaseTerms: "Custom terms",
      soilType: form.soilType,
      waterSource: form.waterSource,
      facilities: [],
      preferredCrops: [],
      owner: {
        name: form.ownerName,
        profession: "", // Optionally collect "profession"
      },
      description: form.description,
      phone: form.phone,
      email: form.email,
      thumbnail: "",
    };
    onSubmitProperty(prop);
    setForm(initialState);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-urban-green-800 mb-4">Register Your Land</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700">Property Title*</Label>
            <Input 
              id="title" 
              value={form.title} 
              onChange={handleInput} 
              className="border-urban-green-200 focus:border-urban-green-400"
              placeholder="Enter property title"
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-700">Location*</Label>
            <Input 
              id="location" 
              value={form.location} 
              onChange={handleInput} 
              className="border-urban-green-200 focus:border-urban-green-400"
              placeholder="Enter property location"
              required 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="area" className="text-gray-700">Total Area (acres)*</Label>
              <Input 
                id="area" 
                type="number" 
                step="0.1" 
                min="0.1" 
                value={form.area} 
                onChange={handleInput}
                className="border-urban-green-200 focus:border-urban-green-400" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-gray-700">Asking Price (₹)*</Label>
              <Input 
                id="price" 
                type="number" 
                min="1000" 
                value={form.price} 
                onChange={handleInput}
                className="border-urban-green-200 focus:border-urban-green-400" 
                required 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="soilType" className="text-gray-700">Soil Type*</Label>
              <Select onValueChange={(v) => handleSelect("soilType", v)} value={form.soilType}>
                <SelectTrigger id="soilType" className="border-urban-green-200">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Black Cotton">Black Cotton</SelectItem>
                  <SelectItem value="Red Soil">Red Soil</SelectItem>
                  <SelectItem value="Alluvial">Alluvial</SelectItem>
                  <SelectItem value="Laterite">Laterite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="waterSource" className="text-gray-700">Water Source*</Label>
              <Select onValueChange={(v) => handleSelect("waterSource", v)} value={form.waterSource}>
                <SelectTrigger id="waterSource" className="border-urban-green-200">
                  <SelectValue placeholder="Select water source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Borewell">Borewell</SelectItem>
                  <SelectItem value="Canal">Canal</SelectItem>
                  <SelectItem value="River Nearby">River Nearby</SelectItem>
                  <SelectItem value="Rain-dependent">Rain-dependent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700">Property Description*</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={handleInput}
              className="min-h-[80px] border-urban-green-200 focus:border-urban-green-400"
              placeholder="Describe your property..."
              required
            />
          </div>
          <div className="pt-4 border-t">
            <h3 className="font-medium text-gray-700 mb-4">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ownerName" className="text-gray-700">Owner Name*</Label>
                <Input 
                  id="ownerName" 
                  value={form.ownerName} 
                  onChange={handleInput}
                  className="border-urban-green-200 focus:border-urban-green-400"
                  placeholder="Enter your name"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">Phone Number*</Label>
                <Input 
                  id="phone" 
                  value={form.phone} 
                  onChange={handleInput}
                  className="border-urban-green-200 focus:border-urban-green-400"
                  placeholder="Enter phone number"
                  required 
                />
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="email" className="text-gray-700">Email Address*</Label>
              <Input 
                id="email" 
                type="email" 
                value={form.email} 
                onChange={handleInput}
                className="border-urban-green-200 focus:border-urban-green-400"
                placeholder="Enter email address"
                required 
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-urban-green-200 text-urban-green-700 hover:bg-urban-green-50"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-urban-green-600 hover:bg-urban-green-700 text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LandRegistrationModal;
