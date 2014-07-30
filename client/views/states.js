Template.states_options.helpers({
    active: function(){
        if (AccountsTemplates.getState() === this.toString())
            return 'active';
    },
    states: function(){
        return AccountsTemplates.STATES;
    },
});

Template.states_options.events({
    'click button': function(event) {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.blur();
        try {
           AccountsTemplates.setState(this.toString());
        }
        catch(err) {
            alert('Invalid State!');
        }
    }
});