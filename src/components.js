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
		var titleStyle = {
			color: "#607D8B"
		};
		return (
			<div className="row">
				<h1 style={ titleStyle }>{this.props.children}</h1>
			</div>
		);
	}
});

var Button = React.createClass({
	getInitialState: function(){
		return {
			click: false
		};
	},
	toggleClick: function(){
		this.setState({
			click: !this.state.click
		});	
	},
	render: function(){
		var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
		var title = this.state.click ? this.props.textActive : this.props.children;
		return (
			<button onClick={ this.toggleClick } className={ btnClass }>{ title }</button>
		);
	}

});

var Form = React.createClass({
	render: function(){
		var labelStyle = {
			color: "#607D8B"
		};
		return (
			<form>
				<div className="form-group">
					<label htmlFor="name" style={ labelStyle }>Name</label>
					<input type="text" className="form-control" id="name" placeholder="Name"></input>
				</div>
				<div className="form-group">
					<label htmlFor="email" style={ labelStyle }>E-mail</label>
					<input type="email" className="form-control" id="email" placeholder="E-mail"></input>
				</div>
				<div className="form-group">
					<label htmlFor="subject" style={ labelStyle }>Assunto</label>
					<select className="form-control" id="subject" defaultValue="R">
						<option value="A">AngularJS</option>
						<option value="J">JQuery</option>
						<option value="R">React</option>
					</select>
				</div>				
				<div className="form-group">
					<label htmlFor="messenger" style={ labelStyle }>Mensagem</label>
					<textarea className="form-control" id="messenger" rows="3"></textarea>
				</div>
			</form>
		);
	}
});