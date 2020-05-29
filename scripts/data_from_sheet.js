/*member columnName, password, user, results*/
 
var x;
 
if (form.load) {

  // set the user and OAuth to the google sheet.
    var headers = {"user":"userEmail","password":"OAuth"};

  // Set the query params
    var readquery = '/google/spreadsheets/query/key/sheetID?wsname=sheetName';
 
  // Query the sheet using the prams
    var results = http.get(readquery,headers);

  // Set the dropdown value to results
    Dropdown.value = results;

  // Attach the results to X
    eval('x=' + results);
   
  // Initilize a blank array 
    var opts = [''];

   // If the results exsists, then loop through and add options to the options array
    if (x.results) {
        for (var i = 0; i < x.results.length; i++) {
            if (x.results[i].columnName) {
                opts.push(x.results[i].columnName + '=' + x.results[i].columnName);
            }
        }
    }
  // Set the options of the dropdown. 
    Dropdown.options = opts;
}
