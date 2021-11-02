import React from 'react';
import { Canvas, Title, Heading, Story, Subheading, ArgsTable } from '@storybook/addon-docs';
import { useIntl } from 'react-intl';
import Modal from '../Modal';

export default function ListPage() {
  const { formatMessage } = useIntl();

  return (
    <>
      <Title>{formatMessage({ defaultMessage: 'Modal 弹窗' })}</Title>
      <p>
        {formatMessage({
          defaultMessage: '在当前页面正中打开一个浮层',
        })}
      </p>
      <Heading>{formatMessage({ defaultMessage: '代码演示' })}</Heading>
      <Subheading>{formatMessage({ defaultMessage: '基本样式' })}</Subheading>
      <Canvas>
        <Story id="components-modal--default" />
      </Canvas>

      <Subheading>{formatMessage({ defaultMessage: '自定义高的 Modal' })}</Subheading>
      <Canvas>
        <Story id="components-modal--custom-height" />
      </Canvas>

      <Subheading>{formatMessage({ defaultMessage: '分步骤的 Modal' })}</Subheading>
      <Canvas>
        <Story id="components-modal--step-modal-demo" />
      </Canvas>

      <Subheading>{formatMessage({ defaultMessage: '函数式调用' })}</Subheading>
      <Canvas>
        <Story id="components-modal--function-modal" />
      </Canvas>

      <Subheading>{formatMessage({ defaultMessage: 'Hook 调用' })}</Subheading>
      <Canvas>
        <Story id="components-modal--use-modal" />
      </Canvas>

      <Heading>{formatMessage({ defaultMessage: '参数说明' })}</Heading>
      <ArgsTable of={Modal} />
    </>
  );
}
