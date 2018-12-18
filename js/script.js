$( document ).ready(function(){
    var userFeed = new Instafeed({
        get: 'user',
        userId: '8797922497',
        clientID: 'c8c56e4aa81c41cf815da141fc7ea9cd',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '8797922497.1677ed0.49a1248f1fc746b2850be53a3bef0d9c',
        sortBy: 'most-recent',
        template: '<div class="gallery col-md-6 col-md-offset-1"><a href="{{image}} title="{{caption}}" target="_blank"><img src={{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();
});