var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var AddTweetModal = createReactClass({
  getDefaultProps: function(){
    return{
      tweet: ''
    };
  },
  componentDidMount:function(){

    var modalMarkup = (
      <div id="add-tweet-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Please paste URL of tweet</h4>
        <p>
          <input type="text" tweet={tweet}/>
          <button className="button hollow" data-close="" >
            Add Tweet
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($("#add-tweet-modal"));
    modal.open();
  },
  render: function () {
    return (
      <div>
      </div>
    );
  }
});

export default AddTweetModal;
