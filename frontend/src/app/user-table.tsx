'use client'

import useListPlayersApi from "@/api/use-list-players-api";
import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import { Player } from "@/api/types/player";

function InfoHeaderTable(): JSX.Element {
  return (
    <TableHead>

      <TableRow>
        <TableCell style={{ width: '20%' }}>Id</TableCell>
        <TableCell align="left" style={{ width: '20%' }}>Nome</TableCell>
        <TableCell align="left" style={{ width: '30%' }}>Time</TableCell>
        <TableCell align="center" style={{ width: '10%' }}>Ações</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default function UserTable() {
  const { getAllPlayers } = useListPlayersApi()
  const [data, setData] = useState<Player[]>([])

  useEffect(() => {
    const fetchData = () => {
      getAllPlayers()
        .then(result => setData(result))
        .catch(error => console.error("Erro ao buscar jogadores:", error));
    };

    fetchData();
  }, [getAllPlayers]);

  return (
    <Box style={{ width: "100%", border: '0.1px solid gainsboro', borderRadius: '4px', overflow: 'hidden' }} >
      <Table  >
        <InfoHeaderTable />
        <TableBody>
          {data.map((it) => (
            <TableRow key={it.id}>
              <TableCell component="td" scope="row" align="left">{it.id}</TableCell>
              <TableCell align="left">{it.name}</TableCell>
              <TableCell align="left">{it.teamId}</TableCell>
              <TableCell align="center">
                <>
                  <Tooltip title="Editar" placement="top">
                    <IconButton aria-label="editar">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Deletar" placement="top">
                    <IconButton aria-label="deletar">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box >
  )
}


