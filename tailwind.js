import { Platform, StyleSheet } from 'react-native';

//tailwind imports
import { create } from 'tailwind-rn';
import styles from './styles.json';

/**
 * Creates Styles from tailwind.config.js into styles.json
 * Keep any manually assigned color and font family style object configurations
 * within this JS file. Any styling outside of color and fontFamily must be
 * configured within tailwind.config.js
 */

const {tailwind, getColor} = create(styles);

/**
 * Font Family configuration styles object
 * Truthy determines with platform the mobile app is running on,
 * Change the font according to Android first, or iOS second
 */

const fontConfig = StyleSheet.create({

    //default fontFamily for the entire app
    fontFamilyText: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },

});

/**
 * Color configuration styles object
 * 
 * Styles that must be manually configured:
 * - border colors
 * - text colors
 */

const colorConfig = StyleSheet.create({

    //borderColor used in GetStarted2.js
    borderColor: {
        borderColor: "rgba(100, 31, 152, 0.3)",
    },

    //blue text color used in GetStarted2.js
    textColorBlue: {
        color: 'blue',
    },

    //white texst color used in GetStarted.js 
    textColorWhite: {
        color: '#FFFFFF',
    },

});

export {
    tailwind, 
    getColor,
    ///////////////////
    fontConfig,
    colorConfig,
};