Template.options.helpers({
    signup: function() {
        return AccountsTemplates.getState() === 'sgup';
    },
    showPlaceholders: function(){
        return AccountsTemplates.ready() && ATFieldsCollection.findOne({name: 'config'}).showPlaceholders;
    },
    displayFormLabels: function(){
        return AccountsTemplates.ready() && ATFieldsCollection.findOne({name: 'config'}).displayFormLabels;
    },
    continuousValidation: function(){
        return AccountsTemplates.ready() && ATFieldsCollection.findOne({name: 'config'}).continuousValidation;
    },
    formValidationFeedback: function(){
        return AccountsTemplates.ready() && ATFieldsCollection.findOne({name: 'config'}).formValidationFeedback;
    },
});

Template.options.events({
    'click input#showPlaceholders': function() {
        var conf = ATFieldsCollection.findOne({
            name: 'config'
        });
        var state = conf.showPlaceholders;
        ATFieldsCollection.update({
            _id: conf._id
        }, {
            $set: {
                showPlaceholders: !state
            }
        });
    },
    'click input#displayFormLabels': function() {
        var conf = ATFieldsCollection.findOne({
            name: 'config'
        });
        var state = conf.displayFormLabels;
        ATFieldsCollection.update({
            _id: conf._id
        }, {
            $set: {
                displayFormLabels: !state
            }
        });
    },
    'click input#continuousValidation': function() {
        var conf = ATFieldsCollection.findOne({
            name: 'config'
        });
        var state = conf.continuousValidation;
        ATFieldsCollection.update({
            _id: conf._id
        }, {
            $set: {
                continuousValidation: !state
            }
        });
    },
    'click input#formValidationFeedback': function() {
        var conf = ATFieldsCollection.findOne({
            name: 'config'
        });
        var state = conf.formValidationFeedback;
        ATFieldsCollection.update({
            _id: conf._id
        }, {
            $set: {
                formValidationFeedback: !state
            }
        });
    },
});