$(function () {
    $('.z_collegedetails_1_5 li').click(function () {
        console.log($(this).index())
        $('.z_collegedetails_1_5 li').eq($(this).index()).find('.z_one').removeClass('z_black_color').addClass('z_red_color')
        $('.z_collegedetails_1_5 li').eq($(this).index()).find('.z_two').css({
            'color': 'rgba(255, 95, 104, 1)',
            'border-bottom': '3px solid rgba(255, 95, 104, 1)'
        })
        $('.z_collegedetails_1_5 li').eq($(this).index()).siblings().find('.z_one').removeClass('z_red_color').addClass('z_black_color')
        $('.z_collegedetails_1_5 li').eq($(this).index()).siblings().find('.z_two').removeClass('z_red_bo_line').css({
            'color': '#000000',
            'border-bottom': ' 3px solid #000000'
        })

    })
    $('.z_collegedetails_1_8_left_choose_1_con ul li').click(function () {
        console.log($(this).index())
        $('.z_collegedetails_1_8_left_choose_1_con ul li').eq($(this).index()).css({
            'border': '1px solid #e4e1e1',
            'box-shadow': '0px 0px 24px rgba(0,0,0,0.07)',
            'color': '#000000',
        }).find('span').css({
            'display':'inline-block'
        })
        $('.z_collegedetails_1_8_left_choose_1_con ul li').eq($(this).index()).siblings().css({
            'border': '0px',
            'box-shadow': 'none',
            'color': '#ADADAD',
        }).find('span').css({
            'display':'none'
        })
    })
    $('.z_collegedetails_1_8_left_choose_2_con ul li').click(function () {
        console.log($(this).index())
        $('.z_collegedetails_1_8_left_choose_2_con ul li').eq($(this).index()).css({
            'border': '1px solid #e4e1e1',
            'box-shadow': '0px 0px 24px rgba(0,0,0,0.07)',
            'color': '#000000',
        }).find('span').css({
            'display': 'inline-block'
        })
        $('.z_collegedetails_1_8_left_choose_2_con ul li').eq($(this).index()).siblings().css({
            'border': '0px',
            'box-shadow': 'none',
            'color': '#ADADAD',
        }).find('span').css({
            'display': 'none'
        })
    })
})