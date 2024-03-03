$(document).ready(function() {
    let amenidadesSeleccionadas = {};
  
    $('input[type="checkbox"]').change(function() {
      let amenidadId = $(this).data('id');
      let amenidadNombre = $(this).data('name');
  
      if ($(this).is(':checked')) {
        amenidadesSeleccionadas[amenidadId] = amenidadNombre;
      } else {
        delete amenidadesSeleccionadas[amenidadId];
      }
  
      let listaAmenidades = Object.values(amenidadesSeleccionadas).join(', ');
      $('.amenities h4').text(listaAmenidades);
    });
  });
  