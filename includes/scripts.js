/**
 * Created by BENARI on 20/12/2014.
 */

var sirenExp = false;
var hashInd = window.location.hash;

$( window ).load(function() {

    //fixed menu
    /*var sections = $('.section');
    $('.section').append("<div id='fixed-menu'> <ul> </ul> </div>");
    for(var i =0; i<sections.length;i++){
        $('#fixed-menu ul').append("<li class='fixed-menu-li'> <a href='#" + $(sections[i]).attr("data-anchor") + "'>" + (i+1) + " <span class='fixed-menu-li-anchor'> " + $(sections[i]).attr("data-anchor") + " </span> </a> </li>");
    }*/

    var boyNames = {};
    var girlNames = {};
    //
    // Load json
    //
    $.getJSON("./json/pop_name.json", function(json) {
        boyNames = json.popularName.boys;
        girlNames = json.popularName.boys;
        console.log('boyNames',boyNames,'girlNames',girlNames);
    });
    //
    // SET AMBULANCE ANIMATION
    //
    setTimeout(function(){
        $("#ambulance").animate({'left': 0},3000);
    },700);
    //
    // ambulance blink siren animation control.
    //
    setInterval(function(){
        if(sirenExp){
            $("#amb-siren").css("visibility","hidden");
            $("#amb-siren-light").css("background-image","url('./images/name-page/sirena0.png')");
        }else{
            $("#amb-siren").css("visibility","visible");
            $("#amb-siren-light").css("background-image","url('./images/name-page/sirena1.png')");
        }
        sirenExp = !sirenExp;
    },400);
    //**************************************
    //                                     *
    // handles clickable click events !!!  *
    //                                     *
    //**************************************
    $(".clickable").click(function(){
        var currentElement = $(this);
        if(currentElement.hasClass('brightElement')){
            //
            // if here we want to close a random bright element
            //
            var ob = $('.active');
            // ambulance click section
            if(this.id == 'ambulance') {
                //
                // if here, ambulance needs to closed its section
                //
                ob.find('.dynamic-element').animate({
                    opacity: 0,
                    //left: "+=50",
                    height: "0px"
                }, 1000, function() {});

                // change nurse's head after animations
                setTimeout(function(){
                    $('#nurse-in-amb').css("background-image", "url('./images/name-page/nurse_head0.png')");
                },1000);
            }
            if(this.id == 'black-ppl' || this.id == 'white-ppl'){
                ob.find('.dynamic-element').animate({
                    opacity: 0,
                    width: "0px",
                    height: "0px"
                }, 1000, function() {
                    // Animation complete.
                });
                // check which bright element needs to be removed alongside with the current
                setTimeout(function(){
                    this.id == 'black-ppl' ? $('#white-ppl').removeClass('brightElement') : $('#black-ppl').removeClass('brightElement');
                },1000);
            }

            // general things that happens after animation is done.
            setTimeout(function(){
                $('.active').find('.dynamic-element').remove();
                $(".opacity-background").css('display','none');
                currentElement.removeClass('brightElement');
            },1000);
        }else{
            //
            // if here, an element should be shown in fornt of everythin
            //
            // add brightElement class in order to display the element in front of everything
            currentElement.addClass('brightElement');
            // get the active section
            var ob = $('.active');
            // make grey background appear
            $(".opacity-background").css('display','block');
            if(this.id == 'ambulance'){
                // if here, the clicked element is the ambulance.
                // turn nurses head
                $('#nurse-in-amb').css("background-image","url('./images/name-page/nurse_head1.png')");
                // dynamically create the dynamic element and make turn it in front of eveyone also
                ob.find('#ambulance').before("<div class='dynamic-element brightElement'>  </div>");
                // create animation
                ob.find('.dynamic-element').css({width: "100px", height:"0px",top:"-62px"});
                ob.find('.dynamic-element').animate({
                    opacity: 1,
                    //left: "+=50",
                    height: "200px"
                }, 1000, function() {});
                //
                // dynamically create content of dynamic-element.
                //
                var yearObj = {
                    'years' : ['1940','1950','1960','1990','1980','1990','2000'],
                    'boysName' : {
                        0:['יוסף','יעקב','משה'],
                        1:['דוד','יוסף','משה'],
                        2:['דוד','יוסף','אברהם'],
                        3:['דוד','יוסף','משה'],
                        4:['דוד','רועי','משה'],
                        5:['דניאל','דוד','משה'],
                        6:['דניאל','דוד','יוסף']
                    },
                    'girlsName' : {
                        0:['רחל','אסתר','שרה'],
                        1:['רחל','שרה','מרים'],
                        2:['רחל','אסתר','מרים'],
                        3:['מיכל','ענת','מירב'],
                        4:['מיטל','מיכל','קרן'],
                        5:['בר','רוני','מור'],
                        6:['נועה','שירה','עדי']
                    }
                };

                var spanToInsert = "";
                var j = 0;
                // this for loop runs i times in order to get all the years from array
                for(var i = yearObj.years.length-1; i >= 0; i-- ){
                    spanToInsert += "<div dir='rtl' class='pop-names-title'> <span>" + yearObj.years[i] +
                    "</span> <div class='pop-names-in-years'> <div class='arrow-down'></div> <div>";
                    // this for loop runs j times in order to get all the boys and girls names for each year.
                    for(j = 0; j < 3; j++){
                        spanToInsert += "<span class='pop-name'>" + yearObj.boysName[i][j] + " </span> ";
                    }
                    spanToInsert += "</div><div>";
                    for(j = 0; j < 3; j++){
                        spanToInsert += "<span class='pop-name'>" + yearObj.girlsName[i][j] + " </span> ";
                    }
                    spanToInsert += "</div></div></div><div class='clear'> </div>";
                }

                $('.dynamic-element').append("<div id='names-in-years'> </div>");
                $('#names-in-years').append(spanToInsert);

                //
                // click years handler.
                //
                $('#names-in-years > div').click(function(){
                    if($(this).find('.pop-names-in-years').hasClass('clicked-name')) {
                        $('.clicked-name').removeClass('clicked-name');
                    }else{
                        $('.clicked-name').removeClass('clicked-name');
                        $(this).find('.pop-names-in-years').addClass('clicked-name');
                    }

                });

            }

            if(this.id == 'black-ppl' || this.id == 'white-ppl') {
                var pplObj = [
                    {
                        "dataId":"ecoData",
                        "title":"ההסבר הכלכלי",
                        "style":"top: 84%;left: 0;",
                        "data":"11111",
                        "lineStyle":"width: 25%;height: 32%;border-right: 1px dotted;border-bottom: 1px dotted;bottom: 9px;left: 102px;",
                        "visual":""
                    },
                    {
                        "dataId":"culData",
                        "title":"ההסבר התרבותי",
                        "style":"top: 0%;left: 0;",
                        "data":"2222",
                        "lineStyle":"width: 30%;height: 32%;border-right: 1px dotted;border-top: 1px dotted;top: 9px;left: 102px;",
                        "visual":""
                    },
                    {
                        "dataId":"horData",
                        "title":"ההסבר ההורמונלי",
                        "style":"top: 84%;left: 84%;",
                        "data":"3333",
                        "lineStyle":"width: 30%;height: 32%;border-left: 1px dotted;border-bottom: 1px dotted;bottom: 9px;right: 102px;",
                        "visual":""
                    },
                    {
                        "dataId":"evoData",
                        "title":"ההסבר האבולוציוני",
                        "style":"top: 0;left: 84%;",
                        "data":"4444",
                        "lineStyle":"width: 20%;height: 32%;border-left: 1px dotted;border-top: 1px dotted;top: 9px;right: 102px;",
                        "visual":""
                    }

                ];
                this.id == 'black-ppl' ? $('#white-ppl').addClass('brightElement') : $('#black-ppl').addClass('brightElement');
                var newDynamicElement = "<div dir='rtl' class='dynamic-element brightElement'> " +
                    "<div id='names-wrapper'> <h1 dir='rtl'> <span> למה תכלת לבנים </span> <span> וורוד לבנות? </span> </h1>";
                var dynamicLoadingData = "<div class='changing-names-content-holder'>";
                for(var i = 0; i < pplObj.length; i++){
                    newDynamicElement += "<span class='visual-ppl-names' style='" + pplObj[i].style + "'>" +
                    pplObj[i].title + "</span>" +
                    "<div style='"+ pplObj[i].lineStyle + "' class='dotted-line-in-names'>  </div>";
                    dynamicLoadingData += "<div class='names-content' id='" + pplObj[i].dataId +"'> " + pplObj[i].data + " </div>";
                }
                newDynamicElement+="</div>";
                newDynamicElement += dynamicLoadingData + "</div></div>";
                $('#black-ppl').before(newDynamicElement);
                ob.find('.dynamic-element').css({borderRadius: "15px" ,width: "0px", height: "0px", top: "110px",backgroundColor: "white",border:"2px solid black"});
                ob.find('.dynamic-element').animate({
                    opacity: 1,
                    width: "203%",
                    height: "54%"
                }, 1000, function () {
                });

                // when clicked on visual-ppl-names
                var lastTop;
                var lastLeft;
                $('.visual-ppl-names').click(function(){
                    var currentObj = $(this);
                    if(currentObj.hasClass('chosen')){
                        // return elements to original place
                        $('.dotted-line-in-names').show("fast");
                        $('#names-wrapper > h1').show("fast");
                        $('.visual-ppl-names').show("fast");
                        $('.dynamic-element').animate({
                            width: "203%",
                            height: "54%",
                            left: "0px",
                            top: "110px"
                        },"fast");

                        $('.chosen').animate({
                            top:lastTop,
                            left:lastLeft
                        },"fast",function(){});
                        currentObj.removeClass('chosen');
                    }else{
                        //
                        // if here, a category has been chosen
                        //
                        currentObj.addClass('chosen');
                        // hide all elements
                        $('.dotted-line-in-names').hide("fast");
                        $('#names-wrapper > h1').hide("fast");
                        $('.dynamic-element').animate({
                            width: "160%",
                            height: "75%",
                            left: "80px",
                            top: "70px"
                        },"fast");
                        $('.visual-ppl-names').each(function(index, element){
                            if(!($(element).is(currentObj))) $(element).hide();
                        });
                        lastLeft = currentObj.position().left;
                        lastTop = currentObj.position().top;
                        console.log(lastLeft,lastTop);
                        currentObj.animate({
                            left:"84%",
                            top: "0%"
                        }), "fast", function(){};
                    }

                });
            }
        }
    });
});

$(window).on('hashchange',function(){
    var dynamicObj = $('.dynamic-element');
    if(dynamicObj){
        $('.brightElement').each(function(index,element){
            if(element.id == 'ambulance'){
                $('#nurse-in-amb').css("background-image", "url('./images/name-page/nurse_head0.png')");
            }
            $(element).removeClass('brightElement');
        });
        dynamicObj.remove();
        $(".opacity-background").css('display','none');
    }

});

