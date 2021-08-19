import Examples from "../components/Examples";

import { shallow, mount } from "enzyme";

describe("Counter Testing", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Examples />);
    // wrapper = mount(<App />); Allows us to test nested components
  });

  test("render the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("this is counter app");
  });

  test("render a button with text of 'increment'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
