import * as React from "react";
import withStyles from "react-jss";
import CardFilterView from "./CardFilter.view";
import useModel from "./CardFilter.model";
import useStyles from "./CardFilter.styles";
import { PropTypes } from "./CardFilter.types";

const CardFilter: React.FC<PropTypes> = (props) => {
  const { theme, classes } = props;
  const model = useModel({ props })

  return <CardFilterView model={model} classes={classes} />;
};

export default withStyles(useStyles)(CardFilter);
