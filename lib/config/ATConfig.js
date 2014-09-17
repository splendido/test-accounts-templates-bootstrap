
AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'error.accounts.Invalid email',
    trim: true,
    lowercase: true,
});

/*
AccountsTemplates.addField({
    _id: "username_and_email",
    type: "text",
    displayName: "Name or Email",
    placeholder: "name or email",
});
*/


AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    displayName: {
        signIn: "Secret"
    },
    placeholder: {
        signUp: "at least six characters"
    },
    required: true,
    minLength: 6,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lowercase and 1 uppercase',
});

/*
AccountsTemplates.addField({
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
});
*/

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Full Name",
    //minLength: 5,
    //maxLength: 30,
    func: function(value){return value === 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
    trim: true,
});

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone",
    re: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    errStr: 'Invalid Phone number!',
});


AccountsTemplates.configure({
    confirmPassword: true,
    enablePasswordChange: true,
    overrideLoginErrors: true,
    sendVerificationEmail: true,

    showAddRemoveServices: true,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    
    privacyUrl: '/privacyPolicy',
    termsUrl: '/termsOfUse',

    continuousValidation: true,
    negativeFeedback: true,
    positiveFeedback: true,
    negativeValidation: true,
    positiveValidation: true,


    //title: {
    //    forgotPwd: "Pippo"
    //},
    //buttonText: {
    //    //forgotPwd: "Pippo",
    //    signUp: "Sign Up Now!"
    //},
});

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/signin',
    redirect: '/about',
    //redirect: function(){
    //    var user = Meteor.user();
    //    Router.go('/user/' + user._id);
    //}
});

AccountsTemplates.configureRoute('signUp', {
    name: 'signup',
    path: '/signup',
    redirect: '/profile',
    //layoutTemplate: 'simpleLayout',
});
AccountsTemplates.configureRoute('forgotPwd', {
    path: '/forgotpassword',
    layoutTemplate: 'simpleLayout',
});

//AccountsTemplates.configureRoute('changePwd' /*, {layoutTemplate: 'simpleLayout'}*/);
AccountsTemplates.configureRoute('resetPwd' /*, {layoutTemplate: 'simpleLayout'}*/);
AccountsTemplates.configureRoute('enrollAccount' /*, {layoutTemplate: 'simpleLayout'}*/);
AccountsTemplates.configureRoute('verifyEmail' /*, {layoutTemplate: 'simpleLayout'}*/);


Meteor.startup(function(){
    AccountsTemplates.init();
});


/*
if (Meteor.isServer){

    Accounts.validateLoginAttempt(function(attempt){
        if (attempt.error){
            var reason = attempt.error.reason;
            if (reason === "User not found" || reason === "Incorrect password")
                throw new Meteor.Error(403, "Login forbidden");
        }
        return attempt.allowed;
    });

    Accounts.validateLoginAttempt(function(attempt){
        if (!attempt.allowed)
            return false;
        // Possibly denies the access...
        if (attempt.user && attempt.user.failedLogins >= 2) // CHANGE ME!
            throw new Meteor.Error(403, "Account locked!");
        return true;
    });

    Accounts.onLogin(function(attempt){
        // Resets the number of failed login attempts
        Meteor.users.update(attempt.user._id, {$set: {failedLogins: 0}});
    });

    Accounts.onLoginFailure(function(attempt){
        if (attempt.user && attempt.error.reason === "Login forbidden") {
            // Increments the number of failed login attempts
            Meteor.users.update(attempt.user._id, {$inc: {failedLogins: 1}});
        }
    });

    Accounts.config({sendVerificationEmail: true});
}
*/
