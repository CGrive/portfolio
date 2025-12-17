import { Typography, Stack, Chip } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center" maxWidth={720}>
      <Typography variant="h2">Shani</Typography>
      <Typography color="text.secondary">
        A focused, state-driven portfolio designed as an interaction surface —
        not a scroll document.
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="Computer Science" />
        <Chip label="Systems" />
        <Chip label="Research" />
      </Stack>
    </Stack>
  );
}