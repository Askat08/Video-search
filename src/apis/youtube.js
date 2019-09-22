import axios from "axios";

const KEY = "AIzaSyDAozfxbFbm4kImb_QD77_i38QR4K9J0JY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
