// Select color input
let colorInput = $("#colorPicker");
// Select size input
let heightInput = $("#input_height"),
  widthInput = $("#input_width");
let color, height, width;
const canvas = $("#pixel_canvas");
// When size is submitted by the user, call makeGrid()

colorInput.on('change', function() {
  color = colorInput.val();
});
heightInput.on('change', function() {
  height = heightInput.val();
});
widthInput.on('change', function() {
  width = widthInput.val();
});

function makeGrid() {
  
}
