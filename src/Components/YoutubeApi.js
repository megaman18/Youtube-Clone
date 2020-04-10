import axios from "axios";

const KEY = "AIzaSyDaMo1WwUBBiBkXKoi6SfZcfkfh3Olv8x4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
