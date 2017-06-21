import React from 'react';
import { shallow } from 'enzyme';
import { NavbarHome } from './form-navbar.jsx';
import toJson from 'enzyme-to-json';


describe('navbar home', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<NavbarHome />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
