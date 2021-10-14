jQuery(document).ready(function($){
    function openmenumobile() {
        $('.open-moblie-menu').click(function() {
            $('.menu-tab-mobile').addClass('active');
            $('.bg-menu-mobile').addClass('active');
        })
        $('.tab-footer').click(function() {
            $('.menu-tab-mobile').removeClass('active');
            $('.bg-menu-mobile').removeClass('active');
        })
        $('.bg-menu-mobile').click(function() {
            $('.menu-tab-mobile').removeClass('active');
            $('.bg-menu-mobile').removeClass('active');
        })
    }
    function activeMenu() {
        $('.tab-nav').click(function() {
            $('.tab-account-mobile').hide();
            $('.tab-menu-mobile').show();
            $('.tab-nav').addClass('clicked');
            $('.tab-login').removeClass('clicked');
        })
        $('.tab-login').click(function() {
            $('.tab-account-mobile').show();
            $('.tab-login').addClass('clicked');
            $('.tab-nav').removeClass('clicked');
            $('.tab-menu-mobile').hide();
        })
        $('.reset-password').click(function() {
            $('.login-form-content').hide();
            $('.recover-password').show();
            $('.form-register').hide();
        })
        $('.link-to-login').click(function() {
            $('.login-form-content').show();
            $('.recover-password').hide();
            $('.form-register').hide();
        })
        $('.btn-to-register').click(function() {
            $('.login-form-content').hide();
            $('.recover-password').hide();
            $('.form-register').show();
        })
    }
    function autoslide() {
        $('.customer-wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            adaptiveHeight:true,
            slidesToScroll: 1,
        })
    }
    function product() {
        $('.nav-product').click(function (e) { 
            $(this).toggleClass('active');
            $(this).siblings().removeClass('active');
            
    
            for(let i=1; i<8;i++){
                k= Math.floor(Math.random() * 10) + 1
                $(`#product-${k}`).insertBefore(  $(`#product-${k}`).prev())
            }
            
        });
    }
    openmenumobile();
    activeMenu();
    autoslide();
    product()
})
 





