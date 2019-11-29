
$(function () {
    /**
     * prevent default
     * using the custom class.
     */
    $(".prevent-default").on("click", function (e) {
        e.preventDefault();
    });

    /**
     * contact form
     */
    $("#contact-form").on("submit", function () {

        /**
         * logic to make AJAX call to some RESTful API
         * goes here...
         */

        return false;
    });

});