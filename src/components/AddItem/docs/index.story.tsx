import * as React from 'react';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as AddItemWiringExampleRaw from '!raw-loader!./AddItemWiringExample.tsx';
import * as AddItemWiringExampleCSSRaw from '!raw-loader!./AddItemWiringExample.st.css';
import { AddItemWiringExample } from './AddItemWiringExample';
import { AddItem, ALIGNMENT, SIZE } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'AddItem',
  component: AddItem,
  componentPath: '../AddItem.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-AddItem',
    disabled: false,
    hasError: false,
    children: 'Add Item',
  }),
  exampleProps: {
    alignment: Object.values(ALIGNMENT),
    size: Object.values(SIZE),
  },
  dataHook: 'storybook-AddItem',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: examples.example },
            { title: 'Mobile Example', source: examples.mobileExample },
            { title: 'Sizes', source: examples.sizesExample },
            { title: 'Alignment', source: examples.alignmentExample },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'AddItem Panel',
              example: <AddItemWiringExample />,
              rawSource: AddItemWiringExampleRaw,
              rawCSSSource: AddItemWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Border Color',
                    wixParam: 'customBorderColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'customBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Text Color',
                    wixParam: 'customTextColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
