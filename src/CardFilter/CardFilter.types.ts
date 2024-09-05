import { FilterType } from "../Ticket/Ticket.types";
import useModel from "./CardFilter.model";
import useStyles from "./CardFilter.styles";

interface StylesProps {
  classes: { [X in keyof ReturnType<typeof useStyles>]: string };
  theme?: any;
}

export interface PropTypes extends StylesProps {
  setFilter: (values: any) => void;
  selectedFilter: FilterType;
}

export type ModelPropTypes = {
  props: PropTypes;
};

export interface ViewPropTypes extends StylesProps{
  model: ReturnType<typeof useModel>;
};
