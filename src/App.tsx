import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import DynamicIsland from "./components/DynamicIsland";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import {type Variants } from "framer-motion";
export type SectionKey = "home" | "profile" | "education" | "projects";

const sections: SectionKey[] = ["home", "profile", "education", "projects"];
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction * 80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: -direction * 80,
    opacity: 0,
  }),
};
export default function App() {
  const [active, setActive] = useState<SectionKey>("home");
  const [direction, setDirection] = useState<1 | -1>(1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ✅ Safe navigation (edge-aware)
  const navigateByIndex = (nextIndex: number) => {
    const currentIndex = sections.indexOf(active);

    // 🚫 Block edge overflow
    if (nextIndex < 0 || nextIndex >= sections.length) return;

    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActive(sections[nextIndex]);
  };

  const navigate = (next: SectionKey) => {
    navigateByIndex(sections.indexOf(next));
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
            navigateByIndex(sections.indexOf(active) + 1);
          },
          onSwipedRight: () => {
            navigateByIndex(sections.indexOf(active) - 1);
          },
          preventScrollOnSwipe: true,
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
            overflow: "hidden",
          }}
        >
          {isMobile ? (
<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={active}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
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
