import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "./Pagination";

import { formatAddress, formatDate } from "../utils/helpers";
import { useState } from "react";

function createData(id, name, address, quantity, cost, date) {
  return { id, name, address, quantity, cost, date };
}

const BasicTable = ({ data, user }) => {
  const rows = data.map((item) => {
    const { id, name, address, orderPrice, orderTime, cart } = item;
    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const date = formatDate(orderTime);
    const place =
      address === null ? " pickup at the store" : formatAddress(address);

    return createData(id, name, place, totalQuantity, orderPrice, date);
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10);

  // get current orders
  const indexOfLastRecipe = currentPage * ordersPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - ordersPerPage;
  const currentOrders = rows.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePaginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };
  const { id } = user;
  const handleDelete = async () => {
    await deleteOrders();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm">
          Total order: <strong>{data.length}</strong>
        </p>
        <button
          className="py-1 px-2 rounded-full bg-brownish-1 text-white text-sm"
          onClick={handleDelete}
        >
          Clear Orders
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentOrders.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">
                  <span className="font-semibold">R</span>
                  {row.cost}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        totalOrders={data.length}
        pageSize={ordersPerPage}
        paginate={handlePaginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BasicTable;
