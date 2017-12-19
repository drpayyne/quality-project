/* var array_length = document.getElementsByName("row_val")[0].value;
console.log(array_length);
var i = array_length;
console.log('Array length : ' + i);
var table = document.all("table11"); */

/* function addNewRow() {
    if(i==5) {
        alert(1);
    } else {
        var newRow = document.all("table11").insertRow();
        i++;
        var oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='string' name='r11c1s"+i+"'>";
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' name='r11c2s"+i+"'>";
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' name='r11c3s"+i+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' name='r11c4s"+i+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' name='r11c5s"+i+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' name='r11c6s"+i+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' name='r11c7s"+i+"'>";				
        document.getElementsByName("row_val")[0].value = i;
    }
} */
/* function fillRows() {
    console.log('Filling ' + i + ' rows');
    var j;
    console.log(table);
    for(j=0; j<i; j++) {
        var newRow = table.insertRow();
        var oCell = newRow.insertCell();
        var k = j + 1;
        oCell.innerHTML = "<input type='text' value=form.pass_percent_dist[" + j + "].programme_title name='r11c1s"+k+"'>";
        var str = "form.pass_percent_dist[0].programme_title";
        oCell.value = str;
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' value=form.pass_percent_dist[" + j + "].students_appeared name='r11c2s"+k+"'>";
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' value=form.pass_percent_dist[" + j + "].division.distinction_percent name='r11c3s"+k+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' value=form.pass_percent_dist[" + j + "].division.percent_one name='r11c4s"+k+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' value=form.pass_percent_dist[" + j + "].division.percent_two name='r11c5s"+k+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' value=form.pass_percent_dist[" + j + "].division.percent_three name='r11c6s"+k+"'>";				
        oCell = newRow.insertCell();
        oCell.innerHTML = "<input type='number' value=form.pass_percent_dist[" + j + "].division.percent_pass name='r11c7s"+k+"'>";
    }
    document.getElementsByName("row_val")[0].value = i;
}

fillRows(); */