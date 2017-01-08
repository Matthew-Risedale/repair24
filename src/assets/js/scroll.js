$(function(){
  $('nav a, .hamburger__menu a').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 600);
    return false;
  });

  $(".footer__link-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
