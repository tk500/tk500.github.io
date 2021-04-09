var head = document.getElementsByTagName('head')
var script = document.createElement('script')
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function () {

  // ここにjQueryの記述をする
  // $(function () {
  //   console.log('test')
  // })
  $(document).ready(function(){
    $("#hide_bottom").click(function(){
    $("#hide").fadeToggle(1000);
    });
    });
})

document.head.appendChild(script)