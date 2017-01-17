var Nav = React.createClass({
	render:function(){
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-reader">
						<a href={ this.props.linkUrl } className="navbar-brand">
							{ this.props.title }
						</a>
					</div>
				</div>
			</nav>
		);
	}
});

var Title = React.createClass({
	render:function(){
		return (
			<div className="container">
				<div className="row">
					<h1>{this.props.title}</h1>
				</div>
			</div>
		);
	}
});

var Button = React.createClass({
	render: function(){
		return (
			<button className="btn btn-default">My button</button>
		);
	}

});

ReactDOM.render(
    <Nav title="React" linkUrl="index.html" />,
    document.getElementById('nav')
);

ReactDOM.render(
    <Title title="My component Title!" />,
    document.getElementById('title')
);

ReactDOM.render(
    <Button />,
    document.getElementById('button')
);