import React from "react";
import { ScrumTeam } from "../../../data/data";
import styles from "./ScrumTeamInfo.module.css";

const ScrumTeamInfo = () => {
  return (
    <div className={styles.infoContainer}>  
      <img src={ScrumTeam.teamImageSource} alt="Scrum Team" className={styles.teamImage}/>
      <div className={styles.infoText}> 
        <p>{ScrumTeam.whatText}</p>
        <h2>{ScrumTeam.keyRolesText}</h2>
        <ul>
            <li>{ScrumTeam.bulletOne}</li>
            <li>{ScrumTeam.bulletTwo}</li>
            <li>{ScrumTeam.bulletThree}</li>
        </ul>
      </div>
    </div>
  );
};

export default ScrumTeamInfo;