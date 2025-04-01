const START_CENTER_HEIGHT = 100;  /* スクロール開始位置（画面中央を基準にするため0に変更） */
const START_TOP_HEIGHT    = -100; /* スクロール開始位置（画面中央を基準にするため0に変更） */
let   timeoutId           = null;
let   scrollHight         = 0;


/* スクロールイベント */
window.addEventListener('scroll', function()
{
  /* タイムアウトIDが設定されている場合にクリアする */
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  /* スクロールイベントによる複数回のトリガーを防ぐために、実行を遅延させる */
  timeoutId = setTimeout(function()
  {
    /* CENTER */
    const fadeinElementsCenter = document.querySelectorAll('.js-scrollFadeCenter');
    fadeinElementsCenter.forEach(function(element)
    {
      const eleRect      = element.getBoundingClientRect();
      const elemCenter   = eleRect.top;            /* 要素の中心位置 */
      const windowCenter = window.innerHeight / 2; /* ブラウザウィンドウの中心位置 */

      /* アニメーションをトリガーするためにクラスを追加する */
      const triggerPoint = windowCenter + START_CENTER_HEIGHT;
      if (elemCenter < triggerPoint)
      {
        element.classList.add('js-scrollin');
      }
    });

    /* TOP */
    const fadeinElementsTop = document.querySelectorAll('.js-scrollFadeTop');
    fadeinElementsTop.forEach(function(element)
    {
      const eleRect      = element.getBoundingClientRect();
      const elemTop      = eleRect.top;        /* 要素の先頭位置 */
      const windowEnd    = window.innerHeight; /* ブラウザウィンドウの先頭 */

      /* アニメーションをトリガーするためにクラスを追加する */
      const triggerPoint = windowEnd + START_TOP_HEIGHT;
      if (elemTop < triggerPoint)
      {
        element.classList.add('js-scrollin');
      }
    });
  }, 100); // フェードイン効果の遅延時間(ms)を調整
});