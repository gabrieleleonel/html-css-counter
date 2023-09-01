function btnAction(action) {
  var counterElement = parseInt($("#counterView").html());
  var response = 0;
  switch (action) {
    case 'add':
      response = counterElement + 1;
      break;
    case 'sub':
      response = counterElement - 1;
      if (response < 0) {
        response = 0;
        break;
      }
      break;
    default:
      response = 0;
      break;
  }
  $("#counterView").html(response)
}