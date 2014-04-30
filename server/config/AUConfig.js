
AccountsTemplates.removeField('login');
AccountsTemplates.addField({
    name: 'login',
    displayName: "Email",
    type: 'email',
    re: ".+@(.+){2,}\\.(.+){2,}",
    errStr: 'Invalid email address!!!',
    rowOrder: 0
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    name: 'password',
    displayName: "Password",
    type: 'password',
    re: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}",
    errStr: 'at least 1 number, 1 lowercase and 1 uppercase letter, at least 6 characters',
    rowOrder: 1
});

AccountsTemplates.addField({
    name: 'name',
    displayName: "Full Name (optional)",
    type: 'text',
    minLength: 5,
    maxLength: 30,
    errStr: 'Should be at least 5 characters, but no more than 30!',
    rowOrder: 2
});

AccountsTemplates.addField({
    name: 'phone',
    displayName: "Phone (optional)",
    type: 'tel',
    re: "^[(]{0,1}[0-9]{3}[)]{0,1}[-\\s\\.]{0,1}[0-9]{3}[-\\s\\.]{0,1}[0-9]{4}$",
    errStr: 'Invalid Phone number!',
    rowOrder: 3
});

AccountsTemplates.configure({
    showPlaceholders: true,
    displayFormLabels: true,
    continuousValidation: true
});

AccountsTemplates.init();


// --------------------------------------------------------------------------------
// Only for this demo allows client-side modification of the configuragion document
// --------------------------------------------------------------------------------

ATFieldsCollection.allow({
    update: function(userId, doc, fieldNames, modifier){
        if (doc.name !== 'config' || 'name' in fieldNames)
            return false;
        return true;
    }
})