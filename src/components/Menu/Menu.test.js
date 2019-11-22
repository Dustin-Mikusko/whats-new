import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  let wrapper;
  let changeNewsMock;

  beforeEach(() => {
    changeNewsMock = jest.fn();
    wrapper = shallow(<Menu
      changeNews={changeNewsMock}
    />);
  })

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call highlightSelection and changeNews when submitSelection is called ', () => {
    const mockEvent = { target: { dataset: { id: 'local' } } };
    
    wrapper.instance().highlightSelection = jest.fn();

    wrapper.instance().submitSelection(mockEvent);

    expect(changeNewsMock).toHaveBeenCalledWith('local');
  })

})
