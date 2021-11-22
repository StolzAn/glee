$(function(){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
    })
});



var product = $('.products__item');
 
$('#choice > .choice-item').click(
function(){
  productChoice($(this));
});
 
function productChoice(self){
  self.siblings().removeClass('choice-active');
  self.addClass('choice-active');
  var productCategory = self.attr('data-choice');
  if(productCategory != 'all'){
    product.map(
      function(){
        if($(this).attr('data-category') === productCategory){
          $(this).css('display','block');
        }
        else{
          $(this).css('display','none');
        }
      }
    );
  }
  else{
    product.css('display','block');
  }
}
var product = $('.design__item');
 
$('#choice > .choice-item').click(
function(){
  productChoice($(this));
});
 
function productChoice(self){
  self.siblings().removeClass('choice-active');
  self.addClass('choice-active');
  var productCategory = self.attr('data-choice');
  if(productCategory != 'all'){
    product.map(
      function(){
        if($(this).attr('data-category') === productCategory){
          $(this).css('display','block');
        }
        else{
          $(this).css('display','none');
        }
      }
    );
  }
  else{
    product.css('display','block');
  }
}