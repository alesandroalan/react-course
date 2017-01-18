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
		var titleStyle = {
			color: "#607D8B"
		};
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"h1",
				{ style: titleStyle },
				this.props.children
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
		var title = this.state.click ? this.props.textActive : this.props.children;
		return React.createElement(
			"button",
			{ onClick: this.toggleClick, className: btnClass },
			title
		);
	}

});

var Form = React.createClass({
	displayName: "Form",

	render: function render() {
		var labelStyle = {
			color: "#607D8B"
		};
		return React.createElement(
			"form",
			null,
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "name", style: labelStyle },
					"Name"
				),
				React.createElement("input", { type: "text", className: "form-control", id: "name", placeholder: "Name" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "email", style: labelStyle },
					"E-mail"
				),
				React.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "E-mail" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "subject", style: labelStyle },
					"Assunto"
				),
				React.createElement(
					"select",
					{ className: "form-control", id: "subject", defaultValue: "R" },
					React.createElement(
						"option",
						{ value: "A" },
						"AngularJS"
					),
					React.createElement(
						"option",
						{ value: "J" },
						"JQuery"
					),
					React.createElement(
						"option",
						{ value: "R" },
						"React"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "messenger", style: labelStyle },
					"Mensagem"
				),
				React.createElement("textarea", { className: "form-control", id: "messenger", rows: "3" })
			)
		);
	}
});

var Contact = React.createClass({
	displayName: "Contact",

	render: function render() {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"th",
				{ scope: "row" },
				this.props.idContact
			),
			React.createElement(
				"td",
				null,
				this.props.name
			),
			React.createElement(
				"td",
				null,
				this.props.email
			),
			React.createElement(
				"td",
				null,
				this.props.subject
			),
			React.createElement(
				"td",
				null,
				this.props.children
			)
		);
	}
});

var List = React.createClass({
	displayName: "List",

	render: function render() {
		var contactNodes = this.props.data.map(function (contact) {
			return React.createElement(
				Contact,
				{ idContact: contact.id, name: contact.name, email: contact.email,
					subject: contact.subject },
				contact.messenger
			);
		});
		return React.createElement(
			"table",
			{ className: "table" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Id"
					),
					React.createElement(
						"th",
						null,
						"Name"
					),
					React.createElement(
						"th",
						null,
						"E-mail"
					),
					React.createElement(
						"th",
						null,
						"Assunto"
					),
					React.createElement(
						"th",
						null,
						"Messenger"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				contactNodes
			)
		);
	}
});