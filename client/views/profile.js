
Template.profile.helpers({
	name: function(){
		var user = Meteor.user();
		if (user && user.profile)
			return user.profile.name;
		return '';
	},
	email: function(){
		var user = Meteor.user();
		if (user.emails && user.emails[0])
			return Meteor.user().emails[0].address;
	},
	phone: function(){
		var user = Meteor.user();
		if (user && user.profile)
			return Meteor.user().profile.phone;
		return '';
	},
});