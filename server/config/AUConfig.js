console.log('initializing....');

AccountsUsers.addField({
	name: 'first-name',
	type: 'text'
});


AccountsUsers.addField({
	name: 'last-name',
	type: 'text',
	minLength: 1,
	maxLength: 100,
});

AccountsUsers.init();