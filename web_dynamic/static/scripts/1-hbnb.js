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
  });
  