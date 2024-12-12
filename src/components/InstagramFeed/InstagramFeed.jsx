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
      <div className="socialHeader">
        <div className="social-text">Your new dance life on IG <br /> @hustleclub_BK</div>
        <a className="social-text" href="https://www.instagram.com/hustleclub_bk">Follow us ➔</a>
      </div>
      
      <div className="social-container">
        {events.map((post) => (
          <div className="socialCard" key={post.id}>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img className="socialImg" src={post.thumbnail_url || post.media_url} alt="Instagram post" />
              <div className="socialCaption">@hustleclub_bk</div>
            </a>
          </div>
        ))}
      </div>


    </div>
  );
};

export default InstagramFeed;
