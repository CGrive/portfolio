import { Box, Stack, IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useEffect, type JSX } from "react";
import type { SectionKey } from "../App";

const actions: { id: SectionKey; icon: JSX.Element; label: string }[] = [
  { id: "home", icon: <HomeIcon />, label: "Home" },
  { id: "profile", icon: <PersonIcon />, label: "Profile" },
  { id: "education", icon: <SchoolIcon />, label: "Education" },
  { id: "projects", icon: <WorkIcon />, label: "Work" },
];

export default function DynamicIsland({
  active,
  setActive,
}: {
  active: SectionKey;
  setActive: (s: SectionKey) => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const map: Record<string, SectionKey> = {
        "1": "home",
        "2": "profile",
        "3": "education",
        "4": "projects",
      };
      if (map[e.key]) setActive(map[e.key]);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setActive]);

  return (
    <Box
      position="fixed"
      top={18}
      left="50%"
      sx={{
        transform: "translateX(-50%)",
        zIndex: 2000,
        bgcolor: "background.paper",
        borderRadius: 999,
        px: 1.5,
        py: 0.8,
        boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
      }}
    >
      <Stack direction="row" spacing={1}>
        {actions.map((a, i) => (
          <Tooltip key={a.id} title={`${a.label} (${i + 1})`} arrow>
            <IconButton
              color={active === a.id ? "primary" : "default"}
              onClick={() => setActive(a.id)}
            >
              {a.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
}
