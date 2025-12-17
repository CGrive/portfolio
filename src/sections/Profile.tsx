import { Typography, Stack, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MailIcon from "@mui/icons-material/Mail";

export default function Profile() {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center" maxWidth={760}>
      <Typography variant="h4">Profile</Typography>
      <Typography color="text.secondary">
        Computer Science student focused on systems thinking, research-driven
        engineering, and intentional interface design.
      </Typography>
      <Stack direction="row" spacing={1}>
        <Tooltip title="GitHub"><IconButton href="https://github.com/cgrive" target="_blank"><GitHubIcon /></IconButton></Tooltip>
        <Tooltip title="LinkedIn"><IconButton href="https://www.linkedin.com/in/shanimishra" target="_blank"><LinkedInIcon /></IconButton></Tooltip>
        <Tooltip title="X"><IconButton href="https://x.com/glassphyber" target="_blank"><XIcon /></IconButton></Tooltip>
        <Tooltip title="Email"><IconButton href="mailto:portfolio.briskly014@passinbox.com"><MailIcon /></IconButton></Tooltip>
      </Stack>
    </Stack>
  );
}
