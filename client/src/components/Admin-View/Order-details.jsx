import React from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";

function AdminOrderDetailsView() {
  return (
    <div className="grid gap-2">
      <DialogContent className="sm:max-w-[600px]">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>12345</Label>
          </div>
        </div>
      </DialogContent>
    </div>
  );
}

export default AdminOrderDetailsView;
