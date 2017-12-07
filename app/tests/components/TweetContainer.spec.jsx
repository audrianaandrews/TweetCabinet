var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {TweetContainer} from 'TweetContainer';

describe('TweetContainer', () => {
  it('should exist', () => {
    expect(TweetContainer).toExist();
  });

  it('should call addTweetTag action on valid input', () => {
    var tagTest = 'funny';
    var e = jQuery.Event("keypress");
    e.keyCode = 188;

    var spy = expect.createSpy();
    var TweetContainer = TestUtils.renderIntoDocument(<TweetContainer addTweetTag={spy}/>);
    var $el = $(ReactDOM.findDOMNode(TweetContainer));

    TweetContainer.refs.newTag.value = newTag;
    TestUtils.Simulate.submit($el.find('input'));

    expect(spy).toHaveBeenCalledWith(newTag);
  });

});
