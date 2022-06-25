import { RoutePathName } from "../containers/App";

export const getNowUrl = () => {
  return window.location.pathname;
};

export const isUserPath = (path) => {
  
  if (path.split("/")[1] === "users") {
    return true;
  } else {
    return false;
  }
};

export const renderHelper = (
  segment: string,
  segments: RoutePathName[]
): boolean => {
  let result = false;

  for (const item of segments) {
    if (item === segment) {
      result = true;
    }
  }

  return result;
};

export const redirectHelper = (redirectUrl) => {
  if ("URLSearchParams" in window) {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("redirectUrl", redirectUrl);

    const newRelativePathQuery =
      window.location.pathname + "?" + String(searchParams).replace("%2F", "");

    history.pushState(null, null, newRelativePathQuery);
  }
};

export const getRedirectUrl = () => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get("redirectUrl");
};
