/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

function switchImages( newImagePath ) {
  var logo = $( "#logo" );

  logo.fadeOut( 300, function() {
    logo.attr( "src", newImagePath );
    logo.fadeIn( 300 );
  } );
}

$( document ).ready( function() {
  var $window = $( window ),
      mainHeader = $( "#main-header" ),
      defaultLogo = "images/logo.svg",
      smallLogo = "images/logo-shrink.svg";

  $window.scroll( function() {
    if ( $window.scrollTop() > 100 ) {
      if ( !mainHeader.hasClass( "shrink" ) ) {
        mainHeader.addClass( "shrink" );
        switchImages( smallLogo );
      } else {
        if ( mainHeader.hasClass( "shrink" ) ) {
          mainHeader.removeClass( "shrink" );
          switchImages( defaultLogo );
        }
      }
    }
  } );
} );
