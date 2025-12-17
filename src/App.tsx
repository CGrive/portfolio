import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import DynamicIsland from "./components/DynamicIsland";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import {  } from "react";
export type SectionKey = "home" | "profile" | "education" | "projects";

const sections: SectionKey[] = ["home", "profile", "education", "projects"];

export default function App() {
  const [active, setActive] = useState<SectionKey>("home");
  const [direction, setDirection] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = (next: SectionKey) => {
    const currentIndex = sections.indexOf(active);
    const nextIndex = sections.indexOf(next);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActive(next);
  };

  const renderSection = () => {
    switch (active) {
      case "profile":
        return <Profile />;
      case "education":
        return <Education />;
      case "projects":
        return <Projects />;
      default:
        return <Home goTo={navigate} />;
    }
  };

  const handlers = useSwipeable(
    isMobile
      ? {
          onSwipedLeft: () => {
            const i = sections.indexOf(active);
            if (i < sections.length - 1) navigate(sections[i + 1]);
          },
          onSwipedRight: () => {
            const i = sections.indexOf(active);
            if (i > 0) navigate(sections[i - 1]);
          },
          trackMouse: false,
        }
      : {}
  );

  return (
    <>
      <DynamicIsland active={active} setActive={navigate} />

      <Box
        {...handlers}
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            width: "90vw",
            maxWidth: 1100,
            minHeight: { xs: "60vh", md: "65vh" },
            bgcolor: "background.paper",
            p: { xs: 3, md: 5 },
            boxShadow: "0 30px 90px rgba(0,0,0,0.5)",
            borderRadius: 5,
            overflow: "hidden", // 👈 important for slide
          }}
        >
          {isMobile ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ x: direction * 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 60, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          ) : (
            renderSection()
          )}
        </Box>
      </Box>
    </>
  );
}
