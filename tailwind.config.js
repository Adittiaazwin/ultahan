module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4A5A5", // soft-rose
          50: "#FAF5F5", // soft-rose-50
          100: "#F5EAEA", // soft-rose-100
          200: "#EBD5D5", // soft-rose-200
          300: "#E0C0C0", // soft-rose-300
          400: "#D4A5A5", // soft-rose-400
          500: "#C99090", // soft-rose-500
          600: "#B87B7B", // soft-rose-600
          700: "#A66666", // soft-rose-700
          800: "#945151", // soft-rose-800
          900: "#823C3C", // soft-rose-900
        },
        secondary: {
          DEFAULT: "#E8D5E8", // gentle-lavender
          50: "#FDFBFD", // gentle-lavender-50
          100: "#FAF6FA", // gentle-lavender-100
          200: "#F5EDF5", // gentle-lavender-200
          300: "#F0E4F0", // gentle-lavender-300
          400: "#E8D5E8", // gentle-lavender-400
          500: "#DFC6DF", // gentle-lavender-500
          600: "#D6B7D6", // gentle-lavender-600
          700: "#CDA8CD", // gentle-lavender-700
          800: "#C499C4", // gentle-lavender-800
          900: "#BB8ABB", // gentle-lavender-900
        },
        accent: {
          DEFAULT: "#C9A96E", // muted-gold
          50: "#FBF9F5", // muted-gold-50
          100: "#F7F3EB", // muted-gold-100
          200: "#F0E7D7", // muted-gold-200
          300: "#E8DBC3", // muted-gold-300
          400: "#E1CFAF", // muted-gold-400
          500: "#D9C39B", // muted-gold-500
          600: "#D2B787", // muted-gold-600
          700: "#CAAB73", // muted-gold-700
          800: "#C9A96E", // muted-gold-800
          900: "#B8985F", // muted-gold-900
        },
        background: "#FEFCF8", // warm-white
        surface: "#F5F1ED", // subtle-cream
        text: {
          primary: "#4A3B47", // deep-plum
          secondary: "#6B5B6E", // lighter-plum
        },
        success: {
          DEFAULT: "#8FBC8F", // soft-sage
          50: "#F7FBF7", // soft-sage-50
          100: "#EFF7EF", // soft-sage-100
          200: "#DFEFDF", // soft-sage-200
          300: "#CFE7CF", // soft-sage-300
          400: "#BFDFBF", // soft-sage-400
          500: "#AFD7AF", // soft-sage-500
          600: "#9FCF9F", // soft-sage-600
          700: "#8FBC8F", // soft-sage-700
          800: "#7FA47F", // soft-sage-800
          900: "#6F8C6F", // soft-sage-900
        },
        warning: {
          DEFAULT: "#D2B48C", // warm-tan
          50: "#FBF8F3", // warm-tan-50
          100: "#F7F1E7", // warm-tan-100
          200: "#EFE3CF", // warm-tan-200
          300: "#E7D5B7", // warm-tan-300
          400: "#DFC79F", // warm-tan-400
          500: "#D7B987", // warm-tan-500
          600: "#CFAB6F", // warm-tan-600
          700: "#C79D57", // warm-tan-700
          800: "#BF8F3F", // warm-tan-800
          900: "#B78127", // warm-tan-900
        },
        error: {
          DEFAULT: "#C08080", // muted-rose
          50: "#F9F5F5", // muted-rose-50
          100: "#F3EBEB", // muted-rose-100
          200: "#E7D7D7", // muted-rose-200
          300: "#DBC3C3", // muted-rose-300
          400: "#CFAFAF", // muted-rose-400
          500: "#C39B9B", // muted-rose-500
          600: "#B78787", // muted-rose-600
          700: "#AB7373", // muted-rose-700
          800: "#9F5F5F", // muted-rose-800
          900: "#934B4B", // muted-rose-900
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'romantic': '0 4px 20px rgba(212, 165, 165, 0.15)',
        'romantic-strong': '0 8px 32px rgba(212, 165, 165, 0.25)',
      },
      transitionDuration: {
        'romantic': '300ms',
        'hover': '200ms',
      },
      transitionTimingFunction: {
        'romantic': 'ease-out',
      },
    },
  },
  plugins: [],
}