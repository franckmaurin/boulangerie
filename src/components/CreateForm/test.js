import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { CreateForm } from './index';

describe('<CreateForm />', () => {
  it('should render 3 input fields', () => {
    const wrapper = render(<CreateForm />);
    expect(wrapper.find('input')).to.have.length(3);
  });

  it('should render submit <button />', () => {
    const wrapper = render(<CreateForm />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});