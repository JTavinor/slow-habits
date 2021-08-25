import LandingPage from "../components/LandingPage";

import { shallow } from "enzyme";
import LinkButton from "../components/common/LinkButton";

//Testing suite for Landing Page
describe("Landing Page testing", () => {
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

  it("should render the Login Button", () => {
    expect(wrapper.find(LinkButton).length).toEqual(1);
  });
});
