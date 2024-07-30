$(document).ready(function() {
 // Tampilkan semua item secara default
 $('.event_outer').fadeIn();

 $('.event_filter a').click(function(e) {
     e.preventDefault(); // Mencegah perilaku default tautan
     var filterValue = $(this).attr('data-filter');
     
     if (filterValue == '*') {
         $('.event_outer').fadeOut(0).fadeIn(600); // Hide instantly then fade in
     } else {
         $('.event_outer').fadeOut(0); // Sembunyikan semua item
         $(filterValue).fadeIn(600); // Tampilkan item sesuai filter dengan animasi
     }

     $('.event_filter a').removeClass('is_active');
     $(this).addClass('is_active');

     return false; // Prevent default anchor click behavior
 });
});