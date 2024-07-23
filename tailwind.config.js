/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    // Add any additional paths here if necessary
  ],
  theme: {
    extend: {
      // 扩展默认主题配置
      colors: {
        primary: '#1a202c', // 默认主色
        secondary: '#2d3748', // 默认次色
      },
      // 可以自定义更多的配置
    },
    screens: {
      // Tailwind CSS 默认的响应式断点
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    // 如果有需要可以添加插件
  ],
};
