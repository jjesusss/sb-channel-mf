export enum channelActionTypes {
  getAgroVideosRequest = "getAgroVideosRequest",
  getAgroVideosSuccess = "getAgroVideosSuccess",
  getAgroVideosFail = "getAgroVideosFail",
  getAutoVideosRequest = "getAutoVideosRequest",
  getAutoVideosSuccess = "getAutoVideosSuccess",
  getAutoVideosFail = "getAutoVideosFail",
  getLiveAgroVideosRequest = "getLiveAgroVideosRequest",
  getLiveAgroVideosSuccess = "getLiveAgroVideosSuccess",
  getLiveAgroVideosFail = "getLiveAgroVideosFail",
  getLiveAutoVideosRequest = "getLiveAutoVideosRequest",
  getLiveAutoVideosSuccess = "getLiveAutoVideosSuccess",
  getLiveAutoVideosFail = "getLiveAutoVideosFail",
}

export type ChannelContextProps = {
  errorMsg: string;
  agroVideos: any;
  autoArremateVideos: any;
  isLoadingChannel: boolean;
  agroLiveVideos: any;
  autoLiveArremateVideos: any;
  dispatch: tDispatch;
};

export type tDispatch = (action: any) => void;

export interface ChannelState {
  errorMsg: string;
  agroVideos: any;
  autoArremateVideos: any;
  agroLiveVideos: any;
  autoLiveArremateVideos: any;
  isLoadingChannel: boolean;
}

export type ChannelAction =
  | { type: channelActionTypes.getAgroVideosRequest }
  | { type: channelActionTypes.getAgroVideosSuccess; payload: any }
  | { type: channelActionTypes.getAgroVideosFail; payload: any }
  | { type: channelActionTypes.getAutoVideosRequest }
  | { type: channelActionTypes.getAutoVideosSuccess; payload: any }
  | { type: channelActionTypes.getAutoVideosFail; payload: any }
  | { type: channelActionTypes.getLiveAgroVideosRequest }
  | { type: channelActionTypes.getLiveAgroVideosSuccess; payload: any }
  | { type: channelActionTypes.getLiveAgroVideosFail; payload: any }
  | { type: channelActionTypes.getLiveAutoVideosRequest }
  | { type: channelActionTypes.getLiveAutoVideosSuccess; payload: any }
  | { type: channelActionTypes.getLiveAutoVideosFail; payload: any };
