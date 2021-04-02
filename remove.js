db.getCollectionNames().forEach( function(collection_name) { 
    if (collection_name.indexOf("system.") == -1) {
        print ( ["Removing: ", db[collection_name].count({}), " documents from ", collection_name].join('') );
        db[collection_name].remove({}); 
    }
});
