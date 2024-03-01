/**
 * メニュー制御ファイル
 *
 * 概要：メニューの開閉処理
 */
import { INode, config, utils } from "#/helper";

const menu = {
    init
}
const $ = {};

function init() {
    $.btn = INode.getElement('.btn-menu');
    $.header = INode.getElement('.l-header');
    $.headerMenu = INode.getElement('.l-header__menu');
    $.isOpen = 'is-open';

    _bindEvents();
}


function _bindEvents() {
  $.btn.addEventListener(config.event.click, () => utils.toggle($.headerMenu,$.isOpen));


}


export default menu;
