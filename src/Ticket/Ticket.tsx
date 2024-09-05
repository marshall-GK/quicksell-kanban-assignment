import * as React from "react";
import withStyles from "react-jss";
import TicketView from "./Ticket.view";
import useModel from "./Ticket.model";
import useStyles from "./Ticket.styles";
import { PropTypes } from "./Ticket.types";

const Ticket: React.FC<PropTypes> = (props) => {
  const { theme, classes } = props;
  const model = useModel({ props })

  return <TicketView model={model} classes={classes} />;
};

export default withStyles(useStyles)(Ticket);
