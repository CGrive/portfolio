import { Typography, Stack, Chip, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import type { SectionKey } from "../App";

const roles = [
  "Computer Scientist",
  "AI & Research Enthusiast",
  "Programming Enthusiast",
];

export default function Home({ goTo }: { goTo: (s: SectionKey) => void }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const current = roles[index];
    if (char < current.length) {
      const t = setTimeout(() => {
        setText(current.slice(0, char + 1));
        setChar(c => c + 1);
      }, 60);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setChar(0);
        setIndex((index + 1) % roles.length);
        setText("");
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [char, index]);

  return (
    <Box width="100%" display="flex" justifyContent="center" px={{ xs: 2, sm: 3 }}>
      <Stack
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        textAlign="center"
        maxWidth={{ xs: 320, sm: 500, md: 760 }}
        width="100%"
      >
        {/* Name */}
        <Typography
          variant="h3"
          fontWeight={600}
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
        >
          I'm Shani
        </Typography>

        {/* Typing animation */}
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ minHeight: 32, fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
        >
          {text}
        </Typography>

        {/* Description */}
        <Typography
          color="text.secondary"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
        >
          I’m a computer science student focused on artificial intelligence, research,
          and building software through programming and experimentation.
        </Typography>

        {/* Chips */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1 }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Chip label="Computer Science" size="small" />
          <Chip label="Artificial Intelligence" size="small" />
          <Chip label="Research" size="small" />
        </Stack>

        {/* CTAs */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          mt={1}
          width="100%"
          justifyContent="center"
        >
          <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Button variant="contained" size="large" onClick={() => goTo("projects")} fullWidth>
              View Projects
            </Button>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Button variant="outlined" size="large" onClick={() => goTo("profile")} fullWidth>
              Learn More
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
