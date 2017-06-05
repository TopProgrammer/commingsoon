/**
 * Created by uworks on 2017/5/25.
 */
$(document).ready(function (e) {
    var debug = 0
    var ez_verify_code_size = 4
    var api_root = "http"+"://"+"verify.baixing.com.cn"
    var current_url = api_root+"/96878d17fe17a1fe2f7aa741791d1a9a:99ca21939c14f58d73055a4e69c7f1d8858b47bd.1495712828.js?mobi=n"
    var verify_url = current_url.replace(/\.js/,".valid")
    var image_url = current_url.replace(/\.js/,".jpg")
    var jsonp_flag = 1
    var mobi = 0

    var selector = '#' + 'ez-verify-code'

    image_url = "http://localhost:8088/user/getLoginCode?"+(new Date).getTime();

    "undefined"==typeof window.VCodeRefresh&&(window.VCodeRefresh=function(){"undefined"==typeof window.ez_verify_url&&(window.ez_verify_url=current_url.replace(/http:\/\/[^\/]+\//,"/"));$("script").each(function(){if($(this).attr("src")==window.ez_verify_url||$(this).attr("src")==current_url)return window.ez_verify_url=current_url.replace(/&rn=\w+/,"&rn="+Math.random().toString()),$("<script>").attr({type:"text/javascript",src:window.ez_verify_url}).appendTo("body"),$(this).remove(),!1})});



    var str ='<div id="ez-verify-panel">\
    <div id="ez-verify-head">\
        <h5 id="ez-verify-title">请在下方的键盘中依次点击 <i>7 - 3 - 9 - 4</i></h5>\
        <span id="ez-verify-input-panel"><input type="password" id="ez-verify-input" placeholder="点击九宫格输入" readonly="true"></span>\
\
        <div>\
            <a href="#" id="ez-verify-delete" style="display:none;"><b class="delete"></b> 删除</a>\
\
            <div id="ez-verify-tip"></div>\
        </div>\
        <div id="ez-verify-result"></div>\
\
    </div>\
\
    <div id="ez-verify-body">\
        <img id="ez-verify-image">\
    </div>\
\
    <div id="ez-verify-bottom">\
        <a href="#" id="ez-verify-refresh" style="display:none;"><b class="refresh"></b>刷新</a>\
    </div>\
</div>\
\
\
\
'
    $(selector).html(str)

    document.getElementById('ez-verify-image').src = image_url
    document.getElementById('ez-verify-title').src = image_url

    window.VCodeCallback=window.VCodeCallback||function(a){var b=$("#ez-verify-tip"),c="#ez-verify-code";if(0==a.ret){b.html('<span><b class="yes"> 验证成功</b></span>'),$("#ez-verify-delete").hide(),$("#ez-verify-code").removeClass("ez-fail"),$("#ez-verify-code").addClass("ez-success");var d=$("<input>").attr({type:"hidden",name:"ez_verify_sign",value:a.code});$(c).append(d),"function"==typeof window.VCodeCb&&window.VCodeCb("success")}else $("#ez-verify-code").removeClass("ez-success"),$("#ez-verify-code").addClass("ez-fail"),a.reload?(alert(a.error_msg),window.VCodeRefresh()):b.html('<span><b class="no"></b> '+a.error_msg+"</span>"),"function"==typeof window.VCodeCb&&window.VCodeCb("fail")},"undefined"==typeof window.VCodeBindEvent&&(window.VCodeBindEvent=function(){$("#ez-verify-input").keydown(function(a){$("#ez-verify-title").addClass("pt-page-moveCircle"),a.preventDefault()})}),"undefined"==typeof window.VCodeClickResponse&&(window.VCodeClickResponse=function(a){$("#ez-verify-input").attr("value",Array(a+1).join(" "))}),"undefined"==typeof window.VCodeClick&&(window.VCodeClick=function(a){var b="#ez-verify-code",c=a.pageX-$(a.target).offset().left|0,d=~~(a.pageY-$(a.target).offset().top),e=c+","+d+"|";if(void 0==$(this).data("counter")){$(this).data("counter",0),$(this).data("v_code","");var f=$("<input>").attr({type:"hidden",name:"ez_verify_code",value:""});$(b).append(f)}var g=$("input[name=ez_verify_code]").val();$(this).data("counter",(g.match(/\|/g)||[]).length);var h=$(this).data("counter");if(h==ez_verify_code_size)return!1;if(++h,h?$("#ez-verify-delete").show():$("#ez-verify-delete").hide(),window.VCodeClickResponse(h),$(this).data("counter",h),$("input[name=ez_verify_code]").val(g+e),$(this).data("counter")==ez_verify_code_size){var i=$("input[name=ez_verify_code]").val();if(debug&&console.log("result:",i),verify_url.indexOf("?")>-1)var j=verify_url+"&";else var j=verify_url+"?";return j+="data="+i,jsonp_flag&&(j+="&callback=?"),$.getJSON(j,null,function(a){window.VCodeCallback(a)}),!1}}),"undefined"==typeof window.VCodeDelete&&(window.VCodeDelete=function(){var a=$("input[name=ez_verify_code]").val();if(""==a)return!1;debug&&console.log("delete before:",a);var b=a.split("|");return b.pop(),curr=b.length,$("#ez-verify-input").attr("value",Array(curr).join(" ")),b.pop(),curr?($("#ez-verify-image").data("counter",--curr),curr?$("input[name=ez_verify_code]").val(b.join("|")+"|"):$("input[name=ez_verify_code]").val("")):($("#ez-verify-img").data("counter",0),$("input[name=ez_verify_code]").val("")),debug&&console.log("delete after:",$("input[name=ez_verify_code]").val()),!1}),mobi?($("#ez-verify-image").on("tap",window.VCodeClick),$("#ez-verify-delete").on("tap",window.VCodeDelete)):($("#ez-verify-image").on("click",window.VCodeClick),$("#ez-verify-delete").on("click",window.VCodeDelete));



});
