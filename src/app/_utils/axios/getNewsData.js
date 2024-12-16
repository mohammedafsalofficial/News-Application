import { latestNewsApi } from "./axiosConfig";

export default async function getNewsData(language, page) {
  try {
    const params = {};
    if (language !== "all") {
      params.language = language;
    }
    if (page !== undefined) {
      params.page = page;
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
