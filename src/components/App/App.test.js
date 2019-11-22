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
  });

  it('should update state with the filtered news results based on user search', () => {
    const mockUserSearch = 'Capitol Hill';

    const mockState = [
      {
      id: 5,
      headline: 'Motorcyclist killed in crash near Capitol Hill in Denver',
      img: 'https://localtvkdvr.files.wordpress.com/2019/09/fatal-motorcycle.jpeg?quality=85&strip=all&w=800&h=450&crop=1',
      description: 'A motorcyclist was killed in a crash near East 17th Avenue and Park Avenue in Denver early Friday morning.',
      url: 'https://kdvr.com/2019/09/27/motorcyclist-killed-in-crash-near-capitol-hill-in-denver/'
    }
  ];

    wrapper.instance().getFilteredNews(mockUserSearch);

    expect(wrapper.state('news')).toEqual(mockState)
  })
})
