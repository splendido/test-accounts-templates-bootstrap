
Template.profile.helpers({
	name: function(){
		return Meteor.user().profile.name;
	},
	email: function(){
		return Meteor.user().emails[0].address;
	},
	phone: function(){
		return Meteor.user().profile.phone;
	},
});