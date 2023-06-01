// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import TabsComponent from './TabsComponent';
import defaultData from './TabsComponent.mock-data';

it('renders correctly', () => {
  const component = snapshot(TabsComponent, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/tabscomponent');
});

it('does not render without data', () => {
  const component = renderComponent(TabsComponent, { componentProps: noData });
  const text = component.queryByTestId('tabscomponent');
  expect(text).toBe(null);
});
