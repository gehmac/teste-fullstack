'use client'

import useCreatePlayerApi from "@/api/use-create-player-api";
import { Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PLayers() {

  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [team, setTeam] = useState<{ id: string, value: string } | undefined>(undefined);

  const { createPlayer } = useCreatePlayerApi()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (![age, name, team?.id, team?.value].every(Boolean)) {
      createPlayer({ age: age!, name, teamId: "85cbad64-eaf7-459f-b040-e769b30b98b3" }).then().catch((error) => {
        console.log('error: ', error);
      })
    }

  };

  return (
    <Box sx={{ padding: 2, width: { xs: '90%', sm: '70%', md: '50%' }, maxWidth: "700px", margin: '0 auto' }}>
      <Button onClick={() => router.back()} variant="outlined" sx={{ marginBottom: 2 }}>
        &lt; Voltar
      </Button>
      <Typography variant="h5" gutterBottom>
        Inserir jogador
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction={'row'} spacing={1}>

          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Idade"
            variant="outlined"
            type="number"
            fullWidth
            margin="normal"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </Stack>
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Time</InputLabel>
          <Select
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            label="Time"
          >
            <MenuItem value="">
              <em>Selecione um time</em>
            </MenuItem>
            <MenuItem value="time1">Time 1</MenuItem>
            <MenuItem value="time2">Time 2</MenuItem>
            <MenuItem value="time3">Time 3</MenuItem>
            {/* Adicione mais opções de times conforme necessário */}
          </Select>
        </FormControl>
        <Stack alignItems={'end'}>

          <Button type="submit" size="large" variant="contained" color="primary" sx={{ marginTop: 2, }}>
            Salvar
          </Button>
        </Stack>
      </form>
    </Box>
  );

};
