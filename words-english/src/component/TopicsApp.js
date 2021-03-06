import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Select } from "@mui/material";
import { useState } from "react";
import ModalSelect from "./ModalSelect";
import ModalWrite from "./ModalWrite";
import ModalListening from "./ModalListening";


export default function TopicsApp({ img, title, description, id }) {
  const [stateModal, setStateModal] = useState({
    Select: false,
    Listening: false,
    Write: false,
  });
/*
si hago click en start dentro de la card, debe llevarme a Select, 
luego a Listening y finalmente a write
 */
  const closeFn = () => {
    switch (true) {
      case stateModal.Select:
        setStateModal({ ...stateModal, Select: false, Listening: true });
        break;
      case stateModal.Listening:
        setStateModal({ ...stateModal, Listening: false, Write: true });
        break;
      case stateModal.Write:
        setStateModal({ ...stateModal, Write: false });
        break;
      default:
        setStateModal({
          Select: false,
          Listening: false,
          Write: false,
        });
        break;
    }
  };

  const onClickStart = () => {
    setStateModal({ ...stateModal, Select: true });
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography component={"p"} variant="h5">
            {title}
          </Typography>
          <Typography component={"p"} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained"  onClick={onClickStart}>
          Start 
        </Button>
        {stateModal.Listening && (
          <ModalListening id closeFn={closeFn} open={stateModal.Listening} />
        )}
        {stateModal.Select && (
          <ModalSelect id closeFn={closeFn} open={stateModal.Select} />
        )}
        {stateModal.Write && (
          <ModalWrite id closeFn={closeFn} open={stateModal.Write} />
        )}
      </CardActions>
    </Card>
  );
}
