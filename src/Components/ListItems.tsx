import React from "react";
import { Income } from "./IncomeWrapper";
import { Expense } from "./ExpenseWrapper";
import { IconButton, Table, Paper,TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type ListItemsProps = {
  items: Expense[] | Income[];
  handleDelete: (id: number) => void;
};

export default function ListItems({ items, handleDelete }: ListItemsProps) {
  return (
    <ul>

          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Type</TableCell> */}
                <TableCell>Source</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {handleSortArray(allTransactions).map((row) => ( */}
              {items.map((item) =>(
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor:
                      item.type === "expense" ? "#ff4c4c" : "#8FCE00",
                  }}
                >
                  {/* <TableCell component='th' scope='row'>
                    {item.type}
                  </TableCell> */}
                  <TableCell scope='row'>{item.source}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>     <IconButton
              aria-label="delete"
              onClick={()=>handleDelete(item.id)}
            >
              <DeleteIcon /></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      
    </ul>

  );
}

// have one transaction array , and then when click handle submit of income or expense, push the new item to new transaction 
// and then using transaction array to render 