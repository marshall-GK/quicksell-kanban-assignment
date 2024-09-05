import React, { useState } from "react";
import { initialState } from "./Card.constants";
import { ModelPropTypes } from "./Card.types";

const useModel = (parentProps: ModelPropTypes) => {
  const { props } = parentProps;
  const { selectedFilters } = props;

  const enableStatusIcon = () => {
    return selectedFilters['grouping'] !== 'status';
  }

  const enableUserIcon = () => {
    return selectedFilters['grouping'] !== 'user';
  }

  return {
    ...props,
    enableStatusIcon,
    enableUserIcon
  };
};


export default useModel;
