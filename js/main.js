"use strict";

var Nav = React.createClass({
	displayName: "Nav",

	render: function render() {
		return React.createElement(
			"nav",
			{ className: "navbar navbar-default" },
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					"div",
					{ className: "navbar-reader" },
					React.createElement(
						"a",
						{ href: this.props.linkUrl, className: "navbar-brand" },
						this.props.title
					)
				)
			)
		);
	}
});

var Title = React.createClass({
	displayName: "Title",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"h1",
					null,
					this.props.title
				)
			)
		);
	}
});

var Button = React.createClass({
	displayName: "Button",

	render: function render() {
		return React.createElement(
			"button",
			{ className: "btn btn-default" },
			"My button"
		);
	}

});

ReactDOM.render(React.createElement(Nav, { title: "React", linkUrl: "index.html" }), document.getElementById('nav'));

ReactDOM.render(React.createElement(Title, { title: "My component Title!" }), document.getElementById('title'));

ReactDOM.render(React.createElement(Button, null), document.getElementById('button'));