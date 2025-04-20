
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LandRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandRegistrationModal = ({ isOpen, onClose }: LandRegistrationModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Land registration submitted successfully!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl">Register Your Land</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title">Property Title*</Label>
            <Input id="title" placeholder="Enter property title" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location*</Label>
            <Input id="location" placeholder="Enter location" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="area">Total Area (in acres)*</Label>
              <Input id="area" type="number" step="0.1" min="0.1" placeholder="Enter area" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Asking Price (₹)*</Label>
              <Input id="price" type="number" min="1000" placeholder="Enter amount" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="soil-type">Soil Type*</Label>
              <Select>
                <SelectTrigger id="soil-type">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="black-cotton">Black Cotton</SelectItem>
                  <SelectItem value="red-soil">Red Soil</SelectItem>
                  <SelectItem value="alluvial">Alluvial</SelectItem>
                  <SelectItem value="laterite">Laterite</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="water-source">Water Source*</Label>
              <Select>
                <SelectTrigger id="water-source">
                  <SelectValue placeholder="Select water source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="borewell">Borewell</SelectItem>
                  <SelectItem value="canal">Canal</SelectItem>
                  <SelectItem value="river">River Nearby</SelectItem>
                  <SelectItem value="rain">Rain-dependent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Property Description*</Label>
            <Textarea
              id="description"
              placeholder="Describe your property, facilities, preferred crops, etc."
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-3">Contact Information</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="owner-name">Owner Name*</Label>
              <Input id="owner-name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input id="phone" placeholder="Enter phone number" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address*</Label>
            <Input id="email" type="email" placeholder="Enter email address" required />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
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
