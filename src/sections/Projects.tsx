import { Typography, Stack } from "@mui/material";

import { Card, CardContent, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <Stack spacing={4} alignItems="center" textAlign="center">
      <Typography variant="h4">Work & Research</Typography>

      <Card sx={{ maxWidth: 420, bgcolor: "#132531" }}>
        <CardContent>
          <WorkOutlineIcon fontSize="large" color="primary" />
          <Typography variant="h6" mt={1}>Academic & Engineering Work</Typography>
          <Typography color="text.secondary" mt={1}>
            Selected projects and research-oriented explorations.
          </Typography>
          <Button sx={{ mt: 2 }} variant="outlined" onClick={() => setOpen(true)}>
            View Details
          </Button>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Projects & Research</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This space highlights software systems, research prototypes,
            and experiments focused on architecture, interaction design,
            and long-term maintainability.
          </Typography>
          <Typography color="text.secondary">
            GitHub: https://github.com/cgrive
          </Typography>
        </DialogContent>
      </Dialog>
    </Stack>
  );
}