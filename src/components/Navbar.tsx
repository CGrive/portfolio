import { AppBar, Toolbar, Button, Stack, Box } from "@mui/material";

const sections = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Links", id: "links" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(13,24,33,0.7)",
      }}
    >
      <Toolbar>
        <Box flexGrow={1} fontWeight={600}>Portfolio</Box>
        <Stack direction="row" spacing={1}>
          {sections.map(s => (
            <Button
              key={s.id}
              color="inherit"
              onClick={() =>
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {s.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}