import * as React from "react";
import { ViewPropTypes } from "./Ticket.types";
import Card from "../Card/Card";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as MoreIcon } from "../assets/more.svg";
import CardFilter from "../CardFilter/CardFilter";
import { ticketPriorityNumberMap } from "./Ticket.constants";

const TicketView = (props: ViewPropTypes) => {
  const { model, classes } = props;
  const {
    userTicketsList,
    usersList,
    getShortUserName,
    handleFilter,
    filteredTicketList,
    filteredGroupList,
    filter,
    getUserData,
    getGroupIcon,
  } = model;
  const renderNavBar = () => {
    return (
      <div className={classes.navBar}>
        <CardFilter setFilter={handleFilter} selectedFilter={filter} />
      </div>
    );
  };
  return (
    <div>
      {renderNavBar()}
      <div className={classes.mainCardWrapper}>
        <div className={classes.cardWrapper}>
          {filteredGroupList?.map((group, index) => {
            return (
              <div className={classes.cardBlock} key={`${group.id}${index}`}>
                <div className={classes.cardBlockTitle}>
                  <div className={classes.cardTitle}>
                    {filter["grouping"] === "user" ? (
                      <div
                        className="cardUserImg"
                        style={{ backgroundColor: group.color }}
                      >
                        {getShortUserName(group.name)}
                        <div
                          className={`cardUserStatus ${
                            group.available ? "cardUserStatusActive" : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <div className={`cardUserImg`}>
                        {getGroupIcon(group.id)}
                      </div>
                    )}
                    <div>{group.name}</div>
                    <div>
                      {group?.id && filteredTicketList[group?.id]?.length}
                    </div>
                  </div>
                  <div className={classes.cardActions}>
                    <span>
                      <AddIcon />
                    </span>
                    <span>
                      <MoreIcon />
                    </span>
                  </div>
                </div>
                <div className={classes.userTicketsBlock}>
                  {group?.id
                    ? filteredTicketList[group?.id]?.map((ticket) => {
                        const userData = getUserData(ticket.userId);
                        return (
                          <Card
                            data={ticket}
                            userName={getShortUserName(userData.name)}
                            userAvailable={userData?.available}
                            selectedFilters={filter}
                            key={ticket.id}
                            userColor={userData.color}
                          />
                        );
                      })
                    : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicketView;
