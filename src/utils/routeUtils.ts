/**
 * An array of routes that are considered "auth routes". These routes are
 * accessible even when the user is not logged in.
 */
export const AUTH_ROUTES = ["/login", "/register", "*"] as const;

/**
 * Checks if the given pathname is an "auth route", meaning it is accessible
 * even when the user is not logged in.
 *
 * @param pathname The pathname to check.
 * @returns true if the pathname is an "auth route", false otherwise.
 */
export const isAuthRoute = (pathname: string) => {
  // If the pathname is not the root route ("/") and is not in the AUTH_ROUTES
  // array, then it is not an "auth route".
  if (pathname !== "/" && !AUTH_ROUTES.includes(pathname as typeof AUTH_ROUTES[number])) {
    return false;
  }

  // If the pathname matches any of the routes in the AUTH_ROUTES array, then
  // it is an "auth route".
  return AUTH_ROUTES.some((route) => pathname === route);
};
