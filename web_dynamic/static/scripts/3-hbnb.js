$(document).ready(function() {
    let amenitiesChecked = {};
  
    $('div.amenities input[type="checkbox"]').change(function() {
      let amenityId = $(this).data('id');
      let amenityName = $(this).data('name');
  
      if ($(this).is('checked')) {
        amenitiesChecked[amenityId] = amenityName;
      } else {
        delete amenitiesChecked[amenityId];
      }
  
      let amenitiesList = Object.values(amenitiesChecked).join(', ');
      $('.amenities h4').text(amenitiesList);
    });

    $.get('http://0.0.0.0:5001/api/v1/status/', function(data, textStatus) {
      if (textStatus === 'success' && data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }).fail(function() {
      $('#api_status').removeClass('available');
    });

    $('button').click(function() {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function(data) {
                $('.places').empty();
                data.forEach(function(place) {
                    let article = '<article>' +
                                    '<div class="title_box">' +
                                        '<h2>' + place.name + '</h2>' +
                                        '<div class="price_by_night">$' + place.price_by_night + '</div>' +
                                    '</div>' +
                                    '<div class="information">' +
                                        '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div>' +
                                        '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div>' +
                                        '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div>' +
                                    '</div>' +
                                    '<div class="description">' +
                                        place.description +
                                    '</div>' +
                                  '</article>';
                    $('.places').append(article);
                });
            }
        });
    });
});
