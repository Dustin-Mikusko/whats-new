import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import science from '../../data/science';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with selected news from Menu component', () => {

    wrapper.instance().changeNews('science');

    expect(wrapper.state('news')).toEqual(science);


  })
})
