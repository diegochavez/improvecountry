Meteor.startup(() => {
	if (Meteor.users.find().count()===0){
		Accounts.createUser({
			name: "Diego Chavez",
			email: "diego@volumens.com",
			password: "123"
		})

	}
})
