var $ = require("jquery");
var React = require("react/addons");
var Parse = require("parse").Parse;
var ParseReact = require("parse-react");
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var history = ReactRouter.history;

Parse.initialize("MmYgZQAd00QfXfbP5jtaHGt5mDmUx1AfLTKZ5oR2", "0TFSWoSDVC8MowLriBVTj45LU2RW0HYvXSTENoqs");
// ParseReact.Mutation.Create("Comment", { text: "Parse and React work well together" }).dispatch();

var CommentBlock = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      comments: (new Parse.Query("Comment")).descending("createdAt")
    };
  },
  
  render: function() {
    return <ul>
      {this.data.comments.map(function(c) {
        return <li>{c.text} - {c.createdAt}</li>
      })}
    </ul>;
  }
});

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Home</h1>
				<CommentBlock />
			</div>
		);
	}
});


React.render(<App />, document.body);