import React, { useState, useRef, useEffect, ReactEventHandler } from "react";
import { ModelPropTypes } from "./CardFilter.types";

const useModel = (parentProps: ModelPropTypes) => {
  const { props } = parentProps;
  const { setFilter } = props;
  const [showFilter, setShowFilter] = useState(false);

  const filterBoxRef = useRef<any>();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [])

  const handleClickOutside = (event: MouseEvent) => {
    if(filterBoxRef.current && !filterBoxRef.current.contains(event.target)) {
      setShowFilter(false);
    }
  }

  const handleFilterExpansion = () => {
    setShowFilter((prev) => !prev);
  };

  const handleSetFilter = (
    key: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter({ key, value: event?.target?.value });
  };

  return {
    ...props,
    handleFilterExpansion,
    showFilter,
    handleSetFilter,
    filterBoxRef
  };
};

export default useModel;
