import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, Grid } from "@mui/material";

export default function ModalListening() {
  return (
    <Dialog open>
      <Box sx={{ p: 2 }}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Button variant="contained" startIcon={<VolumeUpIcon />}>
                Play sound
              </Button>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Button variant="contained">Option 1</Button>
            <Button variant="contained">Option 2</Button>
            <Button variant="contained">Option 3</Button>
            <Button variant="contained">Option 4</Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
}