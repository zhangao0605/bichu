$(function () {
    var pageNo = 1
    var totalPage = 150
    var totalRecords = 1
    //���ɷ�ҳ
    //��Щ�����ǿ�ѡ�ģ�����lang����������Ĭ��ֵ
    kkpager.generPageHtml({
        pno: pageNo,
        //��ҳ��
        isGoPage: false,
        isShowTotalPage: false,
        isShowTotalRecords: false,
        total: totalPage,
        //����������
        totalRecords: totalRecords,
        mode: 'click',//Ĭ��ֵ��link����ѡlink����click
        click: function (n) {
            // do something
            //�ֶ�ѡ�а�ť
            this.selectPage(n);
            return false;
        }
        /*
         ,lang				: {
         firstPageText			: '��ҳ',
         firstPageTipText		: '��ҳ',
         lastPageText			: 'βҳ',
         lastPageTipText			: 'βҳ',
         prePageText				: '��һҳ',
         prePageTipText			: '��һҳ',
         nextPageText			: '��һҳ',
         nextPageTipText			: '��һҳ',
         totalPageBeforeText		: '��',
         totalPageAfterText		: 'ҳ',
         currPageBeforeText		: '��ǰ��',
         currPageAfterText		: 'ҳ',
         totalInfoSplitStr		: '/',
         totalRecordsBeforeText	: '��',
         totalRecordsAfterText	: '������',
         gopageBeforeText		: '?ת��',
         gopageButtonOkText		: 'ȷ��',
         gopageAfterText			: 'ҳ',
         buttonTipBeforeText		: '��',
         buttonTipAfterText		: 'ҳ'
         }*/
    }, true);
    $('.za_table_right_con').click(function () {
        console.log($(this).attr('data'))
        $('.z_list_of_articles,.z_first').css({display: 'none'})
        $('.z_list_of_articles_deatil').css({display: 'block'})
        $('body').addClass('z_de_bg')
        $('.z_isshowDETAIL').css({display: 'inline-block'})
        $('html,body').animate({scrollTop: 0}, 'fast')
    })
    $('.z_tbable_click_1 li').click(function () {
        console.log($(this).index())
        $('.z_tbable_click_1 li').eq($(this).index()).addClass('z_bo_line_red').find('div').addClass('z_bo_line_block').removeClass('z_bo_line_none')
        $('.z_tbable_click_1 li').eq($(this).index()).siblings().removeClass('z_bo_line_red').find('div').removeClass('z_bo_line_block').addClass('z_bo_line_none')
    })
    $('.z_navbarto').click(function () {
        $('html,body').animate({scrollTop: 0}, 'slow')
        console.log($(this).attr('data'))
        if ($(this).attr('data') == 2) {
            $('.z_list_of_articles,.z_first').css({display: 'block'})
            $('.z_list_of_articles_deatil').css({display: 'none'})
            $('body').removeClass('z_de_bg')
            $('.z_isshowDETAIL').css({display: 'none'})
            // $('html,body').animate({scrollTop:0},'fast')
        } else if ($(this).attr('data') == 1) {

        } else if ($(this).attr('data') == 0) {

        }
    })
});