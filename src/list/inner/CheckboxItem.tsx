import React, { DOMAttributes, useContext, useMemo } from 'react';
import Checkbox from '../../checkbox/Checkbox';
import { PREFIX } from '../constants';
import usePrefixCls from '../../utils/hooks/use-prefix-cls';
import { BaseItemProps } from '../interfance';
import Item from './baseItem';
import WithRef from '../../utils/withRef';
import { ListContext } from '../context';
import { selectStatus } from '../util';

const CheckboxItem: React.ForwardRefRenderFunction<
  HTMLLIElement,
  BaseItemProps & Omit<DOMAttributes<HTMLInputElement | HTMLLIElement>, 'onClick'>
> = (props, ref?) => {
  const { value, children, onClick, disabled, selected, ...rest } = props;
  const prefixCls = `${usePrefixCls(PREFIX)}--item`;

  /** context */
  const context = useContext(ListContext);
  const { value: contextValue, disabled: contextDisabled, onClick: contextOnClick } = context;
  const mergedDisabled = disabled ?? contextDisabled;

  const mergeSelected = useMemo(() => selected ?? selectStatus(value, contextValue), [selected, contextValue, value]);

  const contentRender = (element: React.ReactNode) => (
    <>
      <Checkbox
        checked={mergeSelected}
        className={`${prefixCls}--checkbox`}
        value={value}
        disabled={mergedDisabled}
        onClick={(e) => {
          if (!mergedDisabled) {
            contextOnClick?.(value);
            onClick?.(value);
            e?.stopPropagation();
          }
        }}
      />
      {element}
    </>
  );
  return (
    <Item ref={ref} disabled={mergedDisabled} onClick={onClick} value={value} contentRender={contentRender} {...rest}>
      {children}
    </Item>
  );
};

export default WithRef(CheckboxItem);
