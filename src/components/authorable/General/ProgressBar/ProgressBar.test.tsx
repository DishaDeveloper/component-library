// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import ProgressBar from './ProgressBar';
import { defaultData, noData } from './ProgressBar.mock-data';

it('renders correctly', () => {
  const component = snapshot(ProgressBar, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/progressBar');
});

it('does not render without data', () => {
  const component = renderComponent(ProgressBar, { componentProps: noData });
  const text = component.queryByTestId('progressBar');
  expect(text).toBe(null);
});
