// List of routes related to authentication (login and register pages)
// The 'as const' assertion tells TypeScript to treat this array as a readonly tuple
// with literal string types "/login" and "/register", rather than just string[]
export const AUTH_ROUTES = ["/login", "/register", "*"] as const;

export const isAuthRoute = (pathname: string) => {
  // Check if the pathname matches any of the routes in the AUTH_ROUTES array
  // The '*' route is a wildcard that matches any path
  // This allows us to check if the current path is an authentication route
  // For example, if the user tries to access /profile but isn't logged in,
  // they'll be redirected to /login, and the pathname will be "/login"
  // The '*' route allows us to match any path, so it will return true in this case

  if (pathname !== "/" && !AUTH_ROUTES.includes(pathname as typeof AUTH_ROUTES[number])) return true;

  // Check if the pathname matches any of the routes in the AUTH_ROUTES array
  return AUTH_ROUTES.some((route) => pathname === route);
};