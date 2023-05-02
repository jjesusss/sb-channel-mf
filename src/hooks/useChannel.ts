import { useCallback } from "react";
import { channelActionTypes } from "../@types";
import { useChannelContext } from "../context/ChannelContext";

import YoutubeList from "../services/ChannelServices";

export function useChannel() {
  const { dispatch } = useChannelContext();

  const getAgroVideos = useCallback(async () => {
    dispatch({ type: channelActionTypes.getAgroVideosRequest });
    try {
      const service = new YoutubeList();
      const { data } = await service.getAgroVideos();

      if (data)
        dispatch({
          type: channelActionTypes.getAgroVideosSuccess,
          payload: data,
        });
    } catch (error) {
      dispatch({
        type: channelActionTypes.getAgroVideosFail,
        payload: "Falha ao obter videos ",
      });
    }
  }, [dispatch])

  const getLiveAutoVideos = useCallback(async () => {
    dispatch({ type: channelActionTypes.getAutoVideosRequest });
    try {
      const service = new YoutubeList();
      const { data } = await service.getAutoVideos();

      if (data)
        dispatch({
          type: channelActionTypes.getAutoVideosSuccess,
          payload: data,
        });
    } catch (error) {
      dispatch({
        type: channelActionTypes.getAutoVideosFail,
        payload: "Falha ao obter videos ",
      });
    }
  }, [dispatch]
  )
  const getLiveAgroVideos = useCallback(async () => {
    dispatch({ type: channelActionTypes.getLiveAgroVideosRequest });
    try {
      const service = new YoutubeList();
      const { data } = await service.getLiveAgroVideos();

      if (data)
        dispatch({
          type: channelActionTypes.getLiveAgroVideosSuccess,
          payload: data,
        });
    } catch (error) {
      dispatch({
        type: channelActionTypes.getLiveAgroVideosFail,
        payload: "Falha ao obter videos ",
      });
    }
  }, [dispatch])

  const getAutoVideos = useCallback(async () => {
    dispatch({ type: channelActionTypes.getLiveAutoVideosRequest });
    try {
      const service = new YoutubeList();
      const { data } = await service.getLiveAutoVideos();

      if (data)
        dispatch({
          type: channelActionTypes.getLiveAutoVideosSuccess,
          payload: data,
        });
    } catch (error) {
      dispatch({
        type: channelActionTypes.getLiveAutoVideosFail,
        payload: "Falha ao obter videos ",
      });
    }
  }, [dispatch])

  return {
    getAgroVideos,
    getAutoVideos,
    getLiveAgroVideos,
    getLiveAutoVideos,
  };
}
