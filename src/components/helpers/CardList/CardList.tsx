import {
  Field,
  ImageField,
  Link,
  LinkField,
  Text,
  RichText,
  NextImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
// import Image from 'next/image';
import clsx from 'clsx';
import useWindowDimensions from '../CustomHooks/useWindowDimensions';
interface TagsProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    tag: Field<string>;
  };
}

interface CardFields {
  desktopImage: ImageField;
  tabletImage: ImageField;
  mobileImage: ImageField;
  title: Field<string>;
  description: Field<string>;
  button: LinkField;
  tags: TagsProps[];
  link: LinkField;
  rating: Field<number>;
}
interface CardProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: CardFields;
}
interface Fields {
  variant: Field<string>;
  cards: Array<CardProps>;
  title: Field<string>;
  description: Field<string>;
}
export type CardListProps = {
  uid: string;
  componentName: string;
  dataSource: string;
  params: Record<string, unknown>;
  fields: Fields;
};

const CardList = (props: CardListProps): JSX.Element => {
  // Fail out if fields aren't present
  if (props === null || props === undefined) return <></>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const windowsDimensionDetails = useWindowDimensions();
  // console.log('windowsDimensionDetails: ', windowsDimensionDetails);
  return (
    <>
      {props?.fields?.variant?.value === 'base' && props?.fields?.cards.length > 0 ? (
        <div
          className={clsx(
            'flex flex-col flex-wrap items-center justify-around space-y-8 lg:flex-row lg:space-y-0 lg:items-start'
          )}
        >
          {props.fields.cards.map((card: CardProps) => {
            return (
              <>
                <div className={clsx('p-6 bg-white border border-gray-200 rounded-lg shadow-xl ')}>
                  <Text
                    tag="h5"
                    field={card?.fields?.title}
                    className={clsx(
                      'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
                    )}
                  />
                  <RichText
                    editable
                    field={card.fields?.description}
                    className={clsx('mb-3 font-normal text-gray-700 dark:text-gray-400')}
                  />

                  <Link
                    field={card?.fields?.button}
                    className={clsx(
                      'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[100px]'
                    )}
                  />
                  <div className="mt-2">
                    {card.fields?.tags.map((tag) => {
                      return (
                        <>
                          <Text
                            tag="span"
                            field={tag?.fields?.tag}
                            className={clsx(
                              'px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full w-fit'
                            )}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : null}

      {props?.fields?.variant?.value === 'imageOnTop' && props?.fields?.cards.length > 0 ? (
        <div
          className={clsx(
            'flex flex-col lg:flex-row flex-wrap items-center justify-around space-y-8 lg:space-y-0 lg:items-start'
          )}
        >
          {props.fields.cards.map((card: CardProps) => {
            return (
              <>
                <div
                  className={clsx(
                    'flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-xl max-w-3xl'
                  )}
                >
                  {windowsDimensionDetails.width <= 640 ? (
                    <NextImage field={card.fields.mobileImage} className={clsx('space-y-4')} />
                  ) : null}
                  {windowsDimensionDetails.width >= 641 ? (
                    <NextImage field={card.fields.tabletImage} className={clsx('space-y-4')} />
                  ) : null}

                  <div className="flex flex-col mt-2">
                    <Text
                      tag="h5"
                      field={card?.fields?.title}
                      className={clsx(
                        'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
                      )}
                    />
                    <RichText
                      editable
                      field={card.fields?.description}
                      className={clsx('mb-3 font-normal text-gray-700 dark:text-gray-400')}
                    />

                    <Link
                      field={card?.fields?.button}
                      className={clsx(
                        'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[100px]'
                      )}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : null}

      {props?.fields?.variant?.value === 'imageOnLeft' && props?.fields?.cards.length > 0 ? (
        <div className={clsx('flex flex-wrap justify-between space-y-8 ')}>
          {props.fields.cards.map((card: CardProps) => {
            return (
              <>
                <div
                  className={clsx(
                    'flex p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex-col sm:flex-row'
                  )}
                >
                  <div className="">
                    {windowsDimensionDetails.width <= 640 ? (
                      <NextImage field={card.fields.mobileImage} className={clsx('space-y-4')} />
                    ) : null}
                    {windowsDimensionDetails.width >= 641 ? (
                      <NextImage field={card.fields.tabletImage} className={clsx('space-y-4')} />
                    ) : null}
                  </div>

                  <div className="flex flex-col sm:mt-2 ml-2">
                    <Text
                      tag="h5"
                      field={card?.fields?.title}
                      className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    />
                    <RichText
                      editable
                      field={card.fields?.description}
                      className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    />

                    <Link
                      field={card?.fields?.button}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[100px]"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default CardList;
