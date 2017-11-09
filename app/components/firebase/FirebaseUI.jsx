var React = require('react');
var firebase = require('firebase');
var firebaseui = require('firebaseui');


var authUi = new firebaseui.auth.AuthUI(firebase.auth());

export var FirebaseUI = React.createClass({
  componentDidMount: function() {
    var self = this;
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function(user) {
          if (self.props.onSignIn) {
            self.props.onSignIn(user);
          }
          return false;
        }
      },
      'signInOptions': [
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
      ]
    };
    authUi.start('#firebaseui-auth', uiConfig);
  },
  componentWillUnmount: function() {
    authUi.reset();
  },
  render: function() {
    return (
      <div id="firebaseui-auth">test</div>
    );
  }
});

module.exports = FirebaseUI;
