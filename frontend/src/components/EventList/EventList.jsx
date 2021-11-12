import React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { EventManagerUrl } from "../../common/constants";
import { parseCookies } from "nookies";

function EventList({ eventList, handleEventList }) {
    
  useEffect(() => {
    const cookies = parseCookies();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies["USER_TOKEN"]}`,
    };
    axios
      .get(EventManagerUrl, { headers })
      .then(function (response) {
        handleEventList(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead data-testid="eventList-tableHead">
          <TableRow>
            <TableCell>Nom de l'événement</TableCell>
            <TableCell align="left">Description de l'événement</TableCell>
            <TableCell align="left">Date/Heure de début</TableCell>
            <TableCell align="left">Date/Heure de fin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="eventList-tablebody">
          {eventList.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell data-testid="eventList-tableCell" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.startDate}</TableCell>
              <TableCell align="left">{row.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EventList;
