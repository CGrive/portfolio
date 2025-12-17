import { Typography, Stack, Link } from "@mui/material";

export default function Contact() {
  return (
    <Stack spacing={2} maxWidth={760}>
      <Typography variant="h4">Contact</Typography>
      <Typography color="text.secondary">
        Open to collaboration, research discussions, and engineering opportunities.
      </Typography>
      <Link href="mailto:portfolio.briskly014@passinbox.com">
        portfolio.briskly014@passinbox.com
      </Link>
    </Stack>
  );
}