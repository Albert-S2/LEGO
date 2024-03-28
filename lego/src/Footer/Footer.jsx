'use client';
import "react";
import "./Footer.css";

export default function Footer() {
  

  return (
    <>
      <div className='footerMain'>
        <div>
          <p ClassName="socialMedia">Social Media</p>
          <ul className="socialMediaList">{listItems}</ul>
        </div>
        <div ClassName="contact">
          <p>Contact</p>
          <a>email@address.com<br /></a>
          <button className="lastButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  Back to the top
</button>
        </div>
      </div>
    </>
  );
}

const socialMedia = [
  'X',
  'Facebook',
  'Instagram',
  'Youtube',
  'Snapchat'
]

const listItems = socialMedia.map(media => <li>{media}</li>);