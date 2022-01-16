import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';

export const AppRouter = () => {
  return (
    <Routes>
      {
        routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={route.element}
          />
        ))
      }
    </Routes>
  );
};