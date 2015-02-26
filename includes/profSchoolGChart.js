/**
 * Created by Ben Ari on 25/02/2015.
 */

d3.json("json/professionalSchools.json",function(data){
    var canvas = d3.select("#profSchoolGirlsChart").append("svg")
        .attr("width",350)
        .attr("height",429)
        .attr("class","RtoL");

    canvas.selectAll("rect")
        .data(data.girls)
        .enter()
        .append("rect")
        .attr("width",function(d){return d.age * 4;})
        .attr("height",28)
        .attr("y",function(d,i){return i*80;})
        .attr("fill","black");
});

$.getJSON("json/professionalSchools.json", function(json) {
    var percent = json.girls;
    var span = "";
    for(var i=percent.length-1; i >= 0; i--){
        if(i==1 || i==3){
            span += "<span class='white-text small-percent'>" + percent[i].name  + "</span>";
        }else{
            span += "<span class='white-text'>" + percent[i].name  + "</span>";
        }
    }
    var content = "<div class='statsDisplayContent'>" + span + "</div>";
    $("#profSchoolGirlsChart").append(content);
});