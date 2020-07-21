import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <Card style={{ marginTop: 10 }}>
      <CardHeader
        title="推荐博客"
        action={
          <>
            <Tooltip title="更多">
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="联系推荐">
              <IconButton>
                <AccessibilityIcon />
              </IconButton>
            </Tooltip>
          </>
        }
      />
      {/* <CardContent> */}
      <List className={classes.root}>
        {[1, 2, 3].map((item) => (
          <ListItem key={item} alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar alt="" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      {/* </CardContent> */}
    </Card>
  );
}
