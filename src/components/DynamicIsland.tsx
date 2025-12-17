import { Box, Stack, IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useEffect, type JSX } from "react";
import type { SectionKey } from "../App";

const actions: { id: SectionKey; label: string; icon: JSX.Element }[] = [
  { id: "home", label: "Home", icon: <HomeIcon /> },
  { id: "profile", label: "Profile", icon: <PersonIcon /> },
  { id: "education", label: "Education", icon: <SchoolIcon /> },
  { id: "projects", label: "Work", icon: <WorkIcon /> },
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
      // Ignore shortcuts when typing or interacting with controls
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      const map: Record<string, SectionKey> = {
        "1": "home",
        "2": "profile",
        "3": "education",
        "4": "projects",
      };

      if (map[e.key]) {
        e.preventDefault();
        setActive(map[e.key]);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setActive]);

  return (
    <Box
      role="navigation"
      aria-label="Section navigation"
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
      <Stack direction="row" spacing={{ xs: 0.5, sm: 1, md: 1.5 }}>
        {actions.map((a, i) => {
          const isActive = active === a.id;

          return (
            <Tooltip
              key={a.id}
              title={`${a.label} (${i + 1})`}
              arrow
            >
              <IconButton
                aria-current={isActive ? "page" : undefined}
                color={isActive ? "primary" : "default"}
                onClick={() => setActive(a.id)}
                sx={{
                  borderRadius: "50%",
                  outline: isActive
                    ? "2px solid"
                    : "2px solid transparent",
                  outlineColor: isActive
                    ? "primary.main"
                    : "transparent",
                    fontSize: { xs: 20, sm: 24, md: 28 }
                }}
              >
                {a.icon}
              </IconButton>
            </Tooltip>
          );
        })}
      </Stack>
    </Box>
  );
}
