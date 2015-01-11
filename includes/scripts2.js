/**
 * Created by BENARI on 20/12/2014.
 */

var hashInd = window.location.hash;


$( window ).load(function() {
    // in order to add a button use appendToDiv variable and put all the string to append into dynamic-element
    // and also use requestedHeight to give the right height you want the dynamic element to have.
    // set tooltip for buttons
    $('#popNames').append("<p>1</p>").append("<span> שמות נפוצים לילדים </span>");
    $('#whyColors').append("<p>2</p>").append("<span> למה בנים בכחול ובנות בורוד  </span>");
    $('#tradition').append("<p>3</p>").append("<span> רגע של מסורת </span>");

    var boyNames = {};
    var girlNames = {};
    var popularNameYears = [];
    var pplObj = {};
    var traditionText;
    var elementClicked = "";
    //
    // Load json
    //
    $.getJSON("./json/pop_name.json", function(json) {
        boyNames = json.popularName.boysName;
        girlNames = json.popularName.girlsName;
        popularNameYears = json.popularName.years;
        pplObj = json.pplObj;
        traditionText = json.tradition;
    });
    $(".clickable").click(function(){
        // appendToDiv = text to append into dynamic Element
        // requestedHeigh is the height of the dynamic element
        if(elementClicked == this.id){
            disappearMainDiv(true);
            elementClicked = "";
            return;
        }
        var appendToDiv = "";
        var requestedHeight = "";
        var requestedWidth = "";
        var isHide = $('disappear').hasClass('hiding');
        if($('.active .dynamic-element-cover').hasClass('activeContent')){
            $('.dynamic-element').fadeOut(100);
        }else{
            disappearMainDiv(isHide);
            $('disappear').addClass('hiding');
            $(".active .dynamic-element-cover").css("z-index","99").css("display","block");
        }


        // dynamic popular names content
        if(this.id == 'popNames'){
            var popularNameContent = "<div id='popularNamesContent'>";

            for(var i=0; i<popularNameYears.length; i++){
                var textAlign;
                popularNameContent += "<div class='yearAndContent'><div class='namesContent'>";
                for(var j=0; j<boyNames[i].length; j++){
                    popularNameContent += "<span class='float-right white-text'> "+ boyNames[i][j] +" </span>";
                    popularNameContent += "<span class='float-left black-text'> "+ girlNames[i][j] +" </span>";
                }
                if(i%2 == 0){
                    textAlign = "style='text-align:right;color:white;'"
                }else{
                    textAlign = "style='text-align:left;color:black;'"
                }
                popularNameContent += "</div> <span " + textAlign +">" + popularNameYears[i] + "</span></div>";
            }
            popularNameContent += "<div class='clear'></div>";

            appendToDiv = popularNameContent;
            requestedHeight = "250px";
            requestedWidth = "150px"
        }

        if(this.id == 'whyColors'){
            var whyColorsContent = "<div style='position: relative;' id='whyColorsContent'> <ul dir='rtl' style='position:relative;' class='bxsliderColors'>";
            var display = "block";
            var isActiveSlide = "activeSlide";
            for(var i = pplObj.length - 1; i >= 0; i--){

                whyColorsContent +=     "<li>" +
                                            "<div class='black-text' style='float:left;width:50%;height:250px;'>" +
                                                "<p style='font-size:14px;text-align: right;position: absolute;top: 21px;margin-right: 15px;'>"+ pplObj[i].dataGirls +"</p>" +
                                            "</div>" +
                                            "<div class='white-text' style='float:right;width:50%;height:250px'>" +
                                                "<h1 style='text-align: right;'>"+ pplObj[i].title +"</h1>" +
                                                "<p style='font-size:14px;text-align: right;width: 97%;'> "+ pplObj[i].dataBoys +" </p>" +
                                            "</div> " +
                                        "</li>";
            }

            whyColorsContent += "</ul></div><div class='clear'></div>"
            appendToDiv = whyColorsContent;
            requestedHeight = "150px";
            requestedWidth = "400px";
        }

        if(this.id == 'tradition'){
            var traditionContent = "<div id='traditionContent'> <span class='white-text' style='font-size: 14px;width: 47%;text-align: right;float: right;'>" + traditionText + "</span> </div>";
            appendToDiv = traditionContent;
            requestedHeight = "150px";
            requestedWidth = "400px";

        }



        // save the last clicked dynamic element.
        elementClicked = this.id;

        // wait till animation of disappear will end and only then preform
        setTimeout(function(){
            var dec = $(".active .dynamic-element-cover");
            if(!isHide){
                var dynamicDiv = "<div class='dynamic-element'> " + appendToDiv + "</div>";
                dec.append(dynamicDiv);
                $(".dynamic-element").animate({"height":requestedHeight,"width":requestedWidth});
                $('.bxsliderColors').bxSlider();
            }else{
                $(".dynamic-element").animate({"height":"0px"},function(){
                    $(this).remove();
                });
            }
        },300);

    });



});

$(document).on("click", "#popularNamesContent, #whyColorsContent, #traditionContent", function(e) {
    e.stopPropagation();
});

$(document).on("click", ".nextSlide", function(e) {
    var length = $('.active .slides').length;

});

function disappearMainDiv(isHide){
    var activeWhite = $(".active .white");
    var activeWhiteDisappearDiv = $(".active .black .disappear");
    var activeBlack = $(".active .black");
    var activeBlackDisappearDiv = $(".active .white .disappear");
    var speed = 200;
    if(!isHide){
        activeWhite.css("z-index",5);
        activeWhiteDisappearDiv.css("z-index",4);
        activeWhiteDisappearDiv.animate({"left":"-850px"},speed,function(){
            $(this).css("display","none");
        });
        setTimeout(function(){
            activeBlack.css("z-index",5);
            activeBlackDisappearDiv.css("z-index",4);
            activeBlackDisappearDiv.animate({"right":"-850px"},speed,function() {
                $(this).css("display", "none");
            });
            $(".active .dynamic-element-cover").addClass('activeContent');
        },speed);

    }else{
        $(".dynamic-element").animate({"height":"0px"},function(){
            $(this).remove();
        });
        setTimeout(function(){
            activeBlack.css("z-index",1);
            activeWhiteDisappearDiv.css("z-index",4);
            activeWhiteDisappearDiv.css("display","block");
            activeWhiteDisappearDiv.animate({"left":"0px","display":"block"},speed,function(){ });

            setTimeout(function(){
                activeWhite.css("z-index",1);
                activeBlackDisappearDiv.css("z-index",4);
                activeBlackDisappearDiv.css("display", "block");
                activeBlackDisappearDiv.animate({"right":"0px"},speed,function() { });
            },speed);
            // this speed determines how long should we wait till disappearing div will be back
            $(".active .dynamic-element-cover").removeClass('activeContent');
            $('disappear').removeClass('hiding');
            $(".active .dynamic-element-cover").css("z-index","-1");
        },700);
    }
}

$(window).on('hashchange',function(){
    setupPage();
});

$(document).on("mouseover", ".yearAndContent", function(e) {
    $(this).find('.namesContent').fadeIn(600);
});

$(document).on("mouseleave", ".yearAndContent", function(e) {
    $(this).find('.namesContent').fadeOut(100);
});

$(document).on("click", ".active .dynamic-element-cover", function(e) {
    $('.dynamic-element').fadeOut(100);
    setTimeout(function(){
        $(".active .dynamic-element-cover").css("z-index","-1");
        disappearMainDiv(true);
    },100);

});

$(document).ready(function(){
    setupPage();
    setTimeout(function(){
        $(document).find(".active .woman .content").animate({'top': plusToplocation},600).css('position','relative').css('visibility', 'visible');
        $(document).find(".active .man .content").animate({'bottom': minusToplocation},600).css('position','relative').css('visibility', 'visible');
    },300);
});


// set page accordingly !
function setupPage(){
    var hash = window.location.hash;
    if(hash == '#firstPage' || hash == ''){
        setTimeout(function() {
            $('.head-title').addClass('animated bounceInDown');
            $('.button').css("display", "block").addClass('animated bounceInDown');
        },300);
    }
}