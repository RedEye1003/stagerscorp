"use strict";var WPFormsElementorFrontend=window.WPFormsElementorFrontend||function(o,r){var t={init:function(){t.events()},events:function(){r(o).on("elementor/popup/show",function(e,o,n){o=r("#elementor-popup-modal-"+o).find(".wpforms-form");o.length&&t.initFields(o)})},initFields:function(e){wpforms.ready(),"undefined"!=typeof wpformsModernFileUpload&&wpformsModernFileUpload.init(),"undefined"!=typeof wpformsRecaptchaLoad&&("recaptcha"===wpformsElementorVars.captcha_provider&&"v3"===wpformsElementorVars.recaptcha_type?"undefined"!=typeof grecaptcha&&grecaptcha.ready(wpformsRecaptchaLoad):wpformsRecaptchaLoad()),r(o).trigger("wpforms_elementor_form_fields_initialized",[e])}};return t}(document,(window,jQuery));WPFormsElementorFrontend.init();
let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed" : 400,
    "nav" : false,
    controlsContainer: "#controls",
    prevButton : ".previous",
    nextButton : ".next",
    responsive: {
        1600: {
            item: 6,
            gutter:20
        },
        1024: {
            item:3,
            gutter:20
        },
        768: {
            item:3,
            gutter:20
        },
        480:{
            item:1,
        }
    }
})