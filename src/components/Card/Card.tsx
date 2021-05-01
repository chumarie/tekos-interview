import type { ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import MuiCard from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

interface Props {
  title: string;
  imgUrl: string;
  description: string;
  episodeCount: number;
  onDetailButtonClick: () => void;
}
export default function Card({
  title,
  imgUrl,
  description,
  episodeCount,
  onDetailButtonClick,
}: Props): ReactElement {
  const classes = useStyles();

  const subheader = `${episodeCount} épisodes`;
  return (
    <MuiCard className={classes.root}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <IconButton aria-label="settings" onClick={onDetailButtonClick}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia className={classes.media} image={imgUrl} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
