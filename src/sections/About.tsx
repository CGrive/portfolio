import { Typography, Stack } from "@mui/material";

import * as material from "@mui/material";

export default function About() {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center" maxWidth={760}>
      <Typography variant="h4">About</Typography>
      <Typography color="text.secondary">
        I approach software as a system: clarity of thought,
        strong fundamentals, and intentional design choices.
        I care deeply about aesthetics, interaction, and long-term maintainability.
      </Typography>
      <material.Link href="mailto:portfolio.briskly014@passinbox.com">
        portfolio.briskly014@passinbox.com
      </material.Link>
    </Stack>
  );
}