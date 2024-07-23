const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  }),
};
