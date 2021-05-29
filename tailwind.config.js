/**
 * TailwindCSS config file. Refer to the following link for the basics of
 * Tailwind config files: https://tailwindcss.com/docs/guides/create-react-app
 * 
 * Use command `npx create-tailwind-rn` to create styles.json
 * The command must be run everytime a new style is added.
 * 
 * Regular Style objects can be still written inside individual
 * components for testing purposes. Once testing the style objects
 * are complete, the styles must be added to this tailwind config file.
 * Check to see if tailwind already provides a pre-built style before
 * manually writing a new style.
 * 
 * Keep the following settings for purge object:
 * purge.enabled = false (switch to true ONLY in production)
 * purge.content = Array contains one string at index 0 only. The string contains the file
 * designation for each set of unused styles to purge or "remove" at production. For each
 * file directory level in the entire app, the file level must be included.
 * 
 * Custom styles not used anywhere in the app should be removed for space
 * efficiency.
 * 
 * Theme and Variants objects should always be extended; Plugins Array content can be left
 * blank.
 */


module.exports = {
  purge: {
    enabled: false,
    content: [ './**/*.js' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'loginBtn': '#ffa500',
        'loginBtn2': '#23b5ce',
        'password': '#d6204e',
        'signBtn': '#d6204e',
        //////////////////////
        'nameTextBox': '#ffa500',
        'emailTextBox': '#ff748c',
        'phoneTextBox': '#00cc00',
        'passwordTextBox': '#23b5ce',
        'createAcctBtn': '#e700e7',
      },
      fontSize: {
        '18pix': '18px',
        '20pix': '20px',
        '25pix': '25px',
        '38pix': '38px',
      },
      flex: {
        '0.4': '0.4 0.4 0%',
        '2': '2 2 0%',
        '10': '10 10 0%',
      },
      height: {
        '30pix': '30px',
        '40pix': '40px',
        '45pix': '45px',
      },
      margin: {
        '5pix': '5px',
        '20pix': '20px',
        '10percent': '10%',
        '20percent': '20%',
      },
      maxHeight: {
        '50pix': '50px',
      },
      minHeight: {
        '50pix': '50px',
      },
      width: {
        '40percent': '40%',
        '60percent': '60%',
        '80percent': '80%',
        '85percent': '85%', 
      },
      padding: {
        '5pix': '5px',
        '10pix': '10px',
        '20pix': '20px',
        '40percent': '40%',
      },
      spacing: {
        '15pix': '15px',
        '30pix': '30px',
        '80pix': '80px', 
      },
      inset: {
        '-40': '-40px',
        '-50': '-50px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
