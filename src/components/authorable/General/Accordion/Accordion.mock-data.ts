import { AccordionProps } from './Accordion';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: AccordionProps = {
  rendering: { componentName: 'Accordion' },
  params: {},
  fields: {
    variant: {
      value: 'openAccodion',
      //value: 'openAccodion',
    },
    content: [
      {
        id: '916faf58-1689-4252-ae19-084e854c9f98',
        url: '/test-krushna/Page-Components/Accordion/AccordionQuestion1',
        name: 'AccordionQuestion1',
        displayName: 'AccordionQuestion1',
        fields: {
          question: {
            value: 'My First Question',
          },
          answer: {
            value: '<strong>My First Question&rsquo;s Answer</strong>',
          },
        },
      },
      {
        id: '51c80fbb-3a4f-44d7-b837-4acbf31e5f52',
        url: '/test-krushna/Page-Components/Accordion/AccordionQuestion2',
        name: 'AccordionQuestion2',
        displayName: 'AccordionQuestion2',
        fields: {
          question: {
            value: 'My Second Question',
          },
          answer: {
            value: "&lt;b&gt;My Second Question's Answer&lt;/b&gt;",
          },
        },
      },
    ],
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
