import { TabsComponentProps } from './TabsComponent';

export const defaultData: TabsComponentProps = {
  rendering: { componentName: 'TabsComponent' },
  params: {},
  fields: {
    //  variant: 'default',
    variant: {
      value: 'default',
    },

    title: {
      value: 'Our disciplines',
    },
    description: {
      value: '<span> Our disciplines help us think big and act bigger\n</span>',
    },
    text: {
      value: '<p>Here is the description</p>',
    },
    tabsData: [
      {
        id: '1105cfdf-87f3-4a23-aee9-36c7a74c9d83',
        url: '/Components/Tabs/TabsData/digitalStrategy',
        name: 'digitalStrategy',
        displayName: 'digitalStrategy',
        fields: {
          title: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'TAB1',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '_blank',
            },
          },
          content: {
            value:
              '<span>Our Digital Strategy experts harness the true potential of digital by creating lasting and meaningful relationships with consumers. Along the way, we help organizations connect their digital investments, develop differentiated experiences and engagement, and ultimately drive ROI.</span>',
          },
        },
      },
      {
        id: 'c17ff9b2-d257-45ad-8bae-1ad6d03c16bf',
        url: '/Components/Tabs/TabsData/engagementManagement',
        name: 'engagementManagement',
        displayName: 'engagementManagement',
        fields: {
          title: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'TAB2',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '_blank',
            },
          },
          content: {
            value:
              '<span>The ultimate liaison between clients and our internal teams, Engagement Leads oversee the various components of our projects and ensure they each work in harmony to answer our client’s business goals. From crafting custom strategies to building clients relationships, we set the stage for lasting success.</span>',
          },
        },
      },
      {
        id: 'b940651d-38eb-4b37-9113-b579c0da5c89',
        url: '/Components/Tabs/TabsData/experienceDesign',
        name: 'experienceDesign',
        displayName: 'experienceDesign',
        fields: {
          title: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'TAB3',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '_blank',
            },
          },
          content: {
            value:
              '<span>Along the way, we help organizations connect their digital investments, develop differentiated experiences and engagement, and ultimately drive .</span>',
          },
        },
      },
    ],
    tabsBackgroundColor: {
      value: '#166830',
    },
    tabsAlignment: {
      value: 'start',
    },
    roundedTabs: {
      value: true,
    },
    customTabStyleClasses: {
      value: '',
    },
    activeTabStyleClasses: {
      value: '',
    },
    defaultTabStyleClasses: {
      value: '',
    },
  },
};
export const tabpills = {
  rendering: { componentName: 'TabsComponent' },
  params: {},
  fields: {
    //  variant: 'default',
    variant: {
      value: 'tabpills',
    },
    text: {
      value:
        '<p>This is <em>richtext</em> content to show the <strong>simplest</strong> possible example of a implementaiton possible.</p>',
    },
    title: {
      value: 'Our disciplines',
    },
    description: {
      value: '<span> Our disciplines help us think big and act bigger\n</span>',
    },
    tabsData: [
      {
        id: '1105cfdf-87f3-4a23-aee9-36c7a74c9d83',
        url: '/Components/Tabs/TabsData/digitalStrategy',
        name: 'digitalStrategy',
        displayName: 'digitalStrategy',
        fields: {
          title: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'TAB1',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '_blank',
            },
          },
          content: {
            value:
              '<span>Our Digital Strategy experts harness the true potential of digital by creating lasting and meaningful relationships with consumers. Along the way, we help organizations connect their digital investments, develop differentiated experiences and engagement, and ultimately drive ROI.</span>',
          },
        },
      },
      {
        id: 'c17ff9b2-d257-45ad-8bae-1ad6d03c16bf',
        url: '/Components/Tabs/TabsData/engagementManagement',
        name: 'engagementManagement',
        displayName: 'engagementManagement',
        fields: {
          title: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'TAB2',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '_blank',
            },
          },
          content: {
            value:
              '<span>The ultimate liaison between clients and our internal teams, Engagement Leads oversee the various components of our projects and ensure they each work in harmony to answer our client’s business goals. From crafting custom strategies to building clients relationships, we set the stage for lasting success.</span>',
          },
        },
      },
      {
        id: 'b940651d-38eb-4b37-9113-b579c0da5c89',
        url: '/Components/Tabs/TabsData/experienceDesign',
        name: 'experienceDesign',
        displayName: 'experienceDesign',
        fields: {
          title: {
            value: {
              href: 'https://www.horizontaldigital.com/',
              text: 'TAB3',
              linktype: 'external',
              url: 'https://www.horizontaldigital.com/',
              anchor: '',
              target: '_blank',
            },
          },
          content: {
            value:
              '<span>Along the way, we help organizations connect their digital investments, develop differentiated experiences and engagement, and ultimately drive .</span>',
          },
        },
      },
    ],
    tabsBackgroundColor: {
      value: '#166830',
    },
    tabsAlignment: {
      value: 'start',
    },
    roundedTabs: {
      value: true,
    },
    customTabStyleClasses: {
      value: '',
    },
    activeTabStyleClasses: {
      value: '',
    },
    defaultTabStyleClasses: {
      value: '',
    },
  },
};

//export const tabpills = {
//  rendering: { componentName: 'TabsComponent' },
//  params: {},
//  fields: {
//    variant: 'tabpills',
//    tabsData: [
//      { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
//      { id: 2, title: 'Tab 2', content: 'Content for Tab 2' },
//      { id: 3, title: 'Tab 3', content: 'Content for Tab 3' },
//      { id: 4, title: 'Tab 4', content: 'Content for Tab 4' },
//      { id: 5, title: 'Tab 5', content: 'Content for Tab 5' },
//    ],

//    tabsProperties: {
//      // tabsBgColor: '#166830',
//      // tabsAlignment: 'start',
//      // roundedTabs: true,
//      customTabStyleClasses: '',
//      activeTabStyleClasses: '',
//      defaultTabStyleClasses: '',
//    },
//  },
//};

export default defaultData;
