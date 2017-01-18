"use strict";

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
					React.createElement(Form, null),
					React.createElement(Button, { title: "Send", textActive: "Sending..." })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));