/*  Site-wide JS utility functions
*/

$(document).ready(function(){

  // Add smooth scrolling to all anchor links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // navigate to anchor links from URL
  var q = getUrlQuery ();
  //console.log (q['filter']);
  if (q['scrollto']) {
      $('html, body').animate({
        scrollTop: $('#' + q['scrollto']).offset().top
      }, 800, function(){
        window.location.hash = '#' + q['scrollto'];
      });
  }

  /* CONTACT FORM
  */
    var urlRegex = /(\/form_success|\/submit)/i;
    $('.contact').removeClass('contact-loading');
    if (!$('body').hasClass('edit-mode')) $('.contact').hide();
    if(urlRegex.test(window.location)) {
        $('.contact').slideDown( 'fast', function() {
            // Animation complete.
        });
    }

    $('.contact-open').click( function () {
       $('.contact').slideDown( 'fast', function() {
         // Animation complete.
       });
    });

    $('.contact-close').click( function () {
       $('.contact').slideUp( 'fast', function() {
         // Animation complete.
       });
    });



});

$(window).on('load', function(){
    // enable hidden elements
    $('.wait-for-js').addClass('js-loaded');
})

function getUrlQuery () {
    var vars = [], hash;
    var q = document.URL.split('?')[1];
    if(q != undefined){
        q = q.split('&');
        for(var i = 0; i < q.length; i++){
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    } else {
        return false;
    }
    return vars;
}
