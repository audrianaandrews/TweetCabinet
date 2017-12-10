var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import TweetCabinetApp from 'TweetCabinetApp';
import Login from 'Login';
var {NotFound} = require('NotFound');

export var Routes = React.createClass({
  render: function () {
    var {dispatch, user} = this.props;
    return (
      <Router>
          <Switch>
          <Route exact path="/" render={() =>(
          user ? ( <Route  component={TweetCabinetApp} />)
          : (<Route component={Login} />)
        )} />

      </Switch>

       </Router>
    )
  }
});
//<Route exact path="/404" component={NotFound}/>
export default connect(
  (state) => {
    return {
      user: state.user
    }
  }
)(Routes);
