// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import LinearProgressBar from './LinearProgressBar';
import CircularProgressBar from './CircularProgressBar';
import { useEffect, useState } from 'react';

export interface PercentageBasedData {
  id: string;
  url: string;
  displayName: string;
  name: string;
  fields: {
    minValue?: Field<number>;
    maxValue?: Field<number>;
    color?: Field<string>;
    text?: Field<string>;
    icon?: ImageField;
  };
}

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
export interface ProgressBarFields {
  percentage?: Field<number>;
  variant?: Field<string>;
  showPercentage?: Field<boolean>;
  showButtons?: Field<boolean>;
  percentagePosition?: Field<string>;
  percentageBasedText?: Array<PercentageBasedData>;
  percentageBasedTextPosition?: Field<string>;
  buttonsPosition?: Field<string>;
  incrementDecrementValue?: Field<number>;
  percentageBasedIcon?: Array<PercentageBasedData>;
  percentageBasedIconPosition?: Field<string>;
  percentageBasedColor?: Array<PercentageBasedData>;
  defaultColor?: Field<string>;
  highLightColor?: Field<string>;
  progressBarHeight?: Field<number>;
  progressBarWidth?: Field<number>;
}

export type ProgressBarProps = {
  rendering?: { componentName: string };
  params?: { [key: string]: string };
  fields: ProgressBarFields;
  percentage?: number;
  showButtons?: Function;
};

const ProgressBar = ({ fields }: ProgressBarProps): JSX.Element => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (fields?.percentage?.value) {
      setPercentage(fields.percentage.value);
    }
  }, []);
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const clickOnIncrementDecrementButton = (newValue: number) => {
    setPercentage(newValue);
  };
  const showButtons = (position: string) => {
    if (
      fields?.showButtons?.value &&
      fields?.buttonsPosition?.value === position &&
      fields?.incrementDecrementValue?.value
    ) {
      const newDecrementValue = percentage - fields.incrementDecrementValue.value;
      const newIncrementValue = percentage + fields.incrementDecrementValue.value;
      return (
        <div className="flex">
          <button
            type="button"
            className={clsx('btn btn-primary p-[10px] border-2', {
              'opacity-50': newDecrementValue <= 0,
            })}
            disabled={newDecrementValue <= 0}
            onClick={() => {
              if (clickOnIncrementDecrementButton) {
                clickOnIncrementDecrementButton(newDecrementValue);
              }
            }}
          >
            -
          </button>
          <button
            type="button"
            className={clsx('btn btn-primary ml-[10px] p-[10px] border-2', {
              'opacity-50': newIncrementValue > 100,
            })}
            disabled={newIncrementValue > 100}
            onClick={() => {
              if (clickOnIncrementDecrementButton) {
                clickOnIncrementDecrementButton(newIncrementValue);
              }
            }}
          >
            +
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div data-component="authorable/general/progressBar" data-testid="progressBar">
      {fields?.variant?.value === 'linear' ? (
        <LinearProgressBar fields={fields} percentage={percentage} showButtons={showButtons} />
      ) : (
        <CircularProgressBar fields={fields} percentage={percentage} showButtons={showButtons} />
      )}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ProgressBarProps>(ProgressBar);
export default ProgressBar;
