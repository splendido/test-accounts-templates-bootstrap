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
    });

    this.route('exposList', {
        path: '/expos',
        controller: 'ExposListController'
    });

    this.route('exposNextList', {
        path: '/nextexpos',
        controller: 'ExposNextListController'
    });

    this.route('exposShow', {
        path: '/expos/:_id',
        controller: 'ExposShowController'
    });

//ABEE:ADDROUTE

});