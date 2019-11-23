import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  let wrapper;
  let mockGetFilteredNews;

  beforeEach(() => {
    mockGetFilteredNews = jest.fn();
    wrapper = shallow(<SearchForm 
    getFilteredNews={mockGetFilteredNews}
    />)
  });

  it('should match the snapshot with the correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
