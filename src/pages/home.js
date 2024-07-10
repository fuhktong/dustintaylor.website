import React from 'react';
import { Profile, Section2, Section3, SocialMediaBar } from '../Sections.js';
import ContactForm from './contactform.js';

const Home = () => {
  return (
    <div>
    <SocialMediaBar />
    <Profile />
    <Section2 />
    <Section3 />
    <ContactForm />
    <SocialMediaBar />
    <div style={{height: "15px", backgroundColor: "#C4DFFF"}}></div>
    </div>
  );
};

export default Home;