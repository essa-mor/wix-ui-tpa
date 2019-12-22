import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ProGallery } from './';

class ProGalleryVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <ProGallery {...this.props} />
      </VisualTestContainer>
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
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ProGallery/${describe}`, module).add(it, () => (
      <ProGalleryVisual {...props} />
    ));
  });
});
