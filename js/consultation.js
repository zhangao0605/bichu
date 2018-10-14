$(function () {
    var pageNo = 1
    var totalPage = 150
    var totalRecords = 1
    //生成分页
    //有些参数是可选的，比如lang，若不传有默认值
    kkpager.generPageHtml({
        pno: pageNo,
        //总页码
        isGoPage: false,
        isShowTotalPage: false,
        isShowTotalRecords: false,
        total: totalPage,
        //总数据条数
        totalRecords: totalRecords,
        mode: 'click',//默认值是link，可选link或者click
        click: function (n) {
            // do something
            //手动选中按钮
            this.selectPage(n);
            return false;
        }
        /*
         ,lang				: {
         firstPageText			: '首页',
         firstPageTipText		: '首页',
         lastPageText			: '尾页',
         lastPageTipText			: '尾页',
         prePageText				: '上一页',
         prePageTipText			: '上一页',
         nextPageText			: '下一页',
         nextPageTipText			: '下一页',
         totalPageBeforeText		: '共',
         totalPageAfterText		: '页',
         currPageBeforeText		: '当前第',
         currPageAfterText		: '页',
         totalInfoSplitStr		: '/',
         totalRecordsBeforeText	: '共',
         totalRecordsAfterText	: '条数据',
         gopageBeforeText		: '?转到',
         gopageButtonOkText		: '确定',
         gopageAfterText			: '页',
         buttonTipBeforeText		: '第',
         buttonTipAfterText		: '页'
         }*/
    }, true);
    $('.za_table_right_con').click(function(){
    console.log($(this).attr('data'))
        $('.z_list_of_articles').css({display:'none'})
        $('.z_list_of_articles_deatil').css({display:'block'})
    })
});