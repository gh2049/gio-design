import React from 'react';
import Checkbox, { CheckboxGroup } from '@gio-design/components/es/components/checkbox';
import '@gio-design/components/es/components/checkbox/style/css.js';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

export default () => {
  const [state, updateState] = React.useState(['Apple']);
  const handleChange = (args: any) => {
    console.log(args);
  };
  return (
    <>
      <CheckboxGroup defaultValue={['Apple']} options={options} onChange={handleChange} disabled />
      <br />
      <CheckboxGroup defaultValue={['Apple']} options={options} onChange={handleChange} />
      <br />
      <CheckboxGroup defaultValue={['Apple', 'Orange']} value={state} onChange={updateState}>
        <Checkbox value="Apple">Apple</Checkbox>
        <Checkbox value="Pear">Pear</Checkbox>
        <Checkbox value="Orange">Orange</Checkbox>
      </CheckboxGroup>
    </>
  );
};
