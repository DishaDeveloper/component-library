import { ProgressBarProps } from './ProgressBar';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
export const defaultData: ProgressBarProps = {
  rendering: { componentName: 'ProgressBar' },
  params: {},
  fields: {
    percentage: {
      value: 10,
    },
    variant: {
      value: 'linear',
    },
    percentageBasedText: [
      {
        id: 'bcbbb37f-bf1f-4e10-b1af-abdc5ad9b0a9',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedText/firstHalf',
        name: 'firstHalf',
        displayName: 'firstHalf',
        fields: {
          minValue: {
            value: 0,
          },
          maxValue: {
            value: 50,
          },
          text: {
            value: 'Fail',
          },
        },
      },
      {
        id: 'eacb6c8d-f36d-4360-909c-35abf5b88e23',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedText/secondHalf',
        name: 'secondHalf',
        displayName: 'secondHalf',
        fields: {
          minValue: {
            value: 50,
          },
          maxValue: {
            value: 100,
          },
          text: {
            value: 'Pass',
          },
        },
      },
    ],
    percentagePosition: {
      value: 'right',
    },
    percentageBasedTextPosition: {
      value: 'left',
    },
    percentageBasedIconPosition: {
      value: 'bottom',
    },
    percentageBasedColor: [
      {
        id: '97ebb4a0-869e-4d85-aee2-e0be954abb26',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedColor/firstHalf',
        name: 'firstHalf',
        displayName: 'firstHalf',
        fields: {
          minValue: {
            value: 0,
          },
          maxValue: {
            value: 50,
          },
          color: {
            value: '#F58466',
          },
        },
      },
      {
        id: '2a06f948-be0e-482d-9b4d-7fa86ac7ee11',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedColor/secondHalf',
        name: 'secondHalf',
        displayName: 'secondHalf',
        fields: {
          minValue: {
            value: 50,
          },
          maxValue: {
            value: 100,
          },
          color: {
            value: '#497978',
          },
        },
      },
    ],
    defaultColor: {
      value: '#d8d8d8',
    },
    progressBarWidth: {
      value: 200,
    },
    showButtons: {
      value: true,
    },
    showPercentage: {
      value: true,
    },
    buttonsPosition: {
      value: 'top',
    },
    incrementDecrementValue: {
      value: 10,
    },
    percentageBasedIcon: [
      {
        id: 'faf46276-e41f-424f-9441-3293570361bf',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedIcon/firstHalf',
        name: 'firstHalf',
        displayName: 'firstHalf',
        fields: {
          minValue: {
            value: 0,
          },
          maxValue: {
            value: 50,
          },
          icon: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Project/Headless-Websites/Component-Library/component-library/ProgressBar/close.svg?h=50&iar=0&w=50&hash=4F111F972C502E7AA7C6E8B871A3CDDF',
              alt: 'close',
              width: '50',
              height: '50',
            },
          },
        },
      },
      {
        id: 'd8fd30db-9677-4d3e-89c2-51553bfd780c',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedIcon/secondHalf',
        name: 'secondHalf',
        displayName: 'secondHalf',
        fields: {
          minValue: {
            value: 50,
          },
          maxValue: {
            value: 100,
          },
          icon: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Project/Headless-Websites/Component-Library/component-library/ProgressBar/tick.svg?h=50&iar=0&w=50&hash=8CC1C4C64B63FDA33B1682A723A4148A',
              alt: 'tick',
              width: '50',
              height: '50',
            },
          },
        },
      },
    ],
    highLightColor: {
      value: '#7FC3BA',
    },
    progressBarHeight: {
      value: 20,
    },
  },
};
export const circularData: ProgressBarProps = {
  rendering: { componentName: 'ProgressBar' },
  params: {},
  fields: {
    percentage: {
      value: 10,
    },
    variant: {
      value: 'circular',
    },
    percentageBasedText: [
      {
        id: 'bcbbb37f-bf1f-4e10-b1af-abdc5ad9b0a9',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedText/firstHalf',
        name: 'firstHalf',
        displayName: 'firstHalf',
        fields: {
          minValue: {
            value: 0,
          },
          maxValue: {
            value: 50,
          },
          text: {
            value: 'Fail',
          },
        },
      },
      {
        id: 'eacb6c8d-f36d-4360-909c-35abf5b88e23',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedText/secondHalf',
        name: 'secondHalf',
        displayName: 'secondHalf',
        fields: {
          minValue: {
            value: 50,
          },
          maxValue: {
            value: 100,
          },
          text: {
            value: 'Pass',
          },
        },
      },
    ],
    percentagePosition: {
      value: 'top',
    },
    percentageBasedTextPosition: {
      value: 'right',
    },
    percentageBasedIconPosition: {
      value: 'bottom',
    },
    percentageBasedColor: [
      {
        id: '97ebb4a0-869e-4d85-aee2-e0be954abb26',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedColor/firstHalf',
        name: 'firstHalf',
        displayName: 'firstHalf',
        fields: {
          minValue: {
            value: 0,
          },
          maxValue: {
            value: 50,
          },
          color: {
            value: '#F58466',
          },
        },
      },
      {
        id: '2a06f948-be0e-482d-9b4d-7fa86ac7ee11',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedColor/secondHalf',
        name: 'secondHalf',
        displayName: 'secondHalf',
        fields: {
          minValue: {
            value: 50,
          },
          maxValue: {
            value: 100,
          },
          color: {
            value: '#497978',
          },
        },
      },
    ],
    defaultColor: {
      value: '#d8d8d8',
    },
    progressBarWidth: {
      value: 200,
    },
    showButtons: {
      value: true,
    },
    showPercentage: {
      value: true,
    },
    buttonsPosition: {
      value: 'left',
    },
    incrementDecrementValue: {
      value: 10,
    },
    percentageBasedIcon: [
      {
        id: 'faf46276-e41f-424f-9441-3293570361bf',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedIcon/firstHalf',
        name: 'firstHalf',
        displayName: 'firstHalf',
        fields: {
          minValue: {
            value: 0,
          },
          maxValue: {
            value: 50,
          },
          icon: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Project/Headless-Websites/Component-Library/component-library/ProgressBar/close.svg?h=50&iar=0&w=50&hash=4F111F972C502E7AA7C6E8B871A3CDDF',
              alt: 'close',
              width: '50',
              height: '50',
            },
          },
        },
      },
      {
        id: 'd8fd30db-9677-4d3e-89c2-51553bfd780c',
        url: '/Components/ProgressBar/ProgressBarPercentageBasedIcon/secondHalf',
        name: 'secondHalf',
        displayName: 'secondHalf',
        fields: {
          minValue: {
            value: 50,
          },
          maxValue: {
            value: 100,
          },
          icon: {
            value: {
              src: 'https://sc-basic-learningsc.dev.local/-/media/Project/Headless-Websites/Component-Library/component-library/ProgressBar/tick.svg?h=50&iar=0&w=50&hash=8CC1C4C64B63FDA33B1682A723A4148A',
              alt: 'tick',
              width: '50',
              height: '50',
            },
          },
        },
      },
    ],
    highLightColor: {
      value: '#7FC3BA',
    },
    progressBarHeight: {
      value: 20,
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};
