var timer = null,
    index = 0,
    sindex,
    wrap = document.getElementById('wrap'),
    banner = document.getElementById('banner-wrap'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    dots = document.getElementById('dots').getElementsByTagName('span'),
    len = dots.length,
    sidebar = document.getElementById('sidebar'),
    sidebarItems = document.getElementById('sidebar').getElementsByTagName('div'),
    slen = sidebarItems.length,
    subMenu = document.getElementById('sub-menu'),
    subMenuItems = subMenu.getElementsByClassName('sub-menu-item');

function changeImg(){
  for (var i = 0; i < len; i++) {
    dots[i].className = '';
  }

  dots[index].className = 'active';
  banner.style.left = index * (-1200) + 'px';
}

function startAutoPlay(){
  timer = setInterval(function(){
    index ++;
    if (index >= len ) index = 0;
    changeImg();
  },3000)
}

function stopAutoPlay(){
    if(timer){
         clearInterval(timer);
    }
}

function menuShow(){
  subMenuItems[sindex].style.display = "block"
}

function slideImg(){
  wrap.onmouseover = function(){
    stopAutoPlay();
  }

  wrap.onmouseout = function(){
    startAutoPlay();
  }

  wrap.onmouseout();

  prev.onclick = function(){
    index --;
    if (index<0) index = len-1;
    changeImg();
  }

  next.onclick = function(){
    index ++;
    if (index>len-1) index = 0;
    changeImg();
  }

  for (var i = 0; i < len; i++) {
    dots[i].setAttribute('data-index',i);
    dots[i].onclick = function(){
      index = this.getAttribute('data-index');
      changeImg();
    }
  }

  for (var j = 0; j < slen; j++) {
    sidebarItems[j].setAttribute('data-index',j);
    sidebarItems[j].onmouseover = function(){
      subMenu.className = "sub-menu";
      for (var m = 0; m < slen; m++) {
        subMenuItems[m].style.display = "none";
        sidebarItems[m].style.background = "none";
      }
      sindex = this.getAttribute('data-index');
      subMenuItems[sindex].style.display = "block"
      sidebarItems[sindex].style.background = "rgba(0,0,0,.1)";
    }
  }

  subMenu.onmouseover = function(){
        this.className = "sub-menu";
    }

  subMenu.onmouseout = function(){
      this.className = "sub-menu hide";
  }

  sidebar.onmouseout = function(){
      subMenu.className = "sub-menu hide";
  }
}

slideImg();