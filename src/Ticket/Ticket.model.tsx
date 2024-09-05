import React, { useState, useEffect } from "react";
import {
  FilterType,
  ModelPropTypes,
  UserTicketType,
  UserType,
} from "./Ticket.types";
import { getTicketAssignments } from "../API/ticketDashboard.api";
import {
  ticketPriority,
  ticketPriorityNumberMap,
  ticketStatusMap,
} from "./Ticket.constants";
import { getPriorityIcons, getTicketStatusIcons } from "../Utils/iconsHelper";
import { colorGenerator, getCachedState, setStateInCache } from "../Utils/utils";

const useModel = (parentProps: ModelPropTypes) => {
  const { props } = parentProps;

  const [userTicketsList, setUserTickets] = useState<UserTicketType[]>([]);
  const [usersList, setUsers] = useState<UserType[]>([]);
  const [filter, setFilter] = useState<FilterType>({});

  const [filteredTicketList, setFilteredTicketList] = useState<{
    [id: string]: UserTicketType[];
  }>({});
  const [filteredGroupList, setFilteredGroupList] = useState<
    Partial<UserType>[]
  >([]);

  useEffect(() => {
    fetchTicktAssigmentsData();
  }, []);

  useEffect(() => {
    if(filter['grouping'] || filter['ordering']) {
      handleTicketFilters();
      setStateInCache(filter);
    }
  }, [filter]);

  const fetchTicktAssigmentsData = async () => {
    const response = await getTicketAssignments();
    if (response.isSuccess) {
      if (response?.data?.tickets?.length) {
        const ticketArrayToObj = {} as any;
        const ticketsList = response?.data?.tickets;
        setUserTickets(ticketsList);
        ticketsList?.forEach((ticket: { userId: string | number }) => {
          if (ticketArrayToObj[ticket.userId]) {
            ticketArrayToObj[ticket.userId] = [
              ...ticketArrayToObj[ticket.userId],
              ticket,
            ];
          } else {
            ticketArrayToObj[ticket.userId] = [ticket];
          }
        });
        setFilteredTicketList(ticketArrayToObj);
      }
      if(response?.data?.users?.length) {
        setUsers((response?.data?.users as any[])?.map((user) => ({...user, color: colorGenerator()})));
      }
      const cachedState = getCachedState();
      if(cachedState['grouping'] || cachedState['ordering']) {
        setFilter(cachedState);
      } else {
        setFilter({
          grouping: "user",
          ordering: "priority",
        });
      }
    }
  };

  

  const handleFilter = (filter: { key: string; value: string }) => {
    setFilter((prev) => ({
      ...prev,
      [filter.key]: filter.value,
    }));
  };

  const getShortUserName = (userName?: string) => {
    if (!userName) {
      return "";
    }
    return userName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
  };

  const getUserData = (userId: string) => {
    return usersList.filter((user) => user.id === userId)?.[0];
  };

  const handleTicketFilters = () => {
    let tempTicketList: UserTicketType[] | typeof filteredTicketList = [
      ...userTicketsList,
    ];
    let groupKeyList = [] as typeof filteredGroupList;
    if (filter["ordering"]) {
      switch (filter["ordering"]) {
        case "priority":
          tempTicketList = orderByPriority(tempTicketList);
          break;
        case "title":
          tempTicketList = orderByTitle(tempTicketList);
          break;
        default:
          break;
      }
    }
    if (filter["grouping"]) {
      const objKey = filter["grouping"] as | string | undefined;
      switch (objKey) {
        case "status":
          tempTicketList = groupBySpecificKey(tempTicketList, "status");
          groupKeyList = ticketStatusMap.map((status) => ({
            id: status,
            name: status,
          }));
          break;
        case "user":
          tempTicketList = groupBySpecificKey(tempTicketList, "userId");
          groupKeyList = usersList;
          break;
        case "priority":
          tempTicketList = groupBySpecificKey(tempTicketList, "priority");
          groupKeyList = ticketPriority?.map((pr) => ({
            id: ticketPriorityNumberMap[pr as unknown as number],
            name: pr,
          }));
          break;
        default:
          break;
      }
    }
    setFilteredGroupList(groupKeyList);
    setFilteredTicketList(tempTicketList as typeof filteredTicketList);
  };

  const orderByPriority = (tempTicketList: UserTicketType[]) => {
    const orderedTickets = {} as { [key: number]: UserTicketType[] };
    tempTicketList.forEach((ticket) => {
      if (orderedTickets[ticket.priority]) {
        orderedTickets[ticket.priority] = [
          ...orderedTickets[ticket.priority],
          ticket,
        ];
      } else {
        orderedTickets[ticket.priority] = [ticket];
      }
    });
    let orderedTicketList = [] as UserTicketType[];

    Object.values(orderedTickets)
      .reverse()
      .forEach((values) => {
        orderedTicketList = [...orderedTicketList, ...values];
      });
    return orderedTicketList;
  };

  const orderByTitle = (tempTicketList: UserTicketType[]) => {
    return tempTicketList.sort((ticketOne, ticketTwo) => {
      const ticketOneTitle = ticketOne?.title?.toLowerCase();
      const ticketTwoTitle = ticketTwo?.title?.toLowerCase();
      return ticketOneTitle < ticketTwoTitle
        ? -1
        : ticketOneTitle > ticketTwoTitle
        ? 1
        : 0;
    });
  };

  const groupBySpecificKey = (
    list: UserTicketType[],
    specificKey: keyof Pick<UserTicketType, "userId" | "priority" | "status">
  ) => {
    const ticketArrayToObj = {} as typeof filteredTicketList;
    const ticketsList = list;
    ticketsList?.forEach((ticket) => {
      const keyValue = ticket[`${specificKey}`];
      if (ticketArrayToObj[keyValue]) {
        ticketArrayToObj[keyValue] = [...ticketArrayToObj[keyValue], ticket];
      } else {
        ticketArrayToObj[keyValue] = [ticket];
      }
    });
    return ticketArrayToObj;
  };

  const getGroupIcon = (data: any) => {
    const key = filter["grouping"];
    switch (key) {
      case "status":
        return getTicketStatusIcons(data);
      case "priority":
        return getPriorityIcons(data);
      default:
        break;
    }
  };

  return {
    filter,
    userTicketsList,
    usersList,
    filteredTicketList,
    filteredGroupList,
    getShortUserName,
    handleFilter,
    getUserData,
    getGroupIcon,
  };
};

export default useModel;
