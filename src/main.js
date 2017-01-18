var Page = React.createClass({
		render: function(){
			return (
				<customElement>
					<Nav title="React" linkUrl="index.html" />
					<div className="container">
						<Title title="My component Title!" />
						<div className="row">
							<Button title="Your Button" textActive="Loading..." />
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