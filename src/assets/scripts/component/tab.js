/**
 * メニュー制御ファイル
 *
 * 概要：メニューの開閉処理
 */

import { INode, config , utils } from "#/helper";


const $ = {};

const tab = {
    init,
}

function init(tabBtn = "tab", tabData = "tablist") {
  $.tabs = INode.qsAll(`[data-${config.prefix.tab}="${tabBtn}"]`);
  $.tabLists = INode.qsAll(`[data-${config.prefix.tab}="${tabData}"]`);
  $.isActive = 'is-active';
  $.isShow = 'is-show';

  _bindEvents();
}


function _bindEvents() {

  $.tabs.forEach((el, index) => {
    el.addEventListener(config.event.click, () => {
      utils.leaveClassName($.tabs , $.isActive);
      utils.leaveClassName($.tabLists , $.isShow);

      el.classList.add($.isActive);

      _switchTab($.tabLists, index);
      _changeIcon(index);

    });
  });

}

function _switchTab(tablists, index) {
  tablists[index].classList.add($.isShow)
}

function _changeIcon(index) {
  // # NOTE: bronze => index=0, silver => index=1 , gold => index=2
  $.imgs = INode.qsAll(`[data-${config.prefix.icon}`);
  // data-icon="on"を data-icon="off"に変更
  [...$.imgs].map(async (data,target) => {
    await utils.changeImgPath(data, "-on", "-off")
    if(index === target)  {
      await utils.changeImgPath(data, "-off", "-on")
    }
  });
}


export default tab;

