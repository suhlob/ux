/* eslint max-len: 0 */
import { css } from '@emotion/core';

export const blockStyle = css`
  width: calc(100% - 12px);
`;

export const flexStyle = css`
  display: flex;
  > li {
    flex: 1;
    text-align: center;
  }
`;

export const globalStyles = css`
  .ant-menu {
    font-family: 'Gotham Pro', Helvetica, Arial;
    font-size: 13px;
    letter-spacing: -0.1px;
    font-variant: tabular-nums;
    -webkit-font-feature-settings: 'tnum';
            font-feature-settings: 'tnum';
    line-height: 1.5;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.65);
    background: #fff;
    line-height: 0;
    -webkit-transition: background 0.3s, width 0.2s;
    transition: background 0.3s, width 0.2s;
    zoom: 1;
  }
  .ant-menu:before,
  .ant-menu:after {
    content: '';
    display: table;
  }
  .ant-menu:after {
    clear: both;
  }
  .ant-menu ul,
  .ant-menu ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .ant-menu-hidden {
    display: none;
  }
  .ant-menu-item-group-title {
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.1px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 1.5;
    padding: 7px 8px 6px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-menu-submenu,
  .ant-menu-submenu-inline {
    -webkit-transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background: #e6f7ff;
  }
  .ant-menu-submenu .ant-menu-sub {
    cursor: initial;
    -webkit-transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-menu-item a {
    display: block;
    color: rgba(0, 0, 0, 0.65);
    text-decoration: none;
  }
  .ant-menu-item a:hover {
    color: #1890ff;
  }
  .ant-menu-item a:focus {
    text-decoration: none;
  }
  .ant-menu-item a:before {
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
  }
  .ant-menu-item-divider {
    height: 1px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.08);
    line-height: 0;
  }
  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: #1890ff;
  }
  .ant-menu-horizontal .ant-menu-item,
  .ant-menu-horizontal .ant-menu-submenu {
    margin-top: -1px;
  }
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu .ant-menu-submenu-title:hover {
    background-color: transparent;
  }
  .ant-menu-item-selected {
    color: #1890ff;
  }
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover {
    color: #1890ff;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #e6f7ff;
  }
  .ant-menu-dark.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected,
  .ant-menu-dark .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: rgba(255, 255, 255, 0.08);
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 1px solid #e8e8e8;
  }
  .ant-menu-vertical-right {
    border-left: 1px solid #e8e8e8;
  }
  .ant-menu-vertical.ant-menu-sub,
  .ant-menu-vertical-left.ant-menu-sub,
  .ant-menu-vertical-right.ant-menu-sub {
    border-right: 0;
    padding: 0;
    -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
            transform-origin: 0 0;
  }
  .ant-menu-vertical.ant-menu-sub .ant-menu-item,
  .ant-menu-vertical-left.ant-menu-sub .ant-menu-item,
  .ant-menu-vertical-right.ant-menu-sub .ant-menu-item {
    border-right: 0;
    margin-left: 0;
    left: 0;
  }
  .ant-menu-vertical.ant-menu-sub .ant-menu-item:after,
  .ant-menu-vertical-left.ant-menu-sub .ant-menu-item:after,
  .ant-menu-vertical-right.ant-menu-sub .ant-menu-item:after {
    border-right: 0;
  }
  .ant-menu-vertical.ant-menu-sub > .ant-menu-item,
  .ant-menu-vertical-left.ant-menu-sub > .ant-menu-item,
  .ant-menu-vertical-right.ant-menu-sub > .ant-menu-item,
  .ant-menu-vertical.ant-menu-sub > .ant-menu-submenu,
  .ant-menu-vertical-left.ant-menu-sub > .ant-menu-submenu,
  .ant-menu-vertical-right.ant-menu-sub > .ant-menu-submenu {
    -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
            transform-origin: 0 0;
  }
  .ant-menu-horizontal.ant-menu-sub,
  .ant-menu-vertical.ant-menu-sub,
  .ant-menu-vertical-left.ant-menu-sub,
  .ant-menu-vertical-right.ant-menu-sub {
    min-width: 160px;
  }
  .ant-menu-item,
  .ant-menu-submenu-title {
    cursor: pointer;
    margin: 0;
    padding: 0 10px;
    position: relative;
    display: block;
    white-space: nowrap;
    -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-menu-item .anticon,
  .ant-menu-submenu-title .anticon {
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
    -webkit-transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-menu-item .anticon + span,
  .ant-menu-submenu-title .anticon + span {
    -webkit-transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 1;
  }
  .ant-menu > .ant-menu-item-divider {
    height: 1px;
    margin: 4px 0;
    overflow: hidden;
    padding: 0;
    line-height: 0;
    background-color: rgba(0, 0, 0, 0.08);
  }
  .ant-menu.ant-menu-dark > .ant-menu-item-divider {
    background-color: rgba(255, 255, 255, 0.08);
  }
  .ant-menu-submenu-popup {
    position: absolute;
    border-radius: 4px;
    z-index: 1050;
    background: #fff;
  }
  .submenu-title-wrapper a {
    color: inherit;
  }
  .ant-menu-submenu-popup .submenu-title-wrapper {
    padding-right: 20px;
    display: block;
  }
  .ant-menu-submenu-popup:before {
    position: absolute;
    top: -7px;
    left: 0;
    right: 0;
    bottom: 0;
    content: ' ';
    opacity: 0.0001;
  }
  .ant-menu-submenu > .ant-menu {
    background-color: #fff;
    border-radius: 4px;
  }
  .ant-menu-submenu > .ant-menu-submenu-title:after {
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
  }
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    content: '';
    position: absolute;
    vertical-align: baseline;
    background: #fff;
    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.65)), to(rgba(0, 0, 0, 0.65)));
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    width: 6px;
    height: 1.5px;
    border-radius: 2px;
    -webkit-transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(45deg) translateY(-2px);
        -ms-transform: rotate(45deg) translateY(-2px);
            transform: rotate(45deg) translateY(-2px);
  }
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(-45deg) translateY(2px);
        -ms-transform: rotate(-45deg) translateY(2px);
            transform: rotate(-45deg) translateY(2px);
  }
  .ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before {
    background: -webkit-gradient(linear, left top, right top, from(#1890ff), to(#1890ff));
    background: -webkit-linear-gradient(left, #1890ff, #1890ff);
    background: linear-gradient(to right, #1890ff, #1890ff);
  }
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(-45deg) translateX(2px);
        -ms-transform: rotate(-45deg) translateX(2px);
            transform: rotate(-45deg) translateX(2px);
  }
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(45deg) translateX(-2px);
        -ms-transform: rotate(45deg) translateX(-2px);
            transform: rotate(45deg) translateX(-2px);
  }
  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    -webkit-transform: translateY(-2px);
        -ms-transform: translateY(-2px);
            transform: translateY(-2px);
  }
  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(-45deg) translateX(-2px);
        -ms-transform: rotate(-45deg) translateX(-2px);
            transform: rotate(-45deg) translateX(-2px);
  }
  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(45deg) translateX(2px);
        -ms-transform: rotate(45deg) translateX(2px);
            transform: rotate(45deg) translateX(2px);
  }
  .ant-menu-vertical .ant-menu-submenu-selected,
  .ant-menu-vertical-left .ant-menu-submenu-selected,
  .ant-menu-vertical-right .ant-menu-submenu-selected {
    color: #1890ff;
  }
  .ant-menu-vertical .ant-menu-submenu-selected a,
  .ant-menu-vertical-left .ant-menu-submenu-selected a,
  .ant-menu-vertical-right .ant-menu-submenu-selected a {
    color: #1890ff;
  }
  .ant-menu-horizontal {
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    line-height: 40px;
    white-space: nowrap;
  }
  .ant-menu-horizontal > .ant-menu-item,
  .ant-menu-horizontal > .ant-menu-submenu {
    position: relative;
    top: 1px;
    display: inline-block;
    vertical-align: bottom;
    border-bottom: 2px solid transparent;
  }
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-submenu-selected {
    border-bottom: 2px solid #1890ff;
    color: #1890ff;
  }
  .ant-menu-horizontal > .ant-menu-item a {
    display: block;
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-menu-horizontal > .ant-menu-item a:hover {
    color: #1890ff;
  }
  .ant-menu-horizontal > .ant-menu-item a:before {
    bottom: -2px;
  }
  .ant-menu-horizontal > .ant-menu-item-selected a {
    color: #1890ff;
  }
  .ant-menu-horizontal:after {
    content: '\\20';
    display: block;
    height: 0;
    clear: both;
  }
  .ant-menu-vertical .ant-menu-item,
  .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item,
  .ant-menu-inline .ant-menu-item {
    position: relative;
  }
  .ant-menu-vertical .ant-menu-item:after,
  .ant-menu-vertical-left .ant-menu-item:after,
  .ant-menu-vertical-right .ant-menu-item:after,
  .ant-menu-inline .ant-menu-item:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-right: 3px solid #1890ff;
    -webkit-transform: scaleY(0.0001);
        -ms-transform: scaleY(0.0001);
            transform: scaleY(0.0001);
    opacity: 0;
    -webkit-transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .ant-menu-vertical .ant-menu-item,
  .ant-menu-vertical-left .ant-menu-item,.ant-menu-item-group-title
  .ant-menu-vertical-right .ant-menu-item,
  .ant-menu-inline .ant-menu-item,
  .ant-menu-vertical .ant-menu-submenu-title,
  .ant-menu-vertical-left .ant-menu-submenu-title,
  .ant-menu-vertical-right .ant-menu-submenu-title,
  .ant-menu-inline .ant-menu-submenu-title {
    padding: 0 8px;
    font-size: 14px;
    line-height: 32px;
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Gotham Pro', Helvetica, Arial;
    font-size: 13px;
    letter-spacing: -0.1px;
  }
  .ant-menu-vertical .ant-menu-submenu,
  .ant-menu-vertical-left .ant-menu-submenu,
  .ant-menu-vertical-right .ant-menu-submenu,
  .ant-menu-inline .ant-menu-submenu {
    padding-bottom: 0.01px;
  }
  .ant-menu-vertical > .ant-menu-item,
  .ant-menu-vertical-left > .ant-menu-item,
  .ant-menu-vertical-right > .ant-menu-item,
  .ant-menu-inline > .ant-menu-item,
  .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,
  .ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,
  .ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,
  .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    line-height: 32px;
    height: 32px;
  }
  .ant-menu-inline {
    width: 100%;
  }
  .ant-menu-inline .ant-menu-selected:after,
  .ant-menu-inline .ant-menu-item-selected:after {
    -webkit-transition: opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 1;
    -webkit-transform: scaleY(1);
        -ms-transform: scaleY(1);
            transform: scaleY(1);
  }
  .ant-menu-inline .ant-menu-item,
  .ant-menu-inline .ant-menu-submenu-title {
    width: calc(100% + 1px);
  }
  .ant-menu-inline .ant-menu-submenu-title {
    padding-right: 34px;
  }
  .ant-menu-inline-collapsed {
    width: 80px;
  }
  .ant-menu-inline-collapsed > .ant-menu-item,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title,
  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    left: 0;
    text-overflow: clip;
    padding: 0 32px !important;
  }
  .ant-menu-inline-collapsed > .ant-menu-item .ant-menu-submenu-arrow,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .ant-menu-submenu-arrow,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    display: none;
  }
  .ant-menu-inline-collapsed > .ant-menu-item .anticon,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .anticon,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .anticon,
  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
    font-size: 16px;
    line-height: 40px;
    margin: 0;
  }
  .ant-menu-inline-collapsed > .ant-menu-item .anticon + span,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .anticon + span,
  .ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .anticon + span,
  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon + span {
    max-width: 0;
    display: inline-block;
    opacity: 0;
  }
  .ant-menu-inline-collapsed-tooltip {
    pointer-events: none;
  }
  .ant-menu-inline-collapsed-tooltip .anticon {
    display: none;
  }
  .ant-menu-inline-collapsed-tooltip a {
    color: rgba(255, 255, 255, 0.85);
  }
  .ant-menu-inline-collapsed .ant-menu-item-group-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 4px;
    padding-right: 4px;
  }
  .ant-menu-item-group-list {
    margin: 0;
    padding: 0;
  }
  .ant-menu-item-group-list .ant-menu-item,
  .ant-menu-item-group-list .ant-menu-submenu-title {
    padding: 0 8px 0 22px;
  }
  .ant-menu-root.ant-menu-vertical,
  .ant-menu-root.ant-menu-vertical-left,
  .ant-menu-root.ant-menu-vertical-right,
  .ant-menu-root.ant-menu-inline {
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .ant-menu-sub.ant-menu-inline {
    padding: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    border-radius: 0;
  }
  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    line-height: 40px;
    height: 40px;
    list-style-type: disc;
    list-style-position: inside;
  }
  .ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
    padding-left: 32px;
  }
  .ant-menu-item-disabled,
  .ant-menu-submenu-disabled {
    color: rgba(0, 0, 0, 0.25) !important;
    cursor: not-allowed;
    background: none;
    border-color: transparent !important;
  }
  .ant-menu-item-disabled a,
  .ant-menu-submenu-disabled a {
    color: rgba(0, 0, 0, 0.25) !important;
    pointer-events: none;
  }
  .ant-menu-item-disabled > .ant-menu-submenu-title,
  .ant-menu-submenu-disabled > .ant-menu-submenu-title {
    color: rgba(0, 0, 0, 0.25) !important;
    cursor: not-allowed;
  }
  .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after {
    background: rgba(0, 0, 0, 0.25) !important;
  }
  .ant-menu-dark,
  .ant-menu-dark .ant-menu-sub {
    color: rgba(255, 255, 255, 0.8);
    background: #3a3a44;
  }
  .ant-menu.ant-menu-sub.ant-menu-vertical {
    padding: 4px 0;
  }
  .ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow {
    opacity: 0.45;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    background: #fff;
  }
  .ant-menu-dark.ant-menu-submenu-popup {
    background: transparent;
  }
  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: #3a3a44;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
  }
  .ant-menu-dark.ant-menu-horizontal {
    border-bottom: 0;
  }
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item,
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
    border-color: #3a3a44;
    border-bottom: 0;
    top: 0;
    margin-top: 0;
  }
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item a:before {
    bottom: 0;
  }
  .ant-menu-dark .ant-menu-item,
  .ant-menu-dark .ant-menu-item-group-title,
  .ant-menu-dark .ant-menu-item a {
    color: rgba(255, 255, 255, 0.8);
  }
  .ant-menu-dark.ant-menu-inline,
  .ant-menu-dark.ant-menu-vertical,
  .ant-menu-dark.ant-menu-vertical-left,
  .ant-menu-dark.ant-menu-vertical-right {
    border-right: 0;
  }
  .ant-menu-dark.ant-menu-inline .ant-menu-item,
  .ant-menu-dark.ant-menu-vertical .ant-menu-item,
  .ant-menu-dark.ant-menu-vertical-left .ant-menu-item,
  .ant-menu-dark.ant-menu-vertical-right .ant-menu-item {
    border-right: 0;
    margin-left: 0;
    left: 0;
  }
  .ant-menu-dark.ant-menu-inline .ant-menu-item:after,
  .ant-menu-dark.ant-menu-vertical .ant-menu-item:after,
  .ant-menu-dark.ant-menu-vertical-left .ant-menu-item:after,
  .ant-menu-dark.ant-menu-vertical-right .ant-menu-item:after {
    border-right: 0;
  }
  .ant-menu-dark.ant-menu-inline .ant-menu-item,
  .ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
    width: 100%;
  }
  .ant-menu-dark .ant-menu-item:hover,
  .ant-menu-dark .ant-menu-item-active,
  .ant-menu-dark .ant-menu-submenu-active,
  .ant-menu-dark .ant-menu-submenu-open,
  .ant-menu-dark .ant-menu-submenu-selected,
  .ant-menu-dark .ant-menu-submenu-title:hover {
    background-color: transparent;
    color: #fff;
  }
  .ant-menu-dark .ant-menu-sub .ant-menu-item-active,
  .ant-menu-dark .ant-menu-sub .ant-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .ant-menu-dark .ant-menu-item:hover a,
  .ant-menu-dark .ant-menu-item-active a,
  .ant-menu-dark .ant-menu-submenu-active a,
  .ant-menu-dark .ant-menu-submenu-open a,
  .ant-menu-dark .ant-menu-submenu-selected a,
  .ant-menu-dark .ant-menu-submenu-title:hover a {
    color: #fff;
  }
  .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
  .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow {
    opacity: 1;
  }
  .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow:before {
    background: #fff;
  }
  .ant-menu-dark .ant-menu-item:hover,
  .ant-menu-dark .ant-menu-item-active,
  .ant-menu-dark .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-dark .ant-menu-submenu-active,
  .ant-menu-dark .ant-menu-submenu-title:hover {
    color: #fff !important;
  }
  .ant-menu-dark .ant-menu-item-selected {
    border-right: 0;
    color: #fff;
  }
  .ant-menu-dark .ant-menu-item-selected:after {
    border-right: 0;
  }
  .ant-menu-dark .ant-menu-item-selected a,
  .ant-menu-dark .ant-menu-item-selected a:hover {
    color: #fff;
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu.ant-menu-dark .ant-menu-submenu-selected {
    box-shadow: inset 0 -2px 0 0 #fff;
  }
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background: rgba(255, 255, 255, 0.08);
  }
  .ant-menu-dark .ant-menu-item-disabled,
  .ant-menu-dark .ant-menu-submenu-disabled,
  .ant-menu-dark .ant-menu-item-disabled a,
  .ant-menu-dark .ant-menu-submenu-disabled a {
    opacity: 0.8;
    color: rgba(255, 255, 255, 0.35) !important;
  }
  .ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title,
  .ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title {
    color: rgba(255, 255, 255, 0.35) !important;
  }
  .ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:before,
  .ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after,
  .ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow:after {
    background: rgba(255, 255, 255, 0.35) !important;
  }
  .submenu-title-wrapper a {
    text-decoration: none;
  }
  .ant-menu-vertical .ant-menu-item,
  .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-item-group-title .ant-menu-vertical-right .ant-menu-item,
  .ant-menu-inline .ant-menu-item,
  .ant-menu-vertical .ant-menu-submenu-title,
  .ant-menu-vertical-left .ant-menu-submenu-title,
  .ant-menu-vertical-right .ant-menu-submenu-title,
  .ant-menu-inline .ant-menu-submenu-title {
    box-sizing: border-box;
  }
`;
