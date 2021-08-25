import LandingPage from "../components/LandingPage";

import { shallow, mount } from "enzyme";

describe("Landing Page testing", () => {
  //Testing suite for Landing Page
  let wrapper: any; // Initialising wrapper
  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it("should render the container div", () => {
    expect(wrapper.exists(".landingCont")).toEqual(true);
  });

  it("should render the welcome title", () => {
    expect(wrapper.find(".landingHeader").text()).toBe(
      "Welcome to Slow Habits"
    );
  });

  it("should render the subHeading tagline", () => {
    expect(wrapper.exists(".landingSubheader")).toEqual(true);
  });
});
