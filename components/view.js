export default {
  functional: true,
  render(h, { parent, data }) {
    let depth = 0;
    let route = parent.$route;
    data.routerView = true; // 由父到子进行标记，子的层数依赖父节点
    console.log(data, parent, route);
    
    while (parent) {
      console.log(parent, 'parent');
      
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      parent = parent.$parent;
    }

    
    const record = route.matched[depth];
    // console.log(record, record.component, depth);
    
    if (!record) return h();
    
    return h(record.component, data); // 标记渲染的节点的属性，避免每次都重复渲染第一层，导致死循环
  },
}
