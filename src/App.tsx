import { Box } from "@mui/material";
import { useState } from "react";
import DynamicIsland from "./components/DynamicIsland";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Links from "./sections/Links";

export type SectionKey = "home" | "profile" | "education" | "projects";

export default function App() {
  const [active, setActive] = useState<SectionKey>("home");

  const renderSection = () => {
    switch (active) {
      case "profile": return <Profile />;
      case "education": return <Education />;
      case "projects": return <Projects />;
      default: return <Home />;
    }
  };

  return (
    <>
      <DynamicIsland active={active} setActive={setActive} />

      {/* Background */}
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Focus Surface: consistent size across sections */}
        <Box
          sx={{
            width: "90vw",
            maxWidth: 1100,
            minHeight: { xs: "60vh", md: "65vh" },
            bgcolor: "background.paper",
            p: { xs: 3, md: 5 },
            boxShadow: "0 30px 90px rgba(0,0,0,0.5)",
            borderRadius: 5,
            transition: "all .25s ease",
          }}
        >
          {renderSection()}
        </Box>
      </Box>
    </>
  );
}