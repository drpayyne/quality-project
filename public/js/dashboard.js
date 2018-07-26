console.log(document.cookie);

$(document).ready(function() {
	console.log('DOCUMENT READY')

	if ($('#department_select option:selected').val() == 'HOQ') {
		console.log('HOQ SELECT')
		$('.hoq-only').css('display', 'block')
	}
	else {
		console.log('DEPARTMENT SELECT')
		$('.hoq-only').hide()
	}

	$('#department_select').change(function() {
		console.log('SELECT CLICKED')
		if ($('#department_select option:selected').val() == 'HOQ') {
			console.log('HOQ SELECT')
			$('.hoq-only').css('display', 'block')
		}
		else {
			console.log('DEPARTMENT SELECT')
			$('.hoq-only').hide()
		}
	})
})

function getSite(path) {

	console.log(document.getElementById('dept_cookie'));
	var username = document.getElementById('dept_cookie').value;

	var form = document.createElement("form");
    form.setAttribute("method", "post");
	form.setAttribute("action", "/dashboard");

	console.log(username);
	console.log(path);

	var hiddenField = document.createElement("input");

	if(username == 'HOQ') {
		console.log(document.getElementById('department_select').options);
		username = document.getElementById('department_select').options[document.getElementById('department_select').selectedIndex].text;
	}

	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "department");
	hiddenField.setAttribute("value", username);
	console.log(username);

	form.appendChild(hiddenField);

	hiddenField = document.createElement("input");

	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "path");

	if((username === 'HOQ') && (path === '/form/criterion2')) {
		hiddenField.setAttribute("value", "/form/criterion2hoq");
	} else {
		hiddenField.setAttribute("value", path);
	}

	form.appendChild(hiddenField);
    document.body.appendChild(form);
    form.submit();
}