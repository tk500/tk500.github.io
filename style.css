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

  $(document).ready(function(){
    $("#hide_skills").click(function(){
    $("#skills_hide").fadeToggle(1000);
    });
  });

  $('#hide_bottom, #hide_skills').on('click',function(){
    // クリックされたら次の要素を操作
    $(this).next().slideToggle();
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
   });

  //  ヘッダーメニューの開閉
   $(document).ready(function(){
     $("#click_s").click(function(){
     $("#menu").slideToggle(1000);
     });
   });
  //  ヘッダーメニュー選択時に閉じる
   $('#click, #click2, #click3').on('click',function(){
     $("#menu").fadeOut(1000);
    });
    

})

document.head.appendChild(script)
