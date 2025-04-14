import type { Preview } from "@storybook/vue3";
import { initialize, mswLoader } from "msw-storybook-addon";
import { h, Suspense } from "vue";

initialize();

const preview: Preview = {
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  decorators: [
    (story) => ({
      setup: () => () => h(Suspense, {}, [h(story())]),
    }),
  ],
  loaders: [mswLoader],
};

export default preview;
