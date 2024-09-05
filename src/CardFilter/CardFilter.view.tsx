import * as React from "react";
import useStyles from "./CardFilter.styles";
import { ViewPropTypes } from "./CardFilter.types";
import { ReactComponent as ExpandIcon } from "../assets/expand.svg";
import { ReactComponent as CollapseIcon } from "../assets/collapse.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";
import { filtersList } from "./CardFilter.constants";

const CardFilterView = (props: ViewPropTypes) => {
  const { model, classes } = props;
  const { handleFilterExpansion, showFilter, handleSetFilter, selectedFilter, filterBoxRef } =
    model;
  const renderExpandedFilter = () => {
    return (
      <div className={classes.expandedFilterBlock}>
        {filtersList.map((filter) => {
          return (
            <div className={classes.filters} key={filter.key}>
              <div>{filter.key}</div>
              <select
                onChange={(e) => handleSetFilter(filter.key, e)}
                value={selectedFilter?.[filter.key]}
              >
                {filter.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className={classes.filterBlock} ref={filterBoxRef}>
      <div className={classes.filterToggle} onClick={handleFilterExpansion}>
        <SettingsIcon /> Display{" "}
        <span style={{marginTop: '6px'}}>{showFilter ? <CollapseIcon /> : <ExpandIcon />}</span>
      </div>
      {showFilter && renderExpandedFilter()}
    </div>
  );
};

export default CardFilterView;
