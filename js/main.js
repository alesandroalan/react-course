"use strict";

var data = [{ id: 1, name: "Maria", email: "maria@teste.com.br", subject: "R", messenger: "By: Maria - My messenger test." }, { id: 2, name: "Pedro", email: "pedro@teste.com.br", subject: "A", messenger: "By: Pedro - My messenger test." }];

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
				React.createElement(
					Title,
					null,
					"My component Title!"
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(Form, null),
					React.createElement(
						Button,
						{ textActive: "Sending..." },
						"Send"
					)
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(List, { data: data })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));