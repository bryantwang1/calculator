var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


$(function() {
  var result;
  var number1;
  var number2;

  $("form#add").submit(function(event) {
    event.preventDefault();
    number1 = parseInt($("#add1").val());
    number2 = parseInt($("#add2").val());

    result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    number1 = parseInt($("#subtract1").val());
    number2 = parseInt($("#subtract2").val());

    result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    number1 = parseInt($("#multiply1").val());
    number2 = parseInt($("#multiply2").val());

    result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    number1 = parseInt($("#divide1").val());
    number2 = parseInt($("#divide2").val());

    result = divide(number1, number2);
    $("#output").text(result);
  });
});
