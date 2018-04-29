// Select color input
const colorPicker = $('#colorPicker');
// Select size input
const sizePicker = $('#sizePicker');
// Execute script after page loads
$(function() {

    sizePicker.on('submit', function(event) {
        // Clear the current grid
        clearGrid();
        // When size is submitted by the user, call makeGrid()
        makeGrid();
        // Prevent form submission from refreshing page and clearing grid
        event.preventDefault();
    });

    $('#clearGrid').on('click', function() {
        clearGrid();
        makeGrid();
    });

    // Set pixel color on click based on user selection
   $('#pixelCanvas').on('click', 'td', function() {
        let pixelColor = $(colorPicker).val();
        $(this).css('background-color', pixelColor);
    });

    function makeGrid() {
        // Get user values for grid size and pixel color
        let gridHeight = $('#inputHeight').val();
        let gridWidth = $('#inputWidth').val();

        // Draw grid based on user values
        let i = 0;
        while (i < gridHeight) {
            $('#pixelCanvas').append('<tr></tr>');
            i++;
        }
            for (var j = 0; j < gridWidth; j++) {
                $('tr').append('<td></td>');
                $('td').css('background-color', '#ffffff');
            }
    }
    // Clear the grid
    function clearGrid() {
        $('#pixelCanvas').children().remove();
    }
});

