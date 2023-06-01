import { PercentageBasedData, ProgressBarFields } from './ProgressBar';
import { Text, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
const showPercentageBaseText = (
  position: string,
  fields: ProgressBarFields,
  percentage: number
) => {
  if (
    fields.percentageBasedText &&
    fields.percentageBasedText.length > 0 &&
    fields.percentageBasedTextPosition?.value === position
  ) {
    let selectedData = getSelectedData(fields.percentageBasedText, percentage);
    if (selectedData) {
      return <Text tag="p" field={selectedData.text} />;
    }
  }
  return null;
};
const getSelectedData = (data: Array<PercentageBasedData>, percentage: number) => {
  let selectedData = data.filter((obj: PercentageBasedData) => {
    if (
      obj?.fields?.minValue?.value !== undefined &&
      obj?.fields?.minValue?.value !== null &&
      obj?.fields?.maxValue?.value !== undefined &&
      obj?.fields?.maxValue?.value !== null
    ) {
      return obj.fields.minValue.value <= percentage && obj.fields.maxValue.value >= percentage;
    }
    return null;
  });
  if (selectedData && selectedData[0]) {
    return selectedData[0].fields;
  }
  return null;
};
const showPercentageBaseIcon = (
  position: string,
  fields: ProgressBarFields,
  percentage: number
) => {
  if (
    fields.percentageBasedIcon &&
    fields.percentageBasedIcon.length > 0 &&
    fields.percentageBasedIconPosition?.value === position
  ) {
    let selectedData = getSelectedData(fields.percentageBasedIcon, percentage);
    if (selectedData) {
      return <NextImage field={selectedData.icon} />;
    }
  }
  return null;
};
export const getHighlightedColor = (fields: ProgressBarFields, percentage: number) => {
  if (fields.percentageBasedColor && fields.percentageBasedColor.length > 0) {
    let selectedData = getSelectedData(fields.percentageBasedColor, percentage);
    if (selectedData) {
      return selectedData?.color?.value;
    }
  }
  return fields.highLightColor?.value || '#7FC3BA';
};
const showPercentage = (position: string, fields: ProgressBarFields, percentage: number) => {
  if (fields.showPercentage?.value && fields.percentagePosition?.value === position) {
    return <p>{percentage}%</p>;
  }
  return null;
};
export const showProgressBarContent = (
  position: string,
  fields: ProgressBarFields,
  percentage: number,
  showButtons: Function | undefined
) => {
  return (
    <>
      {showPercentageBaseText(position, fields, percentage)}
      {showPercentageBaseIcon(position, fields, percentage)}
      {showPercentage(position, fields, percentage)}
      {showButtons && showButtons(position)}
    </>
  );
};
