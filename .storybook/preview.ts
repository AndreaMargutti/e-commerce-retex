import type { Preview } from "@storybook/vue3";
import { h, Suspense } from "vue";

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
};

export default preview;
