import createRouteMap from './create-route-map';

export default function createMatcher (routes) {
  const pathMap = createRouteMap(routes);
  
  function addRoutes (routes) {
    createRouteMap(routes, pathMap);
  }

  function addRoute (route) {
    createRouteMap([route], pathMap);
  }

  function match (location) {
    return pathMap[location];
  }

  return {
    addRoutes,
    addRoute,
    match
  }
}
