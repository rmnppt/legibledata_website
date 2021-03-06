        
// input the starting data (x values)
var dat_l = [280, 280, 280, 280, 280, 280, 280, 280];
// create svg elements
var svgl = d3.select("svg.laptop");
        
// return random values
randomVal = function(max) {  return Math.floor((Math.random() * max) + 1);  };
randColVal = function() { return Math.round(Math.random() * 255); };
randCol = function() { return "rgb(" + randColVal() + ', ' + randColVal() + ', ' + randColVal() + ')'; };
        
// create the starting circle positions
svgl.selectAll("circle.laptop")
    .data(dat_l)
  .enter().append("circle")
    .style("fill", "rgb(220, 190, 220)")
    .attr("cy", function() { return randomVal(100) + "%"; })
    .attr("cx", function() { return randomVal(100) + "%"; })
    .attr("r", function() { return randomVal(20); })
    .attr("class", "laptop");
        
// update the circle positions
function update_l() {
    
// Update selection: Resize and position existing circles
var selection = svgl.selectAll("circle.laptop")
  .data(dat_l).transition().duration(5000)
  .style("fill", function(){ return randCol(); })
  .attr("cy", function(){ return randomVal(100) + "%"; })
  .attr("cx", function(){ return randomVal(100) + "%"; })
  .attr("r", function(){ return randomVal(20); });

};
        
d3.interval(function() {
    update_l();
}, 5000);
