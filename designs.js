$(function() {
  // Select color input
  let colorInput = $("#colorPicker"),
    submit = $('#submitSize'),
    emptyGrid = $("#clearGrid");
  // Select size input
  let heightInput = $("#input_height"),
    widthInput = $("#input_width");
  let color, height, width;
  const canvas = document.getElementById("pixel_canvas");
  emptyGrid.hide();
  // When size is submitted by the user, call makeGrid()
  height = heightInput.val(); width = widthInput.val(); color = colorInput.val();

  colorInput.on('change', function() {
    color = colorInput.val();
  });
  heightInput.on('change keypress', function() {
    height = Number(heightInput.val());
  });
  widthInput.on('change keypress', function() {
    width = Number(widthInput.val());
  });
  //end of event listeners for inputs

  function makeGrid() {

    for (var h = 0; h < height; h++) {
      let row = canvas.insertRow(h);

      for(var w = 0; w < width; w++) {
        let cell = row.insertCell(w);
      }
    }

  } //end of makeGrid function

  $('table').on('click', 'td', function() {
    $(this).css('background-color', color);
  });

  submit.click(function() {
    makeGrid();
    $(this).hide();
    emptyGrid.show();
  });

  emptyGrid.click(function() {
    $("#pixel_canvas").empty();
    $(this).hide();
    submit.show();
  });

});
