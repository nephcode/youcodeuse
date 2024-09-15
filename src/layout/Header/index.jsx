import scssHeader from './Header.module.scss';

import version from '../../components/Version';
const Header = () => {
  return (
    <header>
      <h1 className={scssHeader.headerContent}>Nephelim Cohen</h1>
    </header>
  );
};
export default Header;
