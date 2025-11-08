import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@layouts';
import { Home, Dashboard, About, NotFound } from '@pages';
import { ROUTES } from '@utils/constants';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.ABOUT}
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.NOT_FOUND}
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
}
