import React from "react";
import { useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { EventManagerUrl } from "../../common/constants";
import{parseCookies} from "nookies";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];



  function EventList({eventList,setEventList}){

    useEffect(()=>{
        handleGetEventList(setEventList)
      },[setEventList]);

      return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom de l'événement</TableCell>
              <TableCell align="left">Description de l'événement</TableCell>
              <TableCell align="left">Date/Heure de début</TableCell>
              <TableCell align="left">Date/Heure de fin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventList.map((row,idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
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

function handleGetEventList(setEventList) {
    const cookies = parseCookies();
    const headers = {
           'Content-Type': "application/json",
           'Authorization': `Bearer ${cookies['USER_TOKEN']}`,
    };
    axios.get(EventManagerUrl,{headers})
      .then(function (response) {
        setEventList(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export default EventList;