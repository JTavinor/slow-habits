import { shallow, mount } from "enzyme";

import LinkButton from "../components/common/LinkButton";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("LinkButton testing", () => {
  //Testing suite for Landing Page
  let linkButtonProps = {
    content: "This is a button",
    path: "dashboard",
    styles: "button small",
  };

  let wrapper: any; // Initialising wrapper
  beforeEach(() => {
    wrapper = shallow(<LinkButton {...linkButtonProps} />);
  });

  it("should render the LinkButton", () => {
    expect(wrapper.exists("button")).toEqual(true);
  });

  it("should display the content prop", () => {
    expect(wrapper.find("button").text()).toBe("This is a button");
  });

  it("should use the styles passed as props", () => {
    expect(
      wrapper.find("button").hasClass("defaultButton" + "button small")
    ).toEqual(true);
  });

  it("should display the default button styles if no prop is passed", () => {
    wrapper = shallow(<LinkButton content="x" path="a" />);
    expect(wrapper.find("button").hasClass("defaultButton")).toEqual(true);
  });

  it("should route to the provided path when clicked", () => {
    wrapper.find("button").simulate("click");
    expect(mockHistoryPush).toBeCalledWith("dashboard");
  });
});
