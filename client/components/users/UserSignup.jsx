UserSignup = React.createClass({
	onSubmit(e){
		e.preventDefault();
		var self = this;

		var name = $(e.target).find('[name=name]').val();
		var email = $(e.target).find("[name=email]").val();
		var password = $(e.target).find("[name=password]").val();

		Accounts.createUser({
				name: name,
				email: email,
				password: password
		});
		FlowRouter.go('Home');

	},
	render(){
		return(
			<div className="container">
				<div className="col-md-10">
					<h3>Create Account</h3>
					<form onSubmit={ this.onSubmit }>
						<input type="text" placeholder="Name" name="name" className="form-control"/>
						<input type="email" placeholder="Email" name="email" className="form-control"/>
						<input type="password" placeholder="Password" name="password" className="form-control"/>
						<button className="btn btn-raised btn-primary">Login</button>
					</form>
				</div>
			</div>
		)
	}
})
