
var peso = [33,76,31,49,24]
function setup() 
{
  createCanvas(400,400)
  var soma = peso[0] + peso[1] + peso[2] + peso[3] + peso[4]
  var media = soma/peso.length
  console.log(media)
}
  function draw() 

{
background(51)
drawSprites()
}