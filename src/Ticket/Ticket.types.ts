import { filtersList } from "../CardFilter/CardFilter.constants";
import useModel from "./Ticket.model";
import useStyles from "./Ticket.styles";

interface StylesProps {
  classes: { [X in keyof ReturnType<typeof useStyles>]: string };
  theme?: any;
}

export interface PropTypes extends StylesProps {}

export type ModelPropTypes = {
  props: PropTypes;
};

export interface ViewPropTypes extends StylesProps {
  model: ReturnType<typeof useModel>;
}

export type UserTicketType = {
  id: string;
  priority: number;
  status: string;
  tag: string[];
  title: string;
  userId: string;
};

export type UserType = {
  available: boolean;
  id: string;
  name: string;
  color?: string
};

export type FilterType = {
  [key: string]: string
}
