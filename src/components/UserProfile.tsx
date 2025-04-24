
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { user } from "lucide-react";

const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 bg-urban-green-100 rounded-full flex items-center justify-center">
          <user className="w-6 h-6 text-urban-green-600" />
        </div>
        <div>
          <CardTitle className="text-xl">Welcome, {userData.name || "User"}</CardTitle>
          <p className="text-sm text-gray-500">{userData.email}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div>
            <span className="text-sm font-medium text-gray-500">Category:</span>
            <span className="ml-2">{userData.category || "Not specified"}</span>
          </div>
          {userData.mobile && (
            <div>
              <span className="text-sm font-medium text-gray-500">Phone:</span>
              <span className="ml-2">{userData.mobile}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
