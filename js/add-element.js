/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('#four').addClass('hot');
$('.hot').each(tocool);
function tocool(){
  $(this).removeClass('hot');
  $(this).addClass('cool');
}
// traverse the elements
$('#two').next().next().text('cheese');
$('#two').prev().text('water');

// add a new element by clicking the plus sign
$('#add').click(addElement);

// before and after are for siblings
// append and prepend are for parent
$('#todo').append('<li class="cool"> meat </li>');

function addElement() {
  // add a new element
  // add a input text box
  $('#todo').append('<li class="cool"> <input type="text" /> </li>');
  // whenever the user are done add the element
  $('input').blur(convertLi);
  $('save').text('Need Save to Database');
  $('li').click(changeStyle);
}

function convertLi() {
  var userinput = $(this).val();
  console.log(userinput);
  $('#todo').append('<li class="cool">' + userinput + '</li>');
  $('input').remove();
  $('li').click(changeStyle);
}

// bind click with the event handler

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
$('li').click(changeStyle);
function changeStyle() {
  // change the style of this to complete
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  } else {
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
  $('#save').text('Need Save to Database');
}
