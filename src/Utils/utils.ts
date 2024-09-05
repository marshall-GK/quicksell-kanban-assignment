import { LOCALSTORAGE_CACHE_KEY } from "../API/apiUrl.constants";

export const colorGenerator = () => {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color = color + Math.floor(Math.random() * 10).toString(16);
  }
  return color;
};

export const getCachedState = () => {
  const getCachedState = localStorage.getItem(LOCALSTORAGE_CACHE_KEY);
  if(getCachedState) {
    const parsedData = JSON.parse(getCachedState);
    return parsedData;
  }
  return {};
}

export const setStateInCache = (filter: any) => {
  localStorage.setItem(LOCALSTORAGE_CACHE_KEY, JSON.stringify(filter));
}
