import {RadioButtonGroup} from '.';import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import {RadioButton} from "../RadioButton";
import {CheckboxGroupLayout} from "../CheckboxGroup";

class RadioButtonGroupVisual extends React.Component<any> {
  render() {
    return (
        <VisualTestContainer>
          <RadioButtonGroup {...this.props} />
        </VisualTestContainer>
    );
  }
}

const RadioButtonEl = (
    <RadioButton value={'n'} key={1} checked={false} onChange={() => {}} label="hello" />
);

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {
          children: [RadioButtonEl],
        },
      },
      {
        it: 'with label',
        props: {
          children: [RadioButtonEl],
          label: "No worries. I'm a label.",
        },
      },
      {
        it: 'with horizontal layout',
        props: {
          children: [RadioButtonEl],
          label: "No worries. I'm a label.",
          layout: CheckboxGroupLayout.Horizontal,
        },
      },
      {
        it: 'with horizontal layout with error text',
        props: {
          children: [RadioButtonEl],
          label: "No worries. I'm a label.",
          layout: CheckboxGroupLayout.Horizontal,
          errorText: "I'm an error",
          error: true,
        },
      },
      {
        it: 'with disabled',
        props: {
          children: [RadioButtonEl],
          label: "No worries. I'm a label.",
          disabled: true,
        },
      },
      {
        it: 'with error',
        props: {
          children: [RadioButtonEl],
          label: "No worries. I'm a label.",
          error: true,
        },
      },
      {
        it: 'with error text',
        props: {
          children: [RadioButtonEl],
          label: "No worries. I'm a label.",
          error: true,
          errorText: "I'm error text",
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`RadioButtonGroup/${describe}`, module).add(it, () => (
        <RadioButtonGroupVisual {...props} />
    ));
  });
});
