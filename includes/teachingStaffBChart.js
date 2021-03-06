/**
 * Created by Ben Ari on 25/02/2015.
 */

d3.json("json/teachingStaff.json",function(data){
    var canvas = d3.select("#teachStaffBoysChart").append("svg")
        .attr("width",350)
        .attr("height",188);

    canvas.selectAll("rect")
        .data(data.boys)
        .enter()
        .append("rect")
        .attr("width",function(d){return d.age * 6;})
        .attr("height",28)
        .attr("y",function(d,i){return i*80;})
        .attr("fill","white");

    canvas.selectAll("text")
        .data(data.boys)
        .enter()
        .append("text")
        .attr("fill","black")
        .attr("y", function (d,i){return i*80 + 24;})
        .attr("x", function (d){return 80;})
        .text(function (d){return d.name; })

});


$.getJSON("json/teachingStaff.json", function(json) {
    var subjectNames = json.subject;
    var span = "";
    for(var i=0; i < subjectNames.length; i++){
        span += "<span class=white-text' style='font-size:22px;'>" + subjectNames[i]  + "</span>";
    }
    var content = "<div class='statsDisplayContent'>" + span + "</div>";
    $("#teachStaffBoysChart").append(content);
});
