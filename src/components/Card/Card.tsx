import type { ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GradeIcon from "@material-ui/icons/Grade";

import { ItemCard } from "./Card.style";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  })
);

interface Props {
  title: string;
  imgUrl: string;
  description: string;
  episodeCount: number;
  score: number;
  onDetailButtonClick: () => void;
}
export default function Card({
  title,
  imgUrl,
  description,
  episodeCount,
  score,
  onDetailButtonClick,
}: Props): ReactElement {
  const classes = useStyles();

  const subheader = `${episodeCount} épisodes`;
  return (
    <ItemCard elevation={0} onClick={onDetailButtonClick}>
      <div>
        <CardHeader
          titleTypographyProps={{
            variant: "h6",
            noWrap: true,
          }}
          title={title}
          subheader={subheader}
        />
        <CardMedia className={classes.media} image={imgUrl} title={title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton size="small">
          <GradeIcon />
        </IconButton>
        <Typography variant="caption">{score}</Typography>
      </CardActions>
    </ItemCard>
  );
}
