import { useEffect, useState } from 'react';
import staticRouters from '@/routers/staticRouters';

export function useLoadRouter() {
  const [routes, setRoutes] = useState<unknown[]>([]);
  // 默认注入静态路由
  const [menus] = useState(staticRouters);

  useEffect(() => {
    // TODO: 通过菜单处理动态路由
    setRoutes(menus);
  }, [menus]);

  return routes;
}
