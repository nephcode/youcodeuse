import scssVersion from './version.module.scss';

const version = () => {
  return (
    <div className={scssVersion.version}>
      <sup>v 1.2.1</sup>
    </div>
  );
};
export default version;
// End of Version component ===================================================//
