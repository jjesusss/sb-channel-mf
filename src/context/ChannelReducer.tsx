import { ChannelAction, channelActionTypes, ChannelState } from "../@types";

export const channelReducer = (
  state: ChannelState,
  action: ChannelAction
): ChannelState => {
  switch (action.type) {
    case channelActionTypes.getAgroVideosRequest:
      return {
        ...state,
        isLoadingChannel: true,
      };
    case channelActionTypes.getAgroVideosSuccess:
      return {
        ...state,
        agroVideos: action.payload,
        isLoadingChannel: false,
      };
    case channelActionTypes.getAgroVideosFail:
      return {
        ...state,
        errorMsg: "Falha na Busca",
        isLoadingChannel: false,
      };
    case channelActionTypes.getLiveAgroVideosRequest:
      return {
        ...state,
        isLoadingChannel: true,
      };
    case channelActionTypes.getLiveAgroVideosSuccess:
      return {
        ...state,
        agroLiveVideos: action.payload,
        isLoadingChannel: false,
      };
    case channelActionTypes.getLiveAgroVideosFail:
      return {
        ...state,
        errorMsg: "Falha na Busca",
        isLoadingChannel: false,
      };
    case channelActionTypes.getAutoVideosRequest:
      return {
        ...state,
        isLoadingChannel: true,
      };
    case channelActionTypes.getAutoVideosSuccess:
      return {
        ...state,
        autoArremateVideos: action.payload,
        isLoadingChannel: false,
      };
    case channelActionTypes.getAutoVideosFail:
      return {
        ...state,
        errorMsg: "Falha na Busca",
        isLoadingChannel: false,
      };
    case channelActionTypes.getLiveAutoVideosRequest:
      return {
        ...state,
        isLoadingChannel: true,
      };
    case channelActionTypes.getLiveAutoVideosSuccess:
      return {
        ...state,
        autoLiveArremateVideos: action.payload,
        isLoadingChannel: false,
      };
    case channelActionTypes.getLiveAutoVideosFail:
      return {
        ...state,
        errorMsg: "Falha na Busca",
        isLoadingChannel: false,
      };
    default:
      return state;
  }
};
