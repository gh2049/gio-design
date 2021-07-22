import React from 'react';
import { SizeType } from '@gio-design/utils/es/design-context';
import { CommonProps } from '@gio-design/utils/es/interfaces';
import { DropdownProps } from '../components/dropdown';

export interface InputTriggerProps extends CommonProps {
  /**
   * 是否为 `active` 状态
   */
  actived?: boolean;
  /**
   * 是否为无边框模式
   */
  borderless?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 宽度适应内容
   */
  fitContent?: boolean;
  /**
   * 自定义展示内容
   */
  itemRender?: () => React.ReactNode;
  /**
   * placeholder
   */
  placeholder?: string;
  /**
   * 组件输入框的尺寸
   */
  size?: SizeType;
  /**
   * 带有图标后缀的 `InputTrigger`
   */
  suffix?: React.ReactNode;
}

export interface SelectorProps
  extends CommonProps,
    Omit<InputTriggerProps, 'className' | 'style'>,
    Omit<DropdownProps, 'trigger' | 'placement' | 'prefixCls' | 'children'> {
  /**
   * 触发器自定义的 `className`
   */
  triggerClassName?: string;
  /**
   * 触发器的自定义样式
   */
  triggerStyle?: React.CSSProperties;
  /**
   * 点击清除 icon 时的回调
   */
  onClear?: () => void;
  /**
   * 自定义的触发器
   */
  trigger?: React.ReactNode;
}