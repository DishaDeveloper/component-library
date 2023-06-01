import { ProgressBarProps } from './ProgressBar';
import { showProgressBarContent, getHighlightedColor } from './ProgressBarHelper';

const LinearProgressBar = ({
  fields,
  percentage = 0,
  showButtons,
}: ProgressBarProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="flex items-center">
      {showProgressBarContent('left', fields, percentage, showButtons)}
      <div className="flex flex-col items-center">
        {showProgressBarContent('top', fields, percentage, showButtons)}
        <div id="progressBar" className="w-[400px] m-2 rounded-[12px] h-[10px] relative bg-black">
          <div
            id="barStatus"
            className={`h-full absolute bg-[#ff0000] rounded-[12px] duration-500`}
            style={{
              width: percentage + '%',
              backgroundColor: getHighlightedColor(fields, percentage),
            }}
          ></div>
        </div>
        {showProgressBarContent('bottom', fields, percentage, showButtons)}
      </div>
      {showProgressBarContent('right', fields, percentage, showButtons)}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ProgressBarProps>(ProgressBar);
export default LinearProgressBar;
