Router.configure({
    notFoundTemplate: 'pageNotFound',
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    yieldTemplates: {
        aside: {
            to: 'aside'
        },
        nav: {
            to: 'nav'
        },
        footer: {
            to: 'footer'
        },
    }
});

Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'homeMain',
        onBeforeAction: function(){setActiveLinks();}
    });

    this.route('fullPage', {
        path: '/full',
        template: 'fullPage',
        onBeforeAction: function(){setActiveLinks();}
    });

});
