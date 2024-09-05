import * as React from "react";
import { ViewPropTypes } from "./Card.types";
import { getPriorityIcons, getTicketStatusIcons } from "../Utils/iconsHelper";

const CardView = (props: ViewPropTypes) => {
  const { model, classes } = props;
  const {
    data,
    userName,
    userAvailable,
    selectedFilters,
    enableStatusIcon,
    enableUserIcon,
    userColor,
  } = model;
  return (
    <div className={classes.card} key={data.id}>
      <div className={classes.cardHeader}>
        <div>{data.id}</div>
        {enableUserIcon() ? (
          <div className={"cardUserImg"} style={{ backgroundColor: userColor }}>
            {userName}
            <span
              className={`cardUserStatus ${
                userAvailable ? "cardUserStatusActive" : ""
              }`}
            />
          </div>
        ) : null}
      </div>
      <div className={classes.cardTitle}>
        {enableStatusIcon() ? (
          <div style={{marginTop: '2px'}}>{getTicketStatusIcons(data.status)}</div>
        ) : null}
        <div>{data.title}</div>
      </div>
      <div className={classes.cardFooter}>
        {selectedFilters["grouping"] !== "priority" ? (
          <div className={classes.cardTag}>
            {getPriorityIcons(data.priority, true)}
          </div>
        ) : null}
        {data.tag?.map((tag) => (
          <div className={classes.cardTag} key={tag}>
            <span className={classes.tagStatus} />
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
