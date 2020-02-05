window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    },0);
  }
$(function(){
    $("#btn222").on('click', function(){
        $('#text222').slideToggle(200);
    
    });
});