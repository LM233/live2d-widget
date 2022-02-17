/*
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */

function loadWidget() {
    setTimeout(() => {
      document.getElementById("waifu").style.bottom = 0;
    }, 0);
  
    const newPath =
      "https://cdn.jsdelivr.net/gh/xiazeyu/live2d-widget-models/packages/live2d-widget-model-wanko/assets/wanko.model.json";
    loadlive2d("live2d", newPath);
  }
  