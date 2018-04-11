// Execute script after page loads
$(function() {
    $('#sizePicker').on('submit', function(event) {
        // Clear the current grid
        $('#pixelCanvas').children().remove();
        // When size is submitted by the user, call makeGrid()
        makeGrid();
        // Prevent form submission from refreshing page and clearing grid
        event.preventDefault();
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
        };
            for (var j = 0; j < gridWidth; j++) {
                $('tr').append('<td></td>');
            };
    }
    // Set pixel color on click based on user selection
   $('#pixelCanvas').on('click', 'td', function() {
        let pixelColor = $('#colorPicker').val();
        $(this).css('background-color', pixelColor);
    })
})

