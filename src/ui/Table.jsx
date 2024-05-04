import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLoaderData } from "react-router-dom";
import { getOrders } from "../services/apiOrder";
import { formatAddress, formatDate } from "../utils/helpers";

function createData(id, name, address, quantity, cost, date) {
  return { id, name, address, quantity, cost, date };
}

// const rows1 = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const BasicTable = () => {
  const data = useLoaderData();
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

  return (
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
          {rows.map((row) => (
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
                <span className="font-bold">R</span>
                {row.cost}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const loader = async () => {
  const data = await getOrders();

  return data;
};

export default BasicTable;
