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
    $('.za_table_right_con').click(function(){
    console.log($(this).attr('data'))
        $('.z_list_of_articles').css({display:'none'})
        $('.z_list_of_articles_deatil').css({display:'block'})
    })
});