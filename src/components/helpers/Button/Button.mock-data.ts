const defaultData = {
  auto: false,
  disabled: false,
  label: 'Button',
  loading: false,
  onClick: () => console.log('A button was clicked!'),
  ref: null,
  tag: 'button',
  type: 'default',
};

export default defaultData;

export const disabled = {
  ...defaultData,
  disabled: true,
};

export const iconLeft = {
  ...defaultData,
  iconLeft: 'faCalendarAlt',
  label: 'Button',
};

export const iconOnly = {
  ...defaultData,
  auto: true,
  iconLeft: 'faPowerOff',
  label: undefined,
};

export const iconRight = {
  ...defaultData,
  iconRight: 'faCalendarAlt',
  label: 'Button',
};

export const loading = {
  ...defaultData,
  loading: true,
};
