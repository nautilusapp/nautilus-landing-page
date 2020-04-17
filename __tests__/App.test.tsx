import React from 'react';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';

// import components for testing
import TopNavBar from '../src/components/TopNavBar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import Team from '../src/components/Team';
import Community from '../src/components/Community';
import Download from '../src/components/Download';

configure({ adapter: new Adapter() });

describe('App Tests', () => {
  let wrapper: ShallowWrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  });
  it('should render TopNavBar component', () => {
    expect(wrapper.find(TopNavBar)).toHaveLength(1);
  });
  it('should render Hero component', () => {
    expect(wrapper.find(Hero)).toHaveLength(1);
  });
  it('should render Features component', () => {
    expect(wrapper.find(Features)).toHaveLength(1);
  });
  it('should render Team component', () => {
    expect(wrapper.find(Team)).toHaveLength(1);
  });
  it('should render Community component', () => {
    expect(wrapper.find(Community)).toHaveLength(1);
  });
  it('should render Download component', () => {
    expect(wrapper.find(Download)).toHaveLength(1);
  });
});
