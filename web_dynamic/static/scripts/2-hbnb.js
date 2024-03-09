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
  });
  