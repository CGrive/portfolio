import { Typography, Stack, Paper, Box, Link, Tooltip } from "@mui/material";

export default function Education() {
  return (
    <Box width="100%" display="flex" justifyContent="center" px={{ xs: 2, sm: 3 }}>
      <Stack
        spacing={{ xs: 2, sm: 3 }}
        maxWidth={{ xs: 320, sm: 500, md: 760 }}
        width="100%"
      >
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
        >
          Education
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: { xs: 1, sm: 1.5 },
            borderLeft: "3px solid",
            borderLeftColor: "primary.main",
          }}
        >
          <Stack spacing={0.5}>
            {/* Degree */}
            <Typography
              fontWeight={600}
              sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" } }}
            >
              B.Sc. Computer Science
            </Typography>

            {/* College & University */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }}
            >
              <Tooltip title="Shree L.R. Tiwari Degree College" arrow>
                <Link
                  href="https://slrtdc.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="inherit"
                  sx={{ fontWeight: 500 }}
                >
                  SLRTDC
                </Link>
              </Tooltip>
              , affiliated with&nbsp;
              <Link
                href="https://www.mu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
                sx={{ fontWeight: 500 }}
              >
                University of Mumbai
              </Link>
            </Typography>

            {/* Coursework */}
            <Typography
              variant="body2"
              color="text.secondary"
              mt={0.5}
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" } }}
            >
              Relevant coursework: Artificial Intelligence, Algorithms, Data Structures,
              Programming Languages, Databases
            </Typography>

            {/* Duration */}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.85rem" } }}
            >
              2021 – Present
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
