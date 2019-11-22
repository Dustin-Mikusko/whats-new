import React from 'react';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewsArticle 
      title='Headline Title'
      description='Article description'
      img='url to image'
      url='link to article url'
      />
    );
  });

  it('should match the snapshot with all the prop data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
