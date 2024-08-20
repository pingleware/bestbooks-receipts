document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Get the home directory path
    var homeDir = cordova.file.dataDirectory; // This is where data is typically stored in a sandboxed environment

    // Create the .bestbooks directory
    window.resolveLocalFileSystemURL(homeDir, function(dirEntry) {
        dirEntry.getDirectory('.bestbooks', { create: true }, function(subDirEntry) {
            // Now that .bestbooks directory exists, open or create the SQLite database here
            var dbPath = subDirEntry.toURL() + "receipts.db";
            var db = window.sqlitePlugin.openDatabase({name: dbPath, location: 'default'});

            // Example: Create a table
            db.transaction(function(tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS receipts (id INTEGER PRIMARY KEY, vendor TEXT, date TEXT, amount REAL)');
            }, function(error) {
                console.log('Transaction ERROR: ' + error.message);
            }, function() {
                console.log('Database setup successfully at: ' + dbPath);
            });
        }, function(error) {
            console.log('Error creating .bestbooks directory: ' + error.message);
        });
    }, function(error) {
        console.log('Error accessing file system: ' + error.message);
    });
}

function saveToDatabase(vendor, date, amount) {
    var db = window.sqlitePlugin.openDatabase({name: 'receipts.db', location: 'default'});
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO receipts (vendor, date, amount) VALUES (?, ?, ?)', [vendor, date, amount]);
    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Data saved to SQLite successfully!');
    });
}
