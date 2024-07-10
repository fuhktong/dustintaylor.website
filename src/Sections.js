import React from 'react';
import './Sections.css';

export const SocialMediaBar = () => (
  <section className="socialmediabar">
      <a href="https://www.linkedin.com/in/dustintaylor505/" target="_blank" rel="noreferrer"><img src="white logo linkedin.png" alt="Dustin Taylor - LinkedIn"/></a>
      <a href="https://www.instagram.com/framersmethod/" target="_blank" rel="noreferrer"><img src="white logo insta.png" alt="The Framers' Method on Instagram"/></a> 
      <a href="https://twitter.com/framersmethod" target="_blank" rel="noreferrer"><img src="white logo x.png" alt="The Framers' Method on Twitter"/></a>
      <a href="https://www.youtube.com/@framersmethod/featured" target="_blank" rel="noreferrer"><img src="white logo youtube.png" alt="The Framers' Method on YouTube"/></a>
      <a href="https://www.patreon.com/framersmethod" target="_blank" rel="noreferrer"><img src="white logo patreon.png" alt="The Framers' Method on Patreon"/></a>
      <a href="https://www.tiktok.com/@framersmethod" target="_blank" rel="noreferrer"><img src="white logo tiktok.png" alt="The Framers' Method on TikTok"/></a>
      <a href="https://a.co/d/0dimzJAr" target="_blank" rel="noreferrer"><img src="white logo amazon.png" alt="On The Framers' Method Book - Amazon"/></a>
  </section>
);

export const Profile = () => {
  return (
    <section>
      <div className="profile">
        <div className="profile-text">
          <h1 className="profile-text-h1">Dustin Taylor</h1>
          <h2 className="profile-text-h2">Web Developer / Political Scientist</h2>
          <p className="profile-text-p">These are some projects made by Dustin Taylor using HTML, CSS, JavaScript, and React.</p>
          <p className="profile-text-p">Dustin Taylor is a web developer and political scientist with a focus on electoral systems.&nbsp;After high school, he enlisted in the United States Navy as a cryptologic technician.&nbsp;Dustin Taylor attended the University of New Mexico, where he received a bachelor's degree in political science, and also attended Johns Hopkins University, attaining a master's degree in government.&nbsp;His master's thesis was titled "The Decentralization of the House of Representatives."</p>
          <p className="profile-text-p">In February 2023, Dustin published his first political science book on the Electoral College, <a href="https://a.co/d/6fazY98">"On the Framers' Method: How the Electoral College and the Hamilton Method Can Defeat Populism and Tyranny."</a></p>
        </div>
        <div className="profile-img">
          <img className="profile-img-img" src="./dustin taylor photo.png" alt="Dustin Taylor" />
        </div>
      </div>
    </section>
  );
};

export const Section2 = () => {
  return (
    <section>
      <div className="section">
        <div className="section-text">
          <h2 className="section-text-h2">Website - The Framers' Method</h2>
          <p className="section-text-p">
            Promoting the Framers’ Method through political science writing and videos to defeat populism and tyranny in the American political system.
          </p>
        </div>
        <div className="section-img">
          <a href="https://www.framersmethod.com/" target="_blank" rel="noopener noreferrer">
            <img className="section-img-img" src="./theframersmethod.png" alt="Dustin Taylor" />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Section3 = () => {
  return (
    <section>
      <div className="section" style={{backgroundColor: "#C4DFFF"}}>
        <div className="section-text">
          <h2 className="section-text-h2">Website - Advance Coin Laundry</h2>
          <p className="section-text-p">Established in 2021, Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL. Completely renovated and air-conditioned, Advance Coin Laundry is the cleanest, coldest laundromat in Orlando! Visit us and download the new Speed Queen app and receive a $5 credit on your first-time use. Dry cleaning pick-up and drop off is on Tuesdays and Thursdays. Please note that last wash is at 8:55 PM daily. Check out our website for complete details.</p>
        </div>
        <div className="section-img">
          <a href="https://www.advancecoinlaundry.com/" target="_blank" rel="noopener noreferrer">
            <img className="section-img-img" src="./advancecoinlaundry.png" alt="Advance Coin Laundry" />
          </a>
        </div>
      </div>
    </section>
  );
};