import { InputButtonProps } from '../input';
// import { OptionProps as CascaderOptionProps } from '../cascader/interfance';
import { OptionProps } from '../list/interfance';
import { Placement, TriggerAction } from '../popover/interface';
import { ListProps } from '../list';

export interface ListPickerProps extends Pick<ListProps, 'model' | 'disabled' | 'className' | 'style'> {
  size?: 'small' | 'normal';
  /**
   * 触发方式
   */
  trigger?: TriggerAction | TriggerAction[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value?: string | string[], options?: OptionProps | OptionProps[]) => void;
  prefixCls?: string;
  placeholder?: string;
  /**
   * cascader 级联文本连接符
   */
  separator?: string;
  onClear?: (e?: React.MouseEvent<Element, MouseEvent>) => void;
  /**
   * 触发器样式
   */
  triggerProps?: Pick<
    InputButtonProps,
    'disabled' | 'className' | 'style' | 'allowClear' | 'maxWidth' | 'value' | 'prefix' | 'suffix'
  >;
  /**
   * custom trigger render
   */
  renderTrigger?: () => React.ReactElement;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  getContainer?: (node: HTMLElement) => HTMLElement;
  needConfim?: boolean;
  confimText?: string;
  onConfim?: (value: string | string[] | undefined, options?: OptionProps | OptionProps[]) => void;
  placement?: Placement;
  overlayStyle?: React.CSSProperties;
}

// export interface StaticListPickerProps extends Omit<ListProps, 'options'> {
//   options: SelectionProps[] | OptionProps[];
//   isSelection?: boolean;
// }

export interface TriggerProps extends Omit<InputButtonProps, 'value' | 'active'> {
  value?: string | React.ReactNode;
  separator?: string;
}