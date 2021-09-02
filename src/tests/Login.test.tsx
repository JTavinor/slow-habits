import { shallow } from "enzyme";

import Login from "../components/Login";

//Testing suite for Login Page
describe("LinkButton testing", () => {
  let wrapper: any; // Initialising wrapper
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
});
