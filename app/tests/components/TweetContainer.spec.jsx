var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
import {shallow} from 'enzyme';

var {TweetCabinetApp} = require('TweetCabinetApp');

describe('TweetContainer', () => {
  it('should exist', () => {
    const app  = shallow(<TweetCabinetApp/>);
    expect(app.contains(<AddTweet />)).toBe(true);
    //expect(TweetContainer).toExist();
  });

  /*it('should call addTweetTag action on valid input', () => {
    var tagTest = 'funny';

    var spy = expect.createSpy();
    const app  = shallow(<App/>);
    var TweetContainer = TestUtils.renderIntoDocument(<TweetContainer addTweetTag={spy}/>);
    var $el = $(ReactDOM.findDOMNode(TweetContainer));

    TweetContainer.refs.newTag.value = newTag;
    TestUtils.Simulate.change(TweetContainer.refs.newTag.value);

    expect(spy).toHaveBeenCalledWith('funny');
  });*/

});
