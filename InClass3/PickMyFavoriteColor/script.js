//1.create an array of colors and assign it to a variable colors
var colors = ['blue','grey','red','cyan','pink','orange','yellow','black'];

// 2.set the preview color to the one entered in the input and display its color code using setPreviewColor function
function setPreviewColor(color) {
    $('.preview').css('background',color);


}

//adds color boxes to the favorite colors
function addBox(color) {
    $('#colors').prepend("<div class='item' style='background-color: " + color + ";'><div>");
}

//3.As the page loads add each color in the colors array to the div '#colors'
$(document).ready(function () {
    var randColor = colors[Math.ceil(Math.random()* colors.length)];
    $('.preview').css('background',randColor);
    $.each(colors,function(index,col){
        addBox(col);
    })
})

//4.set the preview color to one of the colors in the colors array randomly


//5.Write an event handler for the key up event i.e. when the user types the color in the input and releases the key on the keyboard
//The event should set the preview color to the color typed in the input
$(document).on('keyup','#color',(function () {
    var textColor = $(this).val();
    setPreviewColor(textColor);
}))

//6.Write an event handler to handle the click the event on the add to favorite button so that the color gets added to the list of favorite colors,
// the content of the input gets cleared and the focus gets back on the input

$(document).on('click','#add-to-favorite',(function () {
    var textColor = $('#color').val();
   addBox(textColor);
   $('#color').val(' ')
}))

//7.Write events handlers such that whenever any item in the favorite colors is clicked or hovered, the color gets displayed in the preview div
$(document).on('click','.item',function () {
    var textColor = $(this).css('background-color');
    setPreviewColor(textColor);
    alert(textColor);
})

$(document).on('mouseover','.item',function () {
    var textColor = $(this).css('background-color');
    setPreviewColor(textColor);
    alert(textColor);
})


