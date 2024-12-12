import axios from "axios";

const IG_ID = process.env.REACT_APP_IG_ID;
const IG_TOKEN = process.env.REACT_APP_IG_TOKEN;

export const fetchInstagramData = async () => {
  const url = `https://graph.instagram.com/v21.0/${IG_ID}/media?fields=id,caption&access_token=${IG_TOKEN}`;

  try {
    const { data: userData } = await axios.get(url);
    // console.log("User media data response:", userData);
    const ids = userData.data.slice(0, 8).map((item) => item.id);
    // console.log("Extracted IDs:", ids);

    if (ids.length > 0) {
      const mediaDetails = await Promise.all(
        ids.map(async (id) => {
          const mediaUrl = `https://graph.instagram.com/v21.0/${id}?fields=media_url,thumbnail_url,media_type,permalink,caption&access_token=${IG_TOKEN}`;
          // console.log("Fetching media details from:", mediaUrl);
          const { data: mediaDetail } = await axios.get(mediaUrl);
          // console.log("Media detail response for ID", id, ":", mediaDetail);
          return mediaDetail;
        })
      );

      return mediaDetails;
    } else {
      console.warn("No media IDs found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
    return []; 
  }
};