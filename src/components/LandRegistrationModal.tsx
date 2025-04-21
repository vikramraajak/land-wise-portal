
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
      <DialogContent className={`${cardSize} overflow-y-auto max-h-[80vh] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border-0`}>
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Register Your Land</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div className="space-y-2">
            <Label htmlFor="title">Property Title*</Label>
            <Input id="title" value={form.title} onChange={handleInput} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location*</Label>
            <Input id="location" value={form.location} onChange={handleInput} required />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="area">Total Area (acres)*</Label>
              <Input id="area" type="number" step="0.1" min="0.1" value={form.area} onChange={handleInput} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Asking Price (₹)*</Label>
              <Input id="price" type="number" min="1000" value={form.price} onChange={handleInput} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="soilType">Soil Type*</Label>
              <Select onValueChange={(v) => handleSelect("soilType", v)} value={form.soilType}>
                <SelectTrigger id="soilType">
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
              <Label htmlFor="waterSource">Water Source*</Label>
              <Select onValueChange={(v) => handleSelect("waterSource", v)} value={form.waterSource}>
                <SelectTrigger id="waterSource">
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
            <Label htmlFor="description">Property Description*</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={handleInput}
              className="min-h-[80px]"
              required
            />
          </div>
          <div className="pt-2 border-t">
            <h3 className="font-medium mb-2">Contact Information</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Owner Name*</Label>
              <Input id="ownerName" value={form.ownerName} onChange={handleInput} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input id="phone" value={form.phone} onChange={handleInput} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address*</Label>
            <Input id="email" type="email" value={form.email} onChange={handleInput} required />
          </div>
          <div className="flex justify-end space-x-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-urban-green-500 hover:bg-urban-green-600">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LandRegistrationModal;
