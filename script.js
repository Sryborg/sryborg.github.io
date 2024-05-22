$(document).ready(function () {
    $('.list-group-item').on('click', function () {
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
        const sectionToShow = $(this).attr('href').replace('.html', '');
        $('section').hide();
        $(sectionToShow).show();
    });

    $('section').hide();
    $('#resume').show();
});
