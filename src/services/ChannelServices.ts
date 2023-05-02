import { Config } from "../../env";
import BaseHttpService from "../../services/baseHttpService";

export default class YoutubeList extends BaseHttpService {
  getAgroVideos = async () => {
    return this.get(
      `https://www.googleapis.com/youtube/v3/search?type=video&part=id%2Csnippet&channelId=UCJfk1-wqjPvwL_iSOZj98ng&key=${Config.KEY_YOUTUBE}&maxResults=30`,
      "Romove"
    );
  };
  getLiveAgroVideos = async () => {
    return this.get(
      `https://www.googleapis.com/youtube/v3/search?type=video&eventType=live&part=id%2Csnippet&channelId=UCJfk1-wqjPvwL_iSOZj98ng&key=${Config.KEY_YOUTUBE}&maxResults=30`,
      "Romove"
    );
  };
  getAutoVideos = async () => {
    return this.get(
      `https://www.googleapis.com/youtube/v3/search?type=video&part=id%2Csnippet&channelId=UCI_5ID9uE5JwPixsttnPOrA&key=${Config.KEY_YOUTUBE}&maxResults=30`,
      "Romove"
    );
  };
  getLiveAutoVideos = async () => {
    return this.get(
      `https://www.googleapis.com/youtube/v3/search?type=video&eventType=live&part=id%2Csnippet&channelId=UCI_5ID9uE5JwPixsttnPOrA&key=${Config.KEY_YOUTUBE}&maxResults=30`,
      "Romove"
    );
  };
}
