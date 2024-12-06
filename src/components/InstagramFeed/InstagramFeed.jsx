import React, { useEffect, useState } from "react";
import { fetchInstagramData } from "./InstagramData";
import './InstagramFeed.css';

export const InstagramFeed = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchInstagramData();
      setEvents(data); // Set the fetched data into the 'events' state
    };

    getData();
  }, []);

  return (
    <div id="InstagramFeed">
      {/* Limiting to 8 items */}
      {events.slice(0, 8).map((post) => (
        
          <div key={post.id}>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img src={post.media_url} alt="Instagram post" style={{ width: "200px" }} />
            </a>
          </div>
        
      ))}
    </div>
  );
};

export default InstagramFeed;
