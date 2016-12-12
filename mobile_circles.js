        
// input the starting data (x values)
var dat_m = [220, 220, 220, 220];
// create svg elements
var svgm = d3.select("svg.mobile");
        
// return random values
randomVal = function(max) {  return Math.floor((Math.random() * max) + 1);  };
randColVal = function() { return Math.round(Math.random() * 255); };
randCol = function() { return "rgb(" + randColVal() + ', ' + randColVal() + ', ' + randColVal() + ')'; };
        
// create the starting circle positions
svgm.selectAll("circle.mobile")
    .data(dat_m)
  .enter().append("circle")
    .style("fill", "rgb(220, 190, 220)")
    .attr("cy", function() { return randomVal(100) + "%"; })
    .attr("cx", function() { return randomVal(100) + "%"; })
    .attr("r", function() { return randomVal(20); })
    .attr("class", "mobile");
        
// update the circle positions
function update_m() {    

// Update selection: Resize and position existing circles
var selection = svgm.selectAll("circle.mobile")
  .data(dat_m).transition().duration(3000)
  .style("fill", function(){ return randCol(); })
  .attr("cy", function(){ return randomVal(100) + "%"; })
  .attr("cx", function(){ return randomVal(100) + "%"; })
  .attr("r", function(){ return randomVal(20); });
    
};
        
d3.interval(function() {
    update_m();
}, 2000);
