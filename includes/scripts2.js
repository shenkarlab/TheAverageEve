/**
 * Created by BENARI on 20/12/2014.
 */

var hashInd = window.location.hash;

$( window ).load(function() {
    // in order to add a button use appendToDiv variable and put all the string to append into dynamic-element
    // and also use requestedHeight to give the right height you want the dynamic element to have.
    // set tooltip for buttons
    $('#popNames').append("<span> שמות נפוצים לילדים </span>");
    $('#whyColors').append("<span> למה בנים בכחול ובנות בורוד  </span>");
    $('#tradition').append("<span> רגע של מסורת </span>");
    $('#gamesButton').append("<span> משחקים לבנים <br> משחקים לבנות </span>");
    $('#womenRaise').append("<span> נשים מגדלות <br> את העולם </span>");
    $('#powerToChange').append("<span> יש לכן את <br> את הכח להשוות </span>");
    $('#howMuchInClass').append("<span> כמה בכיתה? </span>");
    $('#bothersYou').append("<span> מציקים לך? </span>");
    $('#growUp').append("<span> תתבגר כבר </span>");
    $('#classWithNoBoys').append("<span> כיתה  ללא <br> בנים </span>");
    $('#whosBetter').append("<span> מי תלמיד <br> יותר טוב </span>");
    $('#profSchools').append("<span> בתי ספר מקצועיים </span>");
    $('#teachCrew').append("<span> צוות הוראה </span>");
    $('#realStudy').append("<span> לימודים ריאליים </span>");
    $('#deserves').append("<span> ניגשים לבגרות לעומת <br> זכאים לבגרות </span>");
    $('#commandersButton').append("<span>  מפקד/מפקדת </span>");
    $('#recruitingStatsButton').append("<span>מתגייסים לצה\"ל</span>");
    $('#suicideArmyButton').append("<span> התאבדויות </span>");

    var boyNames = {};
    var girlNames = {};
    var popularNameYears = [];
    var pplObj = {};
    var traditionText;
    var elementClicked = "";
    var kinderGarden = {};
    var school = {};
    var highschool = {};
    var army = {};
    //
    // Load json
    //
    $.getJSON("./json/pop_name.json", function(json) {
        // -----------------------------
        // second page section
        // -----------------------------
        boyNames = json.popularName.boysName;
        girlNames = json.popularName.girlsName;
        popularNameYears = json.popularName.years;
        pplObj = json.pplObj;
        traditionText = json.tradition;
        kinderGarden = json.kinderGarden;
        school = json.school;
        highschool = json.highschool;
        army = json.army;
        // ------------------------------
        // third page section
        // ------------------------------


    });
    $(".clickable").click(function(){
        var isRightButtons = $(this).parent().hasClass("right-side-buttons");
        $(".right-side-buttons-clicked").removeClass("right-side-buttons-clicked");
        $(".left-side-buttons-clicked").removeClass("left-side-buttons-clicked");
        if(isRightButtons){
            $(this).addClass("right-side-buttons-clicked");
        }else{
            $(this).addClass("left-side-buttons-clicked");
        }
        // appendToDiv = text to append into dynamic Element
        // requestedHeigh is the height of the dynamic element
        if(elementClicked == this.id){
            disappearMainDiv(true);
            if(isRightButtons){
                $(this).removeClass("right-side-buttons-clicked");
            }else{
                $(this).removeClass("left-side-buttons-clicked");
            }
            elementClicked = "";
            return;
        }


        var appendToDiv = "";
        var requestedHeight = "";
        var requestedWidth = "";
        var isHide = $('.active .disappear').hasClass('hiding');
        if($('.active .dynamic-element-cover').hasClass('activeContent')){
            $('.active .dynamic-element').fadeOut(100);
        }else{
            disappearMainDiv(isHide);
            $('.active .disappear').addClass('hiding');
            $(".active .dynamic-element-cover").css("z-index","99").css("display","block");
        }


        // dynamic popular names content
        if(this.id == 'popNames'){
            var popularNameContent = "<div id='popularNamesContent'>";

            for(var i=0; i<popularNameYears.length; i++){
                var textAlign;
                var boysRight = '<div id="nameMen" class="float-right"> ';
                var girlsLeft = '<div id="nameWomen"> ';
                popularNameContent += "<div class='yearAndContent'><div class='namesContent'>";
                for(var j=0; j<boyNames[i].length; j++){
                    boysRight += "<span class='white-text'> "+ boyNames[i][j] +" </span>";
                    girlsLeft += "<span class='black-text'> "+ girlNames[i][j] +" </span>";
                }
                boysRight += '</div>';
                girlsLeft += '</div>';
                popularNameContent += boysRight + girlsLeft;
                var year = popularNameYears[i];
                var halfIndex = year.length / 2;
                var textYear = "";
                for(var k = 0; k < year.length; k++){
                    if(k == halfIndex){
                        textYear += "<span style='color:#fff'>";
                    }
                    textYear += year[k];
                }
                textYear += "</span>";
                popularNameContent += "</div> <span " + textAlign +">" + textYear + "</span></div>";
            }
            popularNameContent += "<div class='clear'></div>";

            appendToDiv = popularNameContent;
            requestedHeight = "250px";
            requestedWidth = "150px"
        }

        else if(this.id == 'whyColors'){
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
                                                "<p style='font-size:14px;text-align: right;width: 80%;'> "+ pplObj[i].dataBoys +" </p>" +
                                            "</div> " +
                                        "</li>";
            }

            whyColorsContent += "</ul></div><div class='clear'></div>";
            appendToDiv = whyColorsContent;
            requestedHeight = "300px";
            requestedWidth = "450px";
        }

        else if(this.id == 'tradition'){
            var traditionContent = "<div id='traditionContent' dir='rtl'> <span class='white-text' style='font-size: 15px;width: 47%;text-align: right;float: right;'>" + traditionText + "</span> </div>";
            appendToDiv = traditionContent;
            requestedHeight = "300px";
            requestedWidth = "400px";

        }

        else if(this.id == 'womenRaise'){
            var womenRaiseContent = "<div id='womenRaiseContent' dir='rtl'> <span class='white-text' style='position:absolute;top:150px;font-size: 30px;left: 10px;'> 99.3% </span> <span  style='width: 47%;float: left;'>" + kinderGarden.womenRaiseWorld.leftSide + "</span> <span class='white-text' style='font-size: 15px;width: 47%;text-align: right;float: right;'>" + kinderGarden.womenRaiseWorld.rightSide + "</span> </div>";
            appendToDiv = womenRaiseContent;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'howMuchInClass'){
            var howMuchInClassContent = "<div id='howMuchInClassContent' dir='rtl'> <span class='white-text' style='position: absolute;left: 90px;top: 140px;'> 48% </span> <span class='black-text' style='position: absolute;right: 90px;top: 140px;'> 52% </span>" + school.howManyInClass.chart + "</div>";
            appendToDiv = howMuchInClassContent;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'whosBetter'){

            var whosBetterContent = "<div id='whosBetterContent' dir='rtl'> <div class='float-left'>" + school.whosBetter.chartGirls + "</div> <div class='float-right'>" + school.whosBetter.chartBoys + "</div> </div>";
            appendToDiv = whosBetterContent;
            requestedHeight = "300px";
            requestedWidth = "400px";

        }

        else if(this.id == 'profSchools'){
            var profSchoolsContent = "<div id='profSchoolsContent'> <div class='float-left'>" + highschool.professional.leftChart + "</div> <div class='float-right'>" + highschool.professional.rightChart + "</div> </div>";
            appendToDiv = profSchoolsContent;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'realStudy'){
            var realStudyContent = "<div id='realStudyContent' dir='rtl'> <div class='float-left'>" + highschool.realStudies.leftChart + "</div> <div class='float-right'>" + highschool.realStudies.rightChart + "</div> </div>";
            appendToDiv = realStudyContent;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'gamesButton'){
            var gamesButton = "<div id='gamesForBnG' dir='rtl'> <span class='black-text' style='font-size: 15px;width: 47%;text-align: right;float: left;'>" + kinderGarden.Games.leftSide + "</span> <span class='white-text' style='font-size: 15px;width: 47%;text-align: right;float: right;'>" + kinderGarden.Games.rightSide + "</span> </div>";
            appendToDiv = gamesButton;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'powerToChange'){
            var powerToEqual = "<div id='powerToEqual' dir='rtl'> <span class='black-text' style='font-size: 15px;width: 47%;text-align: right;float: left;'>" + kinderGarden.powerEqual.leftSide + "</span> <span class='white-text' style='font-size: 15px;width: 47%;text-align: right;float: right;'>" + kinderGarden.powerEqual.rightSide + "</span> </div>";
            appendToDiv = powerToEqual;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'bothersYou'){
            var whoBothersYou = "<div id='whoBothersYou' dir='rtl'> <span class='black-text' style='font-size: 15px;width: 47%;text-align: right;float: left;'>" + school.bothers.leftSide + "</span> <span class='white-text' style='font-size: 15px;width: 47%;text-align: right;float: right;'>" + school.bothers.rightSide + "</span> </div>";
            appendToDiv = whoBothersYou;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'teachCrew'){
            var teachCrewContent = "<div id='teachCrewContent'> <div class='float-left'>" + highschool.teachCrew.leftChart + "</div> <div class='float-right'>" + highschool.teachCrew.rightChart + "</div> </div>";
            appendToDiv = teachCrewContent;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'classWithNoBoys'){
            var classWithNoBoys = "<div id='classWithNoBoysNoContent' dir='rtl'> <span class='black-text' style='font-weight:bold;font-size: 15px;width: 47%;text-align: right;float: left;'> <span class='black-text' style='font-size: 15px;text-align: right;'>" + school.noBoys.title + "</span><br><br>" + school.noBoys.leftSide + "</span>  </div>";
            appendToDiv = classWithNoBoys;
            requestedHeight = "300px";
            requestedWidth = "400px";
        }

        else if(this.id == 'commandersButton'){
            var commandersContent = "<div id='commandersContent' dir='rtl'> <div class='float-left'>" + army.commanders.leftChart + " <div class='commandersAddon'> <span>3 תתי אלופות</span> <span>אלופה אחת</span> </span> </div> </div> <div class='float-right'>" + army.commanders.rightChart + "</div> </div>";
            appendToDiv = commandersContent;
            requestedHeight = "400px";
            requestedWidth = "400px";
        }

        else if(this.id == 'recruitingStatsButton'){
            var recruitingStatsContent = "<div id='recruitingStatsContent' dir='rtl'> <div class='dynamic-header'> שנת 2013 </div> <div class='float-left'>" + army.recruit.leftChart + "<span class='black-text' style='left: 65px;'> 57% </span> </div> <div class='float-right'>" + army.recruit.rightChart + "<span class='white-text'> 65% </span></div> </div>";
            appendToDiv = recruitingStatsContent;
            requestedHeight = "400px";
            requestedWidth = "400px";
        }

        else if(this.id == 'suicideArmyButton'){
            var suicideArmyContent = "<div id='suicideArmyContent' dir='rtl'> <div class='dynamic-header'> 2010 - 2014  </div> <span class='white-text' style='position: absolute;left: 180px;top: 190px;font-size: 40px;'> 95% </span> <span class='black-text' style='position: absolute;left: 163px;top: 33px;font-size: 40px;'> 5% </span>" + army.suicide.chart + "</div>";
            appendToDiv = suicideArmyContent;
            requestedHeight = "400px";
            requestedWidth = "400px";
        }

        // save the last clicked dynamic element.
        elementClicked = this.id;
        // wait till animation of disappear will end and only then preform
        setTimeout(function(){
            // get the cover of dynamic element and dynamic element itself
            var dec = $(".active .dynamic-element-cover");
            var de = $('.dynamic-element');
            // if dynamic element exist, delete it so you create another one.
            if(de) de.remove();
            // create dynamic element according previous steps
            var dynamicDiv = "<div class='dynamic-element'> " + appendToDiv + "</div>";
            dec.append(dynamicDiv);
            $(".dynamic-element").animate({"height":requestedHeight,"width":requestedWidth});
            if(elementClicked == 'whyColors') $('.bxsliderColors').bxSlider();
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
    var dynamicElementCover = $(".active .dynamic-element-cover");
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
            dynamicElementCover.addClass('activeContent');
        },speed);

    }else{
        var isRightButtons = $(this).parent().hasClass("right-side-buttons");
        $(".right-side-buttons-clicked").removeClass("right-side-buttons-clicked");
        $(".left-side-buttons-clicked").removeClass("left-side-buttons-clicked");
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
            dynamicElementCover.removeClass('activeContent');
            $('.active .disappear').removeClass('hiding');
            dynamicElementCover.css("z-index","-1");
        },700);
    }
}

$(window).on('hashchange',function(){
    // whenever a page changes, close dynamic element if needed.

    if($('.dynamic-element')) disappearMainDiv(true);
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
        $(".right-side-buttons-clicked").removeClass("right-side-buttons-clicked");
        $(".left-side-buttons-clicked").removeClass("left-side-buttons-clicked");
    },100);

});

$(document).ready(function(){
    setupPage();
    $( ".button" ).each(function( index ) {
        $(this).append("<div class='gps_ring'> </div>");
    });
    setTimeout(function(){
        $(document).find(".active .woman .content").animate({'top': plusToplocation},600).css('position','relative').css('visibility', 'visible');
        $(document).find(".active .man .content").animate({'bottom': minusToplocation},600).css('position','relative').css('visibility', 'visible');

    },300);
});


// set page accordingly !
function setupPage(){
    var hash = window.location.hash;
}