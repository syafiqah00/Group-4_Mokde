document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //open the database
    db = window .sqlitePlugin.openDatabase(
        {name: 'mokde.db', location:'default'},
        function() {
            alert("Everything is setup!");
        },
        function() {
            alert("DB Failed to open!");
        }
    );

    //create a table
    db.transaction(
        function(tx) {
            var query="CREATE TABLE IF NNOT EXISTS studentTb1 ( nickname TEXT NOT NULL, username TEXT NOT NULL, psw TEXT NOT NULL)"
            tx.executeSql(query, []),
                function(tx, result) {
                    alert("Table created successfully!");
            },
            function(err) {
                alert("error occured:" +err.code)
            }
        }
    )
}