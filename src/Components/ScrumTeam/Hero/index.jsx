import React from "react";
import { ScrumTeam } from "../../../data/data";
import styles from "./ScrumTeamHero.module.css";

const ScrumTeamHero = () => {
  return (
    <div className={styles.heroContainer} style={{backgroundImage: `url(${ScrumTeam.heroImgSource})`}}>
      <h1 className={styles.header}>{ScrumTeam.heroTitle}</h1>
      
    </div>
  )
}
export default ScrumTeamHero