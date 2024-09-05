import { FilterType, UserTicketType } from "../Ticket/Ticket.types";
import useModel from "./Card.model";
import useStyles from "./Card.styles";

interface StylesProps {
  classes: { [X in keyof ReturnType<typeof useStyles>]: string };
  theme?: any;
}

export interface PropTypes extends StylesProps {
  data: UserTicketType;
  userName: string;
  userAvailable: boolean;
  selectedFilters: FilterType;
  userColor?: string;
}

export type ModelPropTypes = {
  props: PropTypes;
};

export interface ViewPropTypes extends StylesProps{
  model: ReturnType<typeof useModel>;
};
