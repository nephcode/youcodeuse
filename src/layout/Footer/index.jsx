// Import Footer styles ====================================================//
import scssFooter from './footer.module.scss';
// Import images ===========================================================//
import keepCalm from './keepcalm.svg';
import pyramides from './pyramides.svg';
// Footer component ========================================================//
const Footer = () => {
  return (
    <footer className={scssFooter.footer}>
      <div className={scssFooter.pyramides}>
        <img src={pyramides} alt="Pyramides" />
      </div>
      <div className={scssFooter.punchline}>
        <img src={keepCalm} alt="Keep Calm & Code" />
      </div>
    </footer>
  );
};

export default Footer;
// End of Footer component =================================================//
