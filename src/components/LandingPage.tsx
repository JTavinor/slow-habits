import LinkButton from "./common/LinkButton";

// Landing Page for our app
// Basic page with a button that routes to the login page
function LandingPage() {
  return (
    <div className="landingCont">
      <h1 className="landingHeader">Welcome to Slow Habits</h1>
      <h2 className="landingSubheader">Building habits to last</h2>
      <LinkButton
        path="login"
        content="Login/Register"
        styles="landingButton"
      />
    </div>
  );
}

export default LandingPage;
