import { Field, LinkField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { useCallback, useMemo, useState } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import clsx from 'clsx';
import Link from 'next/link';

interface Tabs {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    title: LinkField;
    content: Field<string>;
  };
}
interface Fields {
  variant: Field<string>;
  title: Field<string>;
  description: Field<string>;
  text: Field<string>;
  tabsData: Array<Tabs>;
  tabsBackgroundColor: Field<string>;
  tabsAlignment: Field<string>;
  roundedTabs: Field<boolean>;
  customTabStyleClasses: Field<string>;
  activeTabStyleClasses: Field<string>;
  defaultTabStyleClasses: Field<string>;
}

export type TabsComponentProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const TabsComponent: React.FC<TabsComponentProps> = ({
  fields,
}: TabsComponentProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(fields?.tabsData[0]?.id);
  const {
    variant,
    tabsAlignment,
    roundedTabs,
    customTabStyleClasses,
    activeTabStyleClasses,
    defaultTabStyleClasses,
  } = fields;

  /**
   * callback function which takes  tabID as an input and set the tab active
   * @function handleTabClick
   * @param  tabId: string - The ID of the tab to show content
   * @returns {string} The class name for the tabs button.
   */

  const handleTabClick = useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
    },
    [activeTab]
  );

  /**
   * Returns the class name for the tabs button based on variant.
   * @function tabsButtonClass
   * @param  tabId - The ID of the tab, for matching the same idex title to display.
   * @returns {string} The class name for the tabs button.
   */

  const tabsButtonClass = (tabId: string): string => {
    if (
      (customTabStyleClasses.value ||
        activeTabStyleClasses.value ||
        defaultTabStyleClasses.value) === ''
    ) {
      if (variant.value == 'default') {
        return clsx(`mr-2 py-2 px-4 rounded-lg ${roundedTabs ? 'rounded-full' : 'rounded-lg'}`, {
          [`bg-[blue] text-white`]: activeTab === tabId,
          'bg-gray-300': activeTab !== tabId,
        });
      } else if (variant.value === 'tabpills') {
        return clsx(
          `py-2 px-4 mb-2 rounded-tl-lg rounded-bl-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`,
          {
            'bg-gradient-to-r from-purple-400 to-blue-500 text-white border-b-4 border-blue-600':
              activeTab === tabId,
            'bg-gray-300 text-gray-700 border-b-4 border-gray-400': activeTab !== tabId,
          }
        );
      } else {
        return '';
      }
    } else {
      return clsx(`${customTabStyleClasses}`, {
        [activeTabStyleClasses.value]: activeTab === tabId,
        [defaultTabStyleClasses.value]: activeTab !== tabId,
      });
    }
  };

  /**
   * Returns the class name for the tabs button based on variant.
   * @function topTabsAlignment
   *
   * @param {string} tabsAlignment -(external params) The alignment style for the tabs. Can be one of: "start","end","center".
   * @returns {string} The class name for the top tabs aligment on the bases on the data
   *
   */
  const topTabsAlignment = (): string => {
    return clsx(`flex justify-${tabsAlignment}`);
  };

  /**
   * Returns the array of links of the tabs to render
   * @function renderTabesLabels
   * @returns {Array} - It will render all the values of labels of the tabs
   */

  //TODO: Replace the button with Link
  const renderTabesLabels = (): Array<any> => {
    return fields?.tabsData?.map((tab) => (
      <button
        key={tab.id}
        className={tabsButtonClass(tab.id)}
        onClick={() => handleTabClick(tab.id)}
      >
        {tab.fields.title.value.text}
      </button>
    ));
  };

  /**
   * Returns the Content Array to be shown which is dependent on the tabsData and activeTab
   * @function renderTabesContent
   * @returns {Array} Array of  Richtext
   *
   */
  const renderTabesContent = useMemo(() => {
    return fields?.tabsData?.map((tab) => (
      <div key={tab.id}>
        <RichText
          editable
          field={tab.fields.content}
          className={`${activeTab === tab.id ? 'block' : 'hidden'} bg-white rounded-lg p-4 `}
        />
      </div>
    ));
  }, [fields?.tabsData, activeTab]);

  /**
   * Returns the html structure of the tabs Component on the bases of variant
   * @function renderTabsOnVariants
   * @returns {<div></div>} returns html structure
   *
   */
  const renderTabsOnVariants = () => {
    if (variant.value === 'default') {
      return (
        <div className="bg-salmon p-4">
          <div className={topTabsAlignment()}>{renderTabesLabels()}</div>
          <div className="mt-4">{renderTabesContent}</div>
        </div>
      );
    } else if (variant.value === 'tabpills') {
      return (
        <div className="flex">
          <div className="w-1/4">
            <div className="flex flex-col">{renderTabesLabels()}</div>
          </div>
          <div className="w-3/4">{renderTabesContent}</div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div className="mb-8">
        <ContentBlock
          fields={fields}
          rendering={{
            componentName: 'TabsComponent',
          }}
          params={{}}
        />
      </div>

      {renderTabsOnVariants()}
    </>
  );
};

export default TabsComponent;
