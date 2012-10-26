// This will improve our code to be more readable and shorter
// don't need the ms prefix as they only ship without this prefix
// future implementations like Opera will surely behave the same, correct here if not
window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
 
// Now we can open our database
var request = window.indexedDB.open("MyTestDatabase");

request.onerror = function(event) {
    console.debug("req error:", request.errorCode);
};
request.onsuccess = function(event) {
    console.debug("req result:", request.result);
    db = request.result;
    db.onerror = function(event) {
      // Generic error handler for all errors targeted at this database's
      // requests!
      alert("Database error: " + event.target.errorCode);
    };
};


