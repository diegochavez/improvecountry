Header = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		return{
			currentUser: Meteor.user()
		}
	},
	handleLogout(){
	Meteor.logout();
	},
	render(){
		let loginButton;
		let { currentUser } = this.data;

		if(currentUser){
			loginButton = (
				<li><a onClick={this.handleLogout}>Logout</a></li>
			)
		}else{
			loginButton = (
				<li><a href="/login">Login</a></li>
			)
		}

		return(
			<nav className="navbar navbar-default  navbar-fixed-top">
		         <div className="container-fluid">
		           {/* Brand and toggle get grouped for better mobile display */}
		           <div className="navbar-header">
		             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		               <span className="sr-only">Toggle navigation</span>
		               <span className="icon-bar" />
		               <span className="icon-bar" />
		               <span className="icon-bar" />
		             </button>
		             <a className="navbar-brand" href="/">Improve Country</a>
		           </div>
		           {/* Collect the nav links, forms, and other content for toggling */}
		           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		             <ul className="nav navbar-nav">
		               <li><a href="#">Link</a></li>
		             </ul>
		             <ul className="nav navbar-nav navbar-right">
		               { loginButton }
		             </ul>
		           </div>{/* /.navbar-collapse */}
		         </div>{/* /.container-fluid */}
		       </nav>
		)
	}
})
