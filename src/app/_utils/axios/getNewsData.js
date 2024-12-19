import { latestNewsApi } from "./axiosConfig";

export default async function getNewsData({ languageId, pageId, articleId }) {
  try {
    const params = {};
    if (articleId) {
      params.id = articleId;
    } else {
      if (languageId !== "all") {
        params.language = languageId;
      }
      if (pageId !== undefined) {
        params.page = pageId;
      }
    }

    const response = await latestNewsApi.get("", { params });

    return response;
  } catch (error) {
    if (error.response) {
      console.error("Response error:", error.response.data);
      console.error("Status code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error:", error.message);
    }

    return error.response;
  }
}
