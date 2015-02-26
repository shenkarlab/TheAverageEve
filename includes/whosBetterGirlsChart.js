/**
 * Created by Ben Ari on 25/02/2015.
 */

d3.json("json/whosBetterJson.json",function(data){
    var canvas = d3.select("#whosBetterGirlsChart").append("svg")
        .attr("width",350)
        .attr("height",300)
        .attr("class","RtoL")

    canvas.selectAll("rect")
        .data(data.girls)
        .enter()
        .append("rect")
        .attr("width",function(d){return d.age * 3;})
        .attr("height",28)
        .attr("y",function(d,i){return i*80;})
        .attr("fill","black");
});

$.getJSON("json/whosBetterJson.json", function(json) {
    var percent = json.girls;
    var span = "";
    for(var i=percent.length-1; i >= 0; i--){
        span += "<span class=white-text'>" + percent[i].name  + "</span>";
    }
    var content = "<div class='statsDisplayContent'>" + span + "</div>";
    $("#whosBetterGirlsChart").append(content);
});

