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
			{ className: "row" },
			React.createElement(
				"h1",
				null,
				this.props.title
			)
		);
	}
});

var Button = React.createClass({
	displayName: "Button",

	getInitialState: function getInitialState() {
		return {
			click: false
		};
	},
	toggleClick: function toggleClick() {
		this.setState({
			click: !this.state.click
		});
	},
	render: function render() {
		var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
		var title = this.state.click ? this.props.textActive : this.props.title;
		return React.createElement(
			"button",
			{ onClick: this.toggleClick, className: btnClass },
			title
		);
	}

});

var Page = React.createClass({
	displayName: "Page",

	render: function render() {
		return React.createElement(
			"customElement",
			null,
			React.createElement(Nav, { title: "React", linkUrl: "index.html" }),
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(Title, { title: "My component Title!" }),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(Button, { title: "Your Button", textActive: "Loading..." })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));