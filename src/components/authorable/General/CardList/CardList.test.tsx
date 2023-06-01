// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import CardList from './CardList';
import defaultData, { noData } from './CardList.mock-data';

it('renders correctly', () => {
  const component = snapshot(CardList, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/CardList');
});

it('does not render without data', () => {
  const component = renderComponent(CardList, { componentProps: noData });
  const text = component.queryByTestId('CardList');
  expect(text).toBe(null);
});
