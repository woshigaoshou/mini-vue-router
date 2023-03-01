export default function createRouteMap (routes, pathMap) {
  pathMap = pathMap || {};
  routes.forEach(route => {
    addRouteMap(route, pathMap);
  })

  return pathMap;
}

function addRouteMap (route, pathMap, parentRecord) {
  let path = parentRecord ? `${parentRecord.path}${parentRecord.path.endsWith('/') ? '' : '/'}${route.path}` : route.path;

  const record = {
    path,
    component: route.component,
    props: route.props,
    meta: route.meta,
    parent: parentRecord
  }

  pathMap[path] = record;

  route.children && route.children.forEach(childRoute => {
    addRouteMap(childRoute, pathMap, record);
  })
}
