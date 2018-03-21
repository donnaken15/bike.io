    app.listen( gameport );

        //Log something so we know that it succeeded.
    console.log('\t :: Express :: Listening on port ' + gameport );

        //By default, we forward the / path to index.html automatically.
    app.get( '/', function( req, res ){ 
        res.sendfile( __dirname + '/simplest.html' );
    });


        //This handler will listen for requests on /*, any file from the root of our server.
        //See expressjs documentation for more info on routing.

    app.get( '/*' , function( req, res, next ) {

            //This is the current file they have requested
        var file = req.params[0]; 

            //For debugging, we can track what files are requested.
        if(verbose) console.log('\t :: Express :: file requested : ' + file);

            //Send the requesting client the file.
        res.sendfile( __dirname + '/' + file );

    }); //app.get *
