import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ChannelContextProps, ChannelState } from "../@types";
import { channelReducer } from "./ChannelReducer";

const channelInitialState: ChannelState = {
  agroVideos: { items: [] },
  autoArremateVideos: { items: [] },
  agroLiveVideos: { items: [] },
  autoLiveArremateVideos: { items: [] },
  errorMsg: "",
  isLoadingChannel: false,
};

export const ChannelContext = createContext({} as ChannelContextProps);

export const ChannelProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(channelReducer, channelInitialState);

  return (
    <ChannelContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};

export function useChannelContext() {
  const { dispatch, ...state } = useContext(ChannelContext);

  return {
    dispatch,
    ...state,
  };
}
