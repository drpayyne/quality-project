function getSite(path) {
    var method = "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
	form.setAttribute("action", "/dashboard");

	console.log(username);
	console.log(path);

	if(username == 'HOQ') {
		username = document.getElementById('department_select').options[document.getElementById('department_select').selectedIndex].text;
	}

    var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "department");
	hiddenField.setAttribute("value", username);

	form.appendChild(hiddenField);

	hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "path");

	if(username == 'HOQ' && path == '/form/criterion2') {
		hiddenField.setAttribute("value", "/form/criterion2hoq");
	} else {
		hiddenField.setAttribute("value", path);
	}


	form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
}