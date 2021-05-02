import Modal from "components/Modal/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import useFetchAnimeDetail from "./useFetchAnimeDetail";
import { ModalContainer, InfoWrapper } from "./AnimeHomePage.style";
import { Typography } from "@material-ui/core";

interface Props {
  open: boolean;
  onClose: () => void;
  id: number;
}

export default function AnimeModal({ open, onClose, id }: Props) {
  const { data, isFetching } = useFetchAnimeDetail(id);

  if (!data || isFetching) {
    return null;
  }

  const { title, synopsis, image_url, title_japanese } = data;

  return (
    <Modal open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <InfoWrapper>
          <Typography variant="caption">{title_japanese}</Typography>
        </InfoWrapper>
        <ModalContainer>
          <img src={image_url} alt={title} />
          <DialogContentText variant="subtitle2">{synopsis}</DialogContentText>
        </ModalContainer>
      </DialogContent>
    </Modal>
  );
}
