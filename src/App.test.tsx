import { render, screen } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  test("render the title of the counter", () => {
    null;
    //   const wrapper = shallow(<App />);
    //   expect(wrapper.find('h1').text()).toContain('this is counter app')
  });
});
