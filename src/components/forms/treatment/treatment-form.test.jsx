import React from 'react';
import { shallow } from 'enzyme';
import { TreatmentForm } from './treatment-form.jsx';
import toJson from 'enzyme-to-json';

describe('treatment form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<TreatmentForm />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
