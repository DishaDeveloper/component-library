// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  variant: Field<string>;
  content: {
    id: string;
    url: string;
    name: string;
    displayName: string;
    fields: {
      question: Field<string>;
      answer: Field<string>;
    };
  }[];
}

export type AccordionProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

// Initialization for ES Users

const Accordion = ({ fields }: AccordionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div id="accordionExample">
      {fields.content.map((data, index) => {
        return (
          <>
            <div className="border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0">
                <button
                  className="group relative flex w-full items-center px-5 py-4 text-left"
                  type="button"
                  onClick={() => handleClick(index)}
                >
                  <Text
                    field={data.fields.question}
                    tag="section"
                    editable={false}
                    encode={false}
                    className="font-weight-bold"
                    data-sample="other-attributes-pass-through"
                  />

                  <span className="ml-auto h-5 w-5 shrink-0">
                    <FontAwesomeIcon icon={index === activeIndex ? faAngleDown : faAngleUp} />
                  </span>
                </button>
              </h2>
              {index === activeIndex && (
                <div>
                  <div className="px-5 py-4">
                    <RichText
                      field={data.fields.answer}
                      tag="section"
                      editable={false}
                      className="text-center"
                      data-sample="other-attributes-pass-through"
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default Accordion;
