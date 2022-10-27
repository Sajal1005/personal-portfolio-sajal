import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/sajal-nanda-12685b219/" aria-label="Mute volume" target="_blnak"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/Sajal1005" aria-label="Mute volume" target="_blnak"><BsGithub /></a>
    </div>
    <div>
      <a href="https://leetcode.com/sajal1005/" aria-label="Mute volume" target="_blnak"><SiLeetcode /></a>
    </div>
  </div>
);

export default SocialMedia;
