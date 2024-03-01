/**
 * メニュー制御ファイル
 *
 * 概要：時間差スクロール処理
 */
import { INode, config, utils } from "#/helper";

const scroll = {
    init
}
const $ = {};

function init(time = 800) {

  const lochref = window.location.href;
  if (lochref.indexOf('#') > -1) {
    const anchor = lochref.slice(lochref.indexOf('#'));
    window.setTimeout(function() {
      document.querySelector(anchor).scrollIntoView({ behavior: 'smooth' });
    }, time);
  }

}


export default scroll;
