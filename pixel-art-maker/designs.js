// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function() {

// Clear the grid and create new grid
    $('#sizePicker').on('submit', function(event) {
        $('#pixelCanvas').children().remove();
        makeGrid();
        event.preventDefault();
    });

    function makeGrid() {
    // Get width and height values for creating grid
        let gridHeight = $('#inputHeight').val();
        let gridWidth = $('#inputWidth').val();

    // loop through grid values to create rows and cells
        for (var i = 1; i <= gridHeight; i++) {
            $('#pixelCanvas').append('<tr></tr>')
        };
        for (var j = 0; j < gridWidth; j++) {
            $('tr').append('<td></td>');
        };
    }
})

