import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { counterDriverFactory } from './Counter.driver';
import { Counter } from './';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { counterTestkitFactory } from '../../testkit';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { counterTestkitFactory as enzymeCounterTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('Counter', () => {
  const createDriver = createUniDriverFactory(counterDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
      />,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should render "disabled" counter', async () => {
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        disabled
      />,
    );

    expect(await driver.isCounterComponentDisabled()).toBe(true);
    expect(await driver.isMinusButtonDisabled()).toBe(true);
    expect(await driver.isPlusButtonDisabled()).toBe(true);
    expect(await driver.isInputComponentDisabled()).toBe(true);
  });

  it('should render "error" counter', async () => {
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        error
      />,
    );

    expect(await driver.hasCounterComponentError()).toBe(true);
  });

  it('should render counter with disabled minus button', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        min={value}
        value={value}
      />,
    );

    expect(await driver.isMinusButtonDisabled()).toBe(true);
  });

  it('should render counter with disabled plus button', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        max={value}
        value={value}
      />,
    );

    expect(await driver.isPlusButtonDisabled()).toBe(true);
  });

  it('should render counter with specific value in input field', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        value={value}
      />,
    );

    expect(await driver.isInputValueEqualTo(value)).toBe(true);
  });

  it('should call onChange with specific values', async () => {
    let acc;
    const value = 10;
    const step = 1;
    const func = jest.fn((val: string) => {
      acc = Number(val);
    });
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={func}
        step={step}
        value={value}
      />,
    );

    await driver.pressMinus();
    expect(acc).toEqual(value - step);

    await driver.pressPlus();
    expect(acc).toEqual(value + step);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Counter
            inputAriaLabel={'amount'}
            incrementAriaLabel={'increment'}
            decrementAriaLabel={'decrement'}
            onChange={() => {}}
          />,
          counterTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Counter
            inputAriaLabel={'amount'}
            incrementAriaLabel={'increment'}
            decrementAriaLabel={'decrement'}
            onChange={() => {}}
          />,
          enzymeCounterTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});