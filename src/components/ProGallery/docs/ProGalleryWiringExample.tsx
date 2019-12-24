import * as React from 'react';
import { ProGallery } from '../';
import styles from './ProGalleryWiringExample.st.css';
import { proGalleryItems, proGalleryOptions } from './examples';
import * as _ from 'lodash';

export const ProGalleryWiringExample = () => {
  return (
    <ProGallery
      height={1000}
      width={1000}
      items={proGalleryItems}
      eventsListener={_.noop}
      scrollingElement={e => e.target.parentElement}
      options={proGalleryOptions[0]}
    />
  );
};
