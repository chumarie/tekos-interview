import Modal from "components/Modal/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Skeleton from "@material-ui/lab/Skeleton";

import useFetchAnimeDetail from "./useFetchAnimeDetail";

interface Props {
  open: boolean;
  onClose: () => void;
  id: number;
}

export default function AnimeModal({ open, onClose, id }: Props) {
  const { data, isFetching } = useFetchAnimeDetail(id);

  if (!data || isFetching) {
    return <Skeleton variant="rect" height={500} />;
  }

  const { title, synopsis } = data;

  return (
    <Modal open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {synopsis}
        </DialogContentText>
      </DialogContent>
    </Modal>
  );
}
