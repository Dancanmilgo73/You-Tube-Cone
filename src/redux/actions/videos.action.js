import { HOME_VIDEOS_REQUEST } from "../actionTypes";
import { HOME_VIDEOS_SUCCESS } from "../actionTypes";
import { HOME_VIDEOS_FAIL } from "../actionTypes";
import request from "../../Api";
export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "KE",
        maxResults: 20,
        pageToken: "",
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
