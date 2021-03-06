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
	getInitialState: function(){
		return{name:'',email:'',subject:'R',messenger:''}
	},
	handleNameChange: function(e){
		this.setState({name: e.target.value});
	},
	handleEmailChange: function(e){
		this.setState({email: e.target.value});
	},
	handleSubjectChange: function(e){
		this.setState({subject: e.target.value});
	},
	handleMessengerChange: function(e){
		this.setState({messenger: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var name = this.state.name.trim();
		var email = this.state.email.trim();
		var subject = this.state.subject;
		var messenger = this.state.messenger.trim();

		if(!name || !email || !subject || !messenger){
			alert("Verifique todos os campos novamente!");
			return;
		}

		this.props.onContactSubmit({id:this.props.idNumber,email:email,name:name,subject:subject,messenger:messenger});
	},
	render: function(){
		var labelStyle = {
			color: "#607D8B"
		};
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="name" style={ labelStyle }>Name</label>
					<input type="text" className="form-control" id="name" onChange={this.handleNameChange} placeholder="Name"></input>
				</div>
				<div className="form-group">
					<label htmlFor="email" style={ labelStyle }>E-mail</label>
					<input type="email" className="form-control" id="email" placeholder="E-mail" onChange={this.handleEmailChange}></input>
				</div>
				<div className="form-group">
					<label htmlFor="subject" style={ labelStyle }>Assunto</label>
					<select className="form-control" id="subject" defaultValue={this.state.subject} onChange={this.handleSubjectChange}>
						<option value="A">AngularJS</option>
						<option value="J">JQuery</option>
						<option value="R">React</option>
					</select>
				</div>				
				<div className="form-group">
					<label htmlFor="messenger" style={ labelStyle }>Mensagem</label>
					<textarea className="form-control" id="messenger" rows="3" onKeyUp={this.handleMessengerChange}></textarea>
				</div>
				<Button textActive="Sending...">
					Send
				</Button>
			</form>
		);
	}
});

var Contact = React.createClass({
	render: function(){
		return(
			<tr>
				<th scope="row">{this.props.idContact}</th>
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>{this.props.subject}</td>
				<td>{this.props.children}</td>
			</tr>
		);
	}
});

var List = React.createClass({
	render: function(){
		var contactNodes = this.props.data.map(function(contact){
			return (
				<Contact idContact={contact.id} name={contact.name} email={contact.email}
				 subject={contact.subject}>
				 {contact.messenger}
				</Contact>
			);
		});
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>E-mail</th>
						<th>Assunto</th>
						<th>Messenger</th>
					</tr>
				</thead>
				<tbody>
					{contactNodes}
				</tbody>
			</table>
		);
	}
});