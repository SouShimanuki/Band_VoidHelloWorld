const LOAD_TIME = 3000; /* loading アニメーション時間 */
const DEL_TIME  = 5000;    /* loading 削除時間 */

/* フェードアウト */
window.addEventListener('DOMContentLoaded', () => 
{
  const loadingScreen = document.querySelector('.js-loading-screen');
  if(loadingScreen)
  {
    setTimeout(() => 
    {
      loadingScreen.classList.add('js-fade-out');
    }, LOAD_TIME);
  }
  else
  {
    console.error(`クラスjs-loading-screenを持つ要素が見つかりませんでした。`);
  }
});

/* アニメーションの停止(DOMの削除) */
window.addEventListener('DOMContentLoaded', () => 
{
  const loadingScreen = document.querySelector('.js-loading-screen');
  if (loadingScreen)
  {
    setTimeout(() => 
    {
      loadingScreen.remove();
    }, DEL_TIME);
  }
});
