'use client';
import "react";
import "./Footer.css";

export default function Footer() {
  

  return (
    <>
      <div className='footerMain'>
        <div className='media'>
          <p ClassName="socialMedia"><b>Social Media</b></p>
          <ul className="socialMediaList">{listItems}</ul>
        </div>
        <div ClassName="contact">
          <p><b>Contact<br /></b></p>
          <p className="email">email@address.com<br /></p>
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