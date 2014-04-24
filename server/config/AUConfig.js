console.log('initializing AccountsUsers....');

AccountsUsers.removeField('email');
AccountsUsers.addField({
	name: 'email',
	displayName: "Email",
	type: 'email',
	re: ".+@(.+){2,}\\.(.+){2,}",
	errStr: 'Invalid email address!!!'
});

AccountsUsers.removeField('password');
AccountsUsers.addField({
	name: 'password',
	displayName: "Password",
	type: 'password',
	re: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}",
	errStr: 'at least 1 number, 1 lowercase and 1 uppercase letter, at least 6 characters'
});

AccountsUsers.addField({
	name: 'full-name',
	displayName: "Full Name (optional)",
	type: 'text',
	minLength: 5,
	maxLength: 30,
	errStr: 'Should be at least 5 characters, but no more than 30!'
});

AccountsUsers.addField({
	name: 'phone',
	displayName: "Phone (optional)",
	type: 'tel',
	re: "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
	errStr: 'Invalid Phone number!'
});

AccountsUsers.configure({
	showPlaceholder: false,
	displayFormLabels: true,
	continuousValidation: true
});

AccountsUsers.init();

console.log('Done!');
