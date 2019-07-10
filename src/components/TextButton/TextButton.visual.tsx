import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { TEXT_BUTTON_PRIORITY, TextButton } from './';

class TextButtonVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <TextButton data-hook={'storybook-e2e-TextButton'} {...this.props} />
      </TPAComponentsProvider>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'mobile',
        props: {
          mobile: true,
        },
      },
      {
        it: 'primary',
        props: {
          priority: TEXT_BUTTON_PRIORITY.primary,
        },
      },
      {
        it: 'secondary',
        props: {
          priority: TEXT_BUTTON_PRIORITY.secondary,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`TextButton/${describe}`, module).add(it, () => (
      <TextButtonVisual {...props} />
    ));
  });
});