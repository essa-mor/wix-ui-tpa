import { Dialog, DialogProps } from '.';
import Registry from '@ui-autotools/registry';
import * as React from 'react';

const DialogMetadata = Registry.getComponentMetadata(Dialog);
DialogMetadata.nonReactStrictModeCompliant = true;

const DialogContent = () => (
  <div>
    <h2 id="dialog4_label" className="dialog_label">
      End of the Road!
    </h2>
    <p id="dialog4_desc" className="dialog_desc">
      You activated a fake link or button that goes nowhere! The link or button
      is present for demonstration purposes only.
    </p>
  </div>
);

DialogMetadata.addSim({
  title: 'render',
  props: {
    isOpen: true,
    children: <DialogContent />,
    'aria-label': 'Dialog',
  } as DialogProps,
});

DialogMetadata.addSim({
  title: 'Manual Focus',
  props: {
    isOpen: true,
    children: <div>This is the content!</div>,
    manualFocus: true,
    closeButtonRef: React.createRef<HTMLButtonElement>(),
  } as DialogProps,
});

DialogMetadata.addSim({
  title: 'A11Y',
  props: {
    isOpen: true,
    children: <DialogContent />,
    'aria-labelledby': 'dialog_label',
    'aria-describedby': 'dialog4_desc',
  } as DialogProps,
});
