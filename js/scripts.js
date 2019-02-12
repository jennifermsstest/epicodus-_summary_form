$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var foodInput = $("input#food").val();
    var musicInput= $("input#music").val();
    var colorInput = $("input#color").val();
    var animalInput = $("input#animal").val();

    $(".person1").text(person1Input);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".color").text(colorInput);
    $(".animal").text(animalInput);

    $("#story").show();

    event.preventDefault();
  });
});
