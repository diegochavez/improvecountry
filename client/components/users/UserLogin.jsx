UserLogin = React.createClass({
	onSubmit(e){
		e.preventDefault();
		var self = this;

		var email = $(e.target).find("[name=email]").val();
		var password = $(e.target).find("[name=password]").val();

		Meteor.loginWithPassword(email,password, function(err){
			if(err){
				console.log(error.reason);

			}else{
				FlowRouter.go('Home');
			}
		})

	},
	render(){
		return(
			<div className="container">
				<div className="col-md-10">
					<h3>Login Page</h3>
					<form onSubmit={ this.onSubmit }>
						<input type="email" placeholder="Email" name="email" className="form-control"/>
						<input type="password" placeholder="Password" name="password" className="form-control"/>
						<button className="btn btn-raised btn-primary">Login</button>
					</form>
				</div>
			</div>
		)
	}
});
