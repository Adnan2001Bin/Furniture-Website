import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import AdminOrderDetailsView from "./Order-details";

function AdminOrdersView() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>Order Price</TableHead>
            <TableHead>
              <span className="sr-only">Details</span>
            </TableHead>
          </TableRow>

          <TableBody>
            <TableRow>
              <TableCell>12345</TableCell>
              <TableCell>12/12/2024</TableCell>
              <TableCell>In Process</TableCell>
              <TableCell>$1000</TableCell>
              <TableCell>
                <Dialog
                  open={openDetailsDialog}
                  onOpenChange={() => {
                    setOpenDetailsDialog(false);
                    dispatch(resetOrderDetails());
                  }}
                >
                  <Button
                    onClick={() => setOpenDetailsDialog(true)}
                  >
                    View Details
                  </Button>
                  <AdminOrderDetailsView  />
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AdminOrdersView;
