

function mask(opacity) {

    if (opacity == 0) {

        $('#mask').hide()
        $('.mask_over').hide()

    } else {

        //$('#mask').css({ 'width': $(window).width(), 'height': $(window).height() })
        $('#mask').stop().fadeTo('slow', opacity);  //$('#mask').fadeIn(1000)
        $('#mask').show()

    }

}


$(document).ready(function() {

    /*
             CONTACT
                             */
             $('.contact_button').bind('click', function() {
                mask(0.5)
                var type = $(this).data('type')
                $('#contact_'+type).show()
            })
        

            

})