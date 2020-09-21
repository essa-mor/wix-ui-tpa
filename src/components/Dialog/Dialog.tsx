import * as React from 'react';
import { st, classes } from './Dialog.st.css';
import { DATA_HOOKS } from './constants';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

import { Modal } from '../Modal';
import { IconButton } from '../IconButton';
import { Close as CloseIcon } from '../../assets/icons';

export interface DialogProps {
  /** Whether the modal is opened */
  isOpen?: boolean;
  /** Whether to use our focus trap or to manage the focus manually. */
  manualFocus?: boolean;
  /** Adds a ref for the close button. This prop might be used when you choose the manual focus. */
  closeButtonRef?: React.RefObject<HTMLButtonElement>;
  /** Callback for when the close button is clicked */
  onClose?(): void;
  /** Children to render inside dialog */
  children?: React.ReactNode;
  /** Defines a string value that labels the dialog element. Optional. */
  'aria-label'?: string;
  /** Identifies the element that labels the dialog element. Optional. */
  'aria-labelledby'?: string;
  /** Gives the dialog an accessible description by referring to the dialog content that describes the primary message or purpose of the dialog. Optional. */
  'aria-describedby'?: string;
}

interface DefaultProps {
  isOpen: boolean;
  manualFocus: boolean;
}

/** Dialog */
export class Dialog extends React.Component<DialogProps> {
  static displayName = 'Dialog';
  static defaultProps: DefaultProps = {
    isOpen: false,
    manualFocus: false,
  };

  render() {
    const {
      isOpen,
      manualFocus,
      closeButtonRef,
      onClose,
      children,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      ['aria-describedby']: ariaDescribedBy,
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            className={st(classes.root, { mobile })}
            data-mobile={mobile}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
          >
            <Modal
              isOpen={isOpen}
              focusTrap={!manualFocus}
              onRequestClose={onClose}
            >
              <div className={classes.closeButtonWrapper}>
                <IconButton
                  className={classes.closeIconButton}
                  data-hook={DATA_HOOKS.CLOSE_BTN}
                  innerRef={closeButtonRef}
                  onClick={onClose}
                  icon={<CloseIcon />}
                />
              </div>
              <div className={classes.dialogContent}>{children}</div>
            </Modal>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
