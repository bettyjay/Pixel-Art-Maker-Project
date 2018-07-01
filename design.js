//when size is submitted by the user, call makeGrid()

function makeGrid() {
    var height, width, row, column;
    width = $('#inputWidth').val();
    height = $('#inputHeight').val();
    row = "<tr></tr>";
    column = "<td></td>";
   //declaring the variables first.

for(n=1; n<height; n++){//build rows
    $('#pixelCanvas').append(row);
}
$('tr').each(function(){
for(m=1; m<width; m++){//build column
    $(this).append(column);
}
});
}
function clearGrid(){
$('#pixelCanvas').find('tr').remove();
};

//color pixel on clicking
$("#pixelCanvas").on('click','td',function(e){
	var color = $('#colorPicker').val();
    //color with specific color if not already colored
        $(this).css('background-color',color);
});
$("#sizePicker").submit(function(e){
    clearGrid();
    makeGrid();
    e.preventDefault();
});

