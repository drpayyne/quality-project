function addRow()
{
    //add a row to the rows collection and get a reference to the newly added row
    var newRow = document.all("table11").insertRow();

    //to change id dynamically

    var dy_name = 1;
    i++;

    //add 3 cells (<td>) to the new row and set the innerHTML to contain text boxes

    var oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' name="'r11c1s'+dy_name+">";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='number' name="'r11c2s'+dy_name+">";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='number' name="'r11c3s'+dy_name+">";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='number' name="'r11c4s'+dy_name+">";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='number' name="'r11c5s'+dy_name+">";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='number' name="'r11c6s'+dy_name+">";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='number' name="'r11c7s'+dy_name+">";

}
