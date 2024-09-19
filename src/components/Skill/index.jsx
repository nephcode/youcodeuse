// import {} ==========================================//

//import { React } from 'react';
//import styled

// Import skillBar styles ============================//
import scssSkill from './skill.module.scss';

//import data =========================================//
import skillData from '../../data/skill.json';

// skillBar component ================================//
const skillBar = () => {
  return (
    <section
      className={scssSkill.skills}
      role="complementary"
      aria-label="Résumé des compétences"
    >
      <h2>Développeuse Application React & Blockchain</h2>
      <ul>
        {skillData.map((skill) => (
          <li key={skill.id} className={scssSkill.skilli} data-id={skill.id}>
            <span>{skill.emoji}</span>
            <span className={scssSkill.skilli__name}>{skill.name}</span>
            <span className={scssSkill.skilliDetails}>
              {skill.details
                .map(
                  (detail) => detail.charAt(0).toUpperCase() + detail.slice(1)
                )
                .join(', ')}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default skillBar;
// End of skillBar component ========================//
