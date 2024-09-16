// import {} ==========================================//
//import { React } from 'react';
import { Link } from 'react-router-dom';
// Import SocialBar styles ============================//
import scssSocialBar from './socialbar.module.scss';
//import data =========================================//
import socialData from '../../data/social.json';

// SocialBar component ================================//
const socialBar = () => {
  return (
    <section
      className={scssSocialBar.socialBar}
      role="complementary"
      aria-label="Liens vers les réseaux professionels"
    >
      {socialData.map((social) => (
        <div
          key={social.id}
          className={scssSocialBar.socialElement}
          data-id={social.id}
        >
          <img src={social.image_url} alt="" aria-hidden="true" />
          <Link
            to={social.url}
            target="_blank"
            aria-label={`Continuer vers ${social.name}`}
          >
            {social.name}
          </Link>
        </div>
      ))}
    </section>
  );
};
export default socialBar;
// End of SocialBar component ========================//
