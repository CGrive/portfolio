import {
  Typography,
  Stack,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Chip,
  Box,
} from "@mui/material";
import { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";

// ---- Types ----
type WorkItem = {
  id: string;
  kind: "project" | "paper";
  title: string;
  summary: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

// ---- Data ----
const WORK: WorkItem[] = [
  {
    id: "dyn-island-portfolio",
    kind: "project",
    title: "Dynamic Island Portfolio",
    summary: "State-driven portfolio UI inspired by control surfaces.",
    description:
      "A React + TypeScript application that treats navigation as a control surface. Focuses on state, keyboard-first UX, and restrained motion rather than scroll-based pages.",
    tags: ["React", "TypeScript", "MUI", "UX"],
    links: [{ label: "GitHub", href: "https://github.com/cgrive" }],
  },
  {
    id: "systems-notes",
    kind: "paper",
    title: "Notes on Systems Thinking",
    summary: "Exploratory writing on systems, constraints, and interfaces.",
    description:
      "A collection of research-style notes exploring how constraints shape software architecture, interface design, and long-term maintainability.",
    tags: ["Systems", "Research"],
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = WORK.find((w) => w.id === openId) || null;

  return (
    <Box width="100%" display="flex" justifyContent="center" px={{ xs: 2, sm: 3 }}>
      <Stack spacing={{ xs: 3, sm: 4 }} maxWidth={900} width="100%" textAlign="center">
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
        >
          Work & Research
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          flexWrap="wrap"
        >
          {WORK.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: { xs: "100%", sm: 360 },
                maxWidth: "100%",
              }}
            >
              <CardContent>
                <Stack spacing={1} alignItems="center">
                  {item.kind === "project" ? (
                    <CodeIcon fontSize="small" color="primary" />
                  ) : (
                    <ArticleIcon fontSize="small" color="secondary" />
                  )}

                  <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                    {item.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
                  >
                    {item.summary}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    mt={1}
                    flexWrap="wrap"
                    justifyContent="center"
                  >
                    {item.tags.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>

                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ mt: 1 }}
                    onClick={() => setOpenId(item.id)}
                    fullWidth={{ xs: true, sm: false } as any} // wrapped in "any" for TS; optional: can remove and use Box wrapper
                  >
                    Details
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Dialog open={Boolean(active)} onClose={() => setOpenId(null)} maxWidth="sm" fullWidth>
          {active && (
            <>
              <DialogTitle>
                <Stack spacing={0.5}>
                  <Typography fontWeight={600}>{active.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {active.kind === "project" ? "Project" : "Research / Writing"}
                  </Typography>
                </Stack>
              </DialogTitle>

              <DialogContent dividers>
                <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  {active.description}
                </Typography>

                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {active.tags.map((t) => (
                    <Chip key={t} label={t} size="small" />
                  ))}
                </Stack>

                {active.links && (
                  <Stack direction="row" spacing={2} mt={3} flexWrap="wrap">
                    {active.links.map((l) => (
                      <Button
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        variant="text"
                        sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
                      >
                        {l.label}
                      </Button>
                    ))}
                  </Stack>
                )}
              </DialogContent>
            </>
          )}
        </Dialog>
      </Stack>
    </Box>
  );
}
