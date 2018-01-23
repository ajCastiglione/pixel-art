$(function() {
  // Select color input
  let colorInput = $("#colorPicker"),
    submit = $('#submitSize'),
    emptyGrid = $("#clearGrid");
  // Select size input
  let heightInput = $("#input_height"),
    widthInput = $("#input_width");
  let color, height, width;
  const canvas = $("#pixel_canvas");
  emptyGrid.hide();
  // When size is submitted by the user, call makeGrid()
  height = heightInput.val(); width = widthInput.val();

  colorInput.on('change', function() {
    color = Number(colorInput.val());
  });
  heightInput.on('change keypress', function() {
    height = Number(heightInput.val());
  });
  widthInput.on('change keypress', function() {
    width = Number(widthInput.val());
  });

  function makeGrid() {
    let tr = $("<tr></tr>"),
      td = $("<td></td>");

    for (var i = 0; i < height; i++) {
      canvas.append(tr);
    }
    for (var w = 0; w < width; w++) {
      canvas.find('tr').append(td);
    }
  }

  submit.click(function() {
    makeGrid();
    $(this).hide();
    emptyGrid.show();
  });

  emptyGrid.click(function() {
    canvas.empty();
    $(this).hide();
    submit.show();
  });

});
