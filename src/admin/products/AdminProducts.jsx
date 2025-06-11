import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { Button } from "@mui/material";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        <Button
          variant="contained"
          component={Link}
          to="/dashboard/add-product"
          startIcon={<PlusCircle className="h-4 w-4" />}
        >
          Add Product
        </Button>
      </div>

      <TableContainer component={Paper} sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "4px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Category</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                Price
              </TableCell>
              <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }}>
                Status
              </TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="truncate max-w-[200px]">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }}>
                  <div className="flex gap-2">
                    {product.featured && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                    {product.new && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="text" size="small">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="text" size="small">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminProducts;