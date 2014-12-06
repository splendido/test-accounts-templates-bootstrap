Template.options.helpers({
    options: function(){
        var config = AccountsTemplates.options;
        var options = [];
        for (var option in config){
            if (typeof config[option] === "boolean")
                options.push(option);
        }
        return options;
    },
    signup: function() {
        return AccountsTemplates.getState() === 'signUp';
    },
});

Template.option.helpers({
    checked: function(){
        return AccountsTemplates.options[this];
    },
});

Template.option.events({
    'click input': function(event) {
        var currTarg = event.currentTarget;
        var option = currTarg.id.slice(7); // Skips 'option-'
        AccountsTemplates.options[option] = !AccountsTemplates.options[option];
        AccountsTemplates._initialized = false;
        var fields = _.map(AccountsTemplates._fields, function(field){
                return _.pick(field, [
            "_id", "type", "required", "displayName", "placeholder", "minLength", "maxLength", "re", "func", "errStr",
            "continuousValidation", "negativeFeedback", "negativeValidation", "positiveValidation", "positiveFeedback",
            "trim", "lowercase", "uppercase"]);
        });
        fields = _.reject(fields, function(field){
            return field._id === "password_again" || field._id === "new_password_again";
        });
        AccountsTemplates._fields = fields;
        AccountsTemplates.init();
        $('div.at-form').remove();
        UI.insert(UI.render(Template.atForm), $('#atFormDiv').get(0));
    }
});