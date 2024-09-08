'use client'

import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import UserTable from "./user-table";


export default function Home() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push('/jogadores/novo');
  };

  return (
    <Box width={"95%"} margin={"auto"} >
      <Stack padding={"20px 0"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontWeight="600" fontSize={"20px"}>Jogadores</Typography>
        <Button onClick={handleRedirect} variant="contained" startIcon={<AddIcon />}>Adicionar jogador</Button>
      </Stack>
      <Stack alignItems={"center"}>
        <UserTable />
      </Stack >
    </Box >
  );
}
