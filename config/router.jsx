FlowRouter.route('/',{
	name: "Home",
	action(params){
		renderLayoutWith(<Home />)
	}
});

FlowRouter.route('/login',{
	name:'loging',
	action(params){
		renderLayoutWith(<UserLogin />)
	}
})

FlowRouter.route('/sign-up',{
	name:'loging',
	action(params){
		renderLayoutWith(<UserSignup />)
	}
})

function renderLayoutWith(component){
	ReactLayout.render(Layout,{
		header: <Header />,
	content: component,
	footer:<Footer />
	})
}
