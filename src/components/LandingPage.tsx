import React from "react";
import LinkButton from "./common/LinkButton";

function LandingPage() {
  return (
    <div className="landingCont">
      <h1 className="landingHeader">Welcome to Slow Habits</h1>
      <h2 className="landingSubheader">Building habits to last</h2>
      <LinkButton path="b" content="Bebo" />
    </div>
  );
}

export default LandingPage;
