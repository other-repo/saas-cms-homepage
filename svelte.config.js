import sveltePreprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// Define whether production mode is active
const production = process.env.NODE_ENV === 'production';

export default {
  preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  }),
};

