var data = [
	{id:1,name:"Maria",email:"maria@teste.com.br",subject:"R",messenger:"By: Maria - My messenger test."},
	{id:2,name:"Pedro",email:"pedro@teste.com.br",subject:"A",messenger:"By: Pedro - My messenger test."}

];

var Page = React.createClass({
		render: function(){
			return (
				<customElement>
					<Nav title="React" linkUrl="index.html" />
					<div className="container">
						<Title>
							My component Title!
						</Title>
						<div className="row">
							<Form />
							<Button textActive="Sending...">
								Send
							</Button>
						</div>
						<div className="row">
							<List data={data} />
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