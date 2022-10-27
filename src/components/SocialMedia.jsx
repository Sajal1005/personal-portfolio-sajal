import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <SiLeetcode />
    </div>
  </div>
);

export default SocialMedia;
