// import {} ==========================================//
//import { React } from 'react';
import { Link } from 'react-router-dom';
// Import SocialBar styles ============================//
import scssSocialBar from './socialBar.module.scss';
//import data =========================================//
import socialData from '../../data/social.json';

// SocialBar component ================================//
const socialBar = () => {
  return (
    <section className={scssSocialBar.socialBar}>
      {socialData.map((social) => (
        <div key={social.id} className={scssSocialBar.socialElement}>
          <img src={social.image_url} alt={social.name} />
          <Link to={social.url} target="_blank">
            {social.name}
          </Link>
        </div>
      ))}
    </section>
  );
};
export default socialBar;
// End of SocialBar component ========================//
