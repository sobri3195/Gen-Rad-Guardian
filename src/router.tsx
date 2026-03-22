import { createBrowserRouter } from 'react-router-dom';

import { AppShell } from '@/components/layout/AppShell';
import { AdminPage } from '@/pages/AdminPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { EducationPage } from '@/pages/EducationPage';
import { ExplainabilityPage } from '@/pages/ExplainabilityPage';
import { LandingPage } from '@/pages/LandingPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ScreeningPage } from '@/pages/ScreeningPage';
import { TrendsPage } from '@/pages/TrendsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/',
    element: <AppShell />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'screening', element: <ScreeningPage /> },
      { path: 'trends', element: <TrendsPage /> },
      { path: 'education', element: <EducationPage /> },
      { path: 'explainability', element: <ExplainabilityPage /> },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);
