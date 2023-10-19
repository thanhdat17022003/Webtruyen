$(document).ready(function(){
    // Gọi hàm slick trên phần tử có class là list-suggest với các thiết lập tùy chọn
    $('.list-suggest').slick({
        slidesToShow: 6, // Số lượng slide hiển thị trên một trang
        slidesToScroll: 1, // Số lượng slide di chuyển khi nhấn nút next hoặc prev
        dots: true, // Hiển thị các chấm để chuyển trang
        arrows: true, // Hiển thị các nút mũi tên để chuyển trang
        infinite: true, // Cho phép lặp lại các slide khi đến cuối danh sách
        autoplay: true, // Tự động chuyển slide theo khoảng thời gian nhất định
        autoplaySpeed: 2000 // Khoảng thời gian chuyển slide (tính bằng mili giây)
       
    });

    // Gán sự kiện click cho nút mũi tên trái
    $('.prev').click(function(){
        // Chuyển sang slide trước
        $('.list-suggest').slick('slickPrev');
    });

    // Gán sự kiện click cho nút mũi tên phải
    $('.next').click(function(){
        // Chuyển sang slide sau
        $('.list-suggest').slick('slickNext');
    });
});