var data = [
	{id:3,name:"Maria",email:"maria@teste.com.br",subject:"R",messenger:"By: Maria - My messenger test."},
	{id:4,name:"Pedro",email:"pedro@teste.com.br",subject:"A",messenger:"By: Pedro - My messenger test."}

];

var Page = React.createClass({
	getInitialState: function(){
		return{data:[
			{id:1,name:"Maria",email:"maria@teste.com.br",subject:"R",messenger:"By: Maria - My messenger test."},
			{id:2,name:"Pedro",email:"pedro@teste.com.br",subject:"A",messenger:"By: Pedro - My messenger test."}
		]}
	},
	handleContactSubmit: function(contact){
		console.log(contact);
		var newcontacts = this.state.data.concat([contact]);
		this.setState({
			data:newcontacts
		});
	},
	render: function(){
		return (
			<customElement>
				<Nav title="React" linkUrl="index.html" />
				<div className="container">
					<Title>
						My component Title!
					</Title>
					<div className="row">
						<Form onContactSubmit={this.handleContactSubmit} idNumber={this.state.data.length + 1} />
					</div>
					<div className="row">
						<List data={this.state.data} />
					</div>
				</div>
			</customElement>
		);
	}
});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);