import { ProgressBarProps } from './ProgressBar';
import clsx from 'clsx';
import { showProgressBarContent, getHighlightedColor } from './ProgressBarHelper';

const CircularProgressBar = ({
  fields,
  percentage = 0,
  showButtons,
}: ProgressBarProps): JSX.Element => {
  const circularProgressBarWidth = fields.progressBarWidth?.value || 200;
  const radius = circularProgressBarWidth / 3;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className={clsx('flex items-center w-fit h-fit')}>
      {showProgressBarContent('left', fields, percentage, showButtons)}
      <div className="flex  items-center flex-col">
        {showProgressBarContent('top', fields, percentage, showButtons)}
        <div className="relative w-fit h-fit">
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            {showProgressBarContent('center', fields, percentage, showButtons)}
          </div>
          <svg
            width={circularProgressBarWidth}
            height={circularProgressBarWidth}
            className="relative"
            viewBox={`0 0 ${circularProgressBarWidth} ${circularProgressBarWidth}`}
          >
            <circle
              cx={circularProgressBarWidth / 2}
              cy={circularProgressBarWidth / 2}
              strokeWidth={fields.progressBarHeight?.value || 10}
              r={radius}
              className="fill-none"
              style={{ stroke: fields.defaultColor?.value || '#d8d8d8' }}
            />
            <circle
              cx={circularProgressBarWidth / 2}
              cy={circularProgressBarWidth / 2}
              strokeWidth={fields.progressBarHeight?.value || 10}
              r={radius}
              className=" fill-none duration-500"
              style={{
                strokeDashoffset: dashOffset,
                strokeDasharray: dashArray,
                stroke: getHighlightedColor(fields, percentage),
              }}
              transform={`rotate(-90 ${circularProgressBarWidth / 2} ${
                circularProgressBarWidth / 2
              })`}
            />
          </svg>
        </div>
        {showProgressBarContent('bottom', fields, percentage, showButtons)}
      </div>
      {showProgressBarContent('right', fields, percentage, showButtons)}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ProgressBarProps>(ProgressBar);
export default CircularProgressBar;
