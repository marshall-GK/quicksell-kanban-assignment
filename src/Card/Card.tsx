import * as React from "react";
import withStyles from "react-jss";
import CardView from "./Card.view";
import useModel from "./Card.model";
import useStyles from "./Card.styles";
import { PropTypes } from "./Card.types";

const Card: React.FC<PropTypes> = (props) => {
  const { theme, classes } = props;
  const model = useModel({ props })

  return <CardView model={model} classes={classes} />;
};

export default withStyles(useStyles)(Card);
