$(function () {
    //获取banner
    var banner = $('#banner');
    var cw = $(document).width();
    var bList = [
        {
            img: 'images/banner4.jpg',
            url: '#',
            selected: true
        },{
            img: 'images/banner4.jpg',
            url: '#',
            selected: false
        },{
            img: 'images/banner4.jpg',
            url: '#',
            selected: false
        },{
            img: 'images/banner4.jpg',
            url: '#',
            selected: false
        }
    ];
    var imgs = '', d = '';
    bList.map(function (value) {
        if (value.selected) {
            imgs += '<li class="active"><img src="'+value.img+'"></li>';
            d += '<li class="active"></li>'
        }else {
            imgs += '<li ><a href="'+value.url+'"><img src="'+value.img+'"></a></li>';
            d += '<li></li>'
        }
    });
    var bannerHtml = '<ul class="img">'+imgs+'</ul>'+'<ul class="dots">'+d+'</ul>';
    banner.append(bannerHtml);
    $('#banner ul.img li').width(cw)
    $('#banner ul.img').css('width', bList.length * $('#banner ul.img li').width())
})
