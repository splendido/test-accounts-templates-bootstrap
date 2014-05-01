Template.nav.rendered = function(){
    setActiveLinks();
}

Template.nav.helpers({
    currLang: function(){
        return T9n.getLanguage().toUpperCase();
    },
});

Template.nav.events({
    'click a.setlang': function(event){
        console.log('Changing language');
        event.preventDefault();
        var currTarg = event.currentTarget;
        var lang = currTarg.id.slice(5); // Skips 'lang-'
        T9n.setLanguage(lang);
    },
});