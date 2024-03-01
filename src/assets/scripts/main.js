import {   utils, config, INode } from "#/helper";
import menu from "#/component/menu";
import scroll from "#/component/scroll";
import tab from "#/component/tab";

window.debug = enableDebugMode(1);

// デバッグモード：1, 非デバッグモード：0
function enableDebugMode(debug) {
  return debug && import.meta.env.DEV;
}

export async function init() {
  try {
    const pageEl = INode.getElement(config.$.pageContainer);
    const pageType = INode.getDS(pageEl, config.prefix.page);


    // console.log(window.debug, "window.debugモード");
    // ページ属性（data-page）をキーにしたページ毎の制御の初期化
    await import(`./page/${pageType}.js`).then(({ default: init }) => {
      return init({ menu , tab, scroll });
    });

    // menuの初期化
    menu.init();

    // if(utils.isIOS()) {
    //   // iPhone、iPadの時は画面をリロード
    //   window.location.reload();
    // }
    // if(utils.isSafari()) {
    //   console.log("safariです");
    // }

    // if(utils.isMobile()) {
    //   console.log("mobileです");
    // } else {
    //   console.log("pcです");
    // }

    // ページトップへ戻る
    INode.qs(`[data-${config.prefix.scroll}="top"]`).addEventListener('click', function() {
      utils.scrollToTop();
    });

    // メモリサイズ
    console.log(performance.memory);

  } catch (e) {
    // tryブロックでエラーが発生した
    console.error(e);
    debugger;
  }

}
