// import styles =============================================================//
import scssHome from './home.module.scss';
// import images =============================================================//
import profil from './profil.png';

// import components =========================================================//
import SocialBar from '../../components/SocialBar';
import Skill from '../../components/Skill';
// Home component ============================================================//
const Home = () => {
  return (
    <main>
      <div className={scssHome.profil}>
        <img src={profil} alt="Profil" />
      </div>
      <Skill />
      <SocialBar />
    </main>
  );
};
export default Home;
