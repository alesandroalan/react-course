var Page = React.createClass({
		render: function(){
			return (
				<customElement>
					<Nav title="React" linkUrl="index.html" />
					<div className="container">
						<Title title="My component Title!" />
						<div className="row">
							<Form />
							<Button title="Send" textActive="Sending..." />
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