$.get(
  "https://api.ipdata.co?api-key=1e6228c85a45f48261476e0ef848f0e0ef684a4937154d4a15964de9",
  function (response) {
    $("#country_name").html(response.country_name);
    $("#city").html(response.city);
    if (response.city == null) {
      $(".location").html(response.country_name);
      $("#location").html(response.country_name);
    } else {
      $(".location").html(response.city + ", " + response.country_name);
      $("#location").html(response.city + ", " + response.country_name);
    }
    var cords = response.latitude + "," + response.longitude;

    var img_url = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${cords}&zoom=14&size=400x300&sensor=false&key=AIzaSyDw8kElM5rbCy94UxAjQqgApUMkucBfaxY&markers=color:red%7C${cords}">`;

    img_url = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${cords}&zoom=14&size=400x300&sensor=false&key=AIzaSyDw8kElM5rbCy94UxAjQqgApUMkucBfaxY&markers=color:red%7C${cords}&signature=ZwR3x0fnpHCmP95LX18AfwXrbgA=">`;

    $("#mapholder").html(img_url);
  },
  "jsonp"
);