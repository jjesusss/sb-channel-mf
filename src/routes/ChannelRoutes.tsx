import React from "react";
import { Navigate, useRoutes } from 'react-router-dom';
import { ChannelLayout } from '../components/ChannelLayout';
import { AgrobidPage } from '../pages/AgrobidPage';
import { AutoArrematePage } from '../pages/AutoArrematePage';
import { LifeStylePage } from '../pages/LifeStylePage';

export function ChannelRoutes() {
  return useRoutes([
    {
      path: '',
      element: <ChannelLayout />,
      children: [
        { element: <Navigate to='' replace /> },
        { path: '/agrobid', element: <AgrobidPage /> },
        { path: '/autoarremate', element: <AutoArrematePage /> },
        { path: 'lifestyle', element: <LifeStylePage /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
  ]);
}
