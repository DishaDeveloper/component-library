// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Accordion from './Accordion';
import defaultData, { noData } from './Accordion.mock-data';

it('renders correctly', () => {
  const component = snapshot(Accordion, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Accordion');
});

it('does not render without data', () => {
  const component = renderComponent(Accordion, { componentProps: noData });
  const text = component.queryByTestId('Accordion');
  expect(text).toBe(null);
});
