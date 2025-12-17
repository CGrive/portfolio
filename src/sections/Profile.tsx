import { Typography, Stack, IconButton, Tooltip, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MailIcon from "@mui/icons-material/Mail";

export default function Profile() {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Stack
        spacing={3}
        alignItems="center"
        textAlign="center"
        maxWidth={760}
        width="100%"
      >
        <Typography variant="h4" fontWeight={600}>
          Profile
        </Typography>

        <Typography color="text.secondary">
I’m a computer science student interested in artificial intelligence,
research, and programming. I enjoy working close to the fundamentals -
algorithms, data structures, mathematical ideas, and code.
 </Typography>
  <Typography color="text.secondary">
I like learning by building, reading research papers, and experimenting
with ideas to see how they behave in practice.
        </Typography>
        <Typography color="text.secondary">
            My current interests include machine learning, theoretical aspects of AI,
and understanding how computational ideas emerge from mathematics
and logic.

        </Typography>

      <Stack spacing={1} alignItems="center">
  <Typography variant="caption" color="text.secondary">
    Find me on
  </Typography>

  <Stack direction="row" spacing={1}>
    <Tooltip title="GitHub" arrow>
<IconButton
  href="https://github.com/cgrive"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    transition: "transform 0.15s ease",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  }}
>
  <GitHubIcon />
</IconButton>
    </Tooltip>

    <Tooltip title="LinkedIn" arrow>
      <IconButton
        href="https://www.linkedin.com/in/shanimishra"
        target="_blank"
        rel="noopener noreferrer"
          sx={{
    transition: "transform 0.15s ease",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  }}
      >
        <LinkedInIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="X" arrow>
      <IconButton
        href="https://x.com/glassphyber"
        target="_blank"
        rel="noopener noreferrer"
          sx={{
    transition: "transform 0.15s ease",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  }}
      >
        <XIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="Email" arrow>
      <IconButton   sx={{
    transition: "transform 0.15s ease",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  }}
  href="mailto:portfolio.briskly014@passinbox.com">
        <MailIcon />
      </IconButton>
    </Tooltip>
  </Stack>
</Stack>

      </Stack>
    </Box>
  );
}
