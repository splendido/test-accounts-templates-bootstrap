

// Set up login services
Meteor.startup(function() {

  // Remove configuration entries in case service is already configured
  ServiceConfiguration.configurations.remove({
    $or: [{
      service: "facebook"
    }, {
      service: "google"
    }, {
      service: "linkedin"
    }]
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "facebook",
    "appId": "512068832232435",
    "secret": "ada85e91fd1ad2e60d0d25923eacd123"
  });

  // Add Google configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "755514649356-f3b1l6u4a7tvn31eenomth890gvqaq4p.apps.googleusercontent.com",
    "client_email": "755514649356-f3b1l6u4a7tvn31eenomth890gvqaq4p@developer.gserviceaccount.com",
    "secret": "ymgZFtEve4OeYLRe8QhF3gIT"
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "linkedin",
    "clientId": "77pa4mwww7hvmw",
    "secret": "v7fYiQMLUwqGwQTI"
  });

});
