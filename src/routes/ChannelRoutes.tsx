import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ChannelLayout from "../components/ChannelLayout/ChannelLayout";
import LifeStylePage from "../pages/LifeStylePage/LifeStylePage";

export function ChannelRoutes() {
  return useRoutes([
    {
      path: "",
      element: <ChannelLayout />,
      children: [
        { element: <Navigate to="" replace /> },
        { path: "", element: <LifeStylePage /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
