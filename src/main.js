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
					</div>
				</customElement>
			);
		}
});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);