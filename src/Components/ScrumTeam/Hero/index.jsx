import React from "react";

const scrumTeamPage = () => {
  return (
    <div>
      <HeroSection />
      <TeamInformation />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="purplefront2.jpg" alt="Hero image"/>
      <h1>SCRUM TEAM</h1>
      </section>
  );
}

const TeamInformation = () => {
  return (
    <section className="team-info">
      <div className="column">
        <img src="teamwork.jpg" alt="Team image"/>
      </div>
      <div className="column">
        <p>
        In a Scrum team, individuals collaborate closely to achieve the project's goals efficiently and effectively.
        </p>
      </div>

    </section>
  );
}

export default scrumTeamPage