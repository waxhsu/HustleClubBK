import axios from "axios";

const IG_ID = process.env.REACT_APP_IG_ID;
const IG_TOKEN = process.env.REACT_APP_IG_TOKEN;

export const fetchInstagramData = async () => {
  const url = `https://graph.instagram.com/v21.0/${IG_ID}/media?fields=id,caption&access_token=${IG_TOKEN}`;

  try {
    // Step 1: Fetch User Media Data
    const { data: userData } = await axios.get(url);
    console.log("User media data response:", userData);

    // Extract only the ids from the data
    const ids = userData.data.map((item) => item.id);
    // console.log("Extracted IDs:", ids);

    if (ids.length > 0) {
      // Step 2: Fetch details for each media ID
      const mediaDetails = await Promise.all(
        ids.map(async (id) => {
          const mediaUrl = `https://graph.instagram.com/v21.0/${id}?fields=media_url,media_type,permalink&access_token=${IG_TOKEN}`;
          console.log("Fetching media details from:", mediaUrl);
          const { data: mediaDetail } = await axios.get(mediaUrl);
          console.log("Media detail response for ID", id, ":", mediaDetail);
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