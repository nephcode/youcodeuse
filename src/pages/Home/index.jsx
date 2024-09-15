// import styles =============================================================//
import scssHome from './home.module.scss';
// import images =============================================================//
import profil from './profil.png';

// import components =========================================================//
import SocialBar from '../../components/SocialBar';

// Home component ============================================================//
const Home = () => {
  return (
    <main>
      <div className={scssHome.profil}>
        <img src={profil} alt="Profil" />
      </div>
      <div className={scssHome.skills}>
        <h2>Développeuse Application React & Blockchain</h2>
        <ul>
          <li>👩🏼‍💼 FRONTEND : React, Remix, Vanilla, Pure Sass.</li>
          <li>👩🏼‍💻 BACKEND : Next, Node, Deno, Bun, API Rest, Sql</li>
          <li>🔗 WEB3 : Solidity, Evm Ethereum, DeFI, RPA</li>
          <li>🤖 CMS : Ghost for créative code</li>
          <li>👜 PRODUCT : Management, Storytelling, Agile Scrum</li>
          <li>🍀 DESIGN : Figma, Affinity Designer, FinalCut</li>
        </ul>
      </div>
      <SocialBar />
    </main>
  );
};
export default Home;
