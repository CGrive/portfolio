import { Typography, Stack, Paper } from "@mui/material";

export default function Education() {
  return (
    <Stack spacing={3} maxWidth={760}>
      <Typography variant="h4">Education</Typography>
      <Paper sx={{ p: 3 }} variant="outlined">
        <Typography fontWeight={600}>B.Sc. Computer Science</Typography>
        <Typography color="text.secondary">
          Core focus on algorithms, systems, programming languages,
          and theoretical computer science.
        </Typography>
      </Paper>
    </Stack>
  );
}
