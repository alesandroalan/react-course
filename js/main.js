"use strict";

var data = [{ id: 3, name: "Maria", email: "maria@teste.com.br", subject: "R", messenger: "By: Maria - My messenger test." }, { id: 4, name: "Pedro", email: "pedro@teste.com.br", subject: "A", messenger: "By: Pedro - My messenger test." }];

var Page = React.createClass({
	displayName: "Page",

	getInitialState: function getInitialState() {
		return { data: [{ id: 1, name: "Maria", email: "maria@teste.com.br", subject: "R", messenger: "By: Maria - My messenger test." }, { id: 2, name: "Pedro", email: "pedro@teste.com.br", subject: "A", messenger: "By: Pedro - My messenger test." }] };
	},
	handleContactSubmit: function handleContactSubmit(contact) {
		console.log(contact);
		var newcontacts = this.state.data.concat([contact]);
		this.setState({
			data: newcontacts
		});
	},
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
					React.createElement(Form, { onContactSubmit: this.handleContactSubmit, idNumber: this.state.data.length + 1 })
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(List, { data: this.state.data })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));