# Creating a Unique Form ID for Frevvo Forms

Frevvo doesn't include a built in way to create an easy to use/customise form submission ID. For Audits and reccord keeping we needed one for our forms. 

We decided that we wanted the Date Time and userID to be included, but this can be adapted to include form ID as well. 



```{js}
// Create the of the form loading
var event = form.load;

// If the field is blank, create the ID
if (!(FormID.value)) {

  // not optimised code, but easy to understand. Create the date, extrat the peices put them to gether and set the value
	var date = new Date();
	var submitterName = _data.getParameter('subject.id');
	var year = date.getFullYear().toString();
	var month = (parseInt(date.getMonth(),10)+1).toString();
	var day = date.getDate().toString();
	var hour = date.getHours().toString();
	var minutes = date.getMinutes().toString();
	var seconds = date.getSeconds().toString();
	var mili = date.getMilliseconds().toString();
  
  // put the peices together
	var n = year+'-'+month+'-'+day+'-'+hour+':'+minutes+':'+seconds+':'+mili+' 'submitterName;
  
  // Set the field Value
	FormID.value = n;
}
```
