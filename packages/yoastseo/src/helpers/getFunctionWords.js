/*
 * The script collects all the lists of function words per language and returns this collection to a Researcher or a
 * stringProcessing script
 */

import germanFunctionWordsFactory from "../researches/german/functionWords.js";
const germanFunctionWords = germanFunctionWordsFactory();
import englishFunctionWordsFactory from "../researches/english/functionWords.js";
const englishFunctionWords = englishFunctionWordsFactory();
import dutchFunctionWordsFactory from "../researches/dutch/functionWords.js";
const dutchFunctionWords = dutchFunctionWordsFactory();
import spanishFunctionWordsFactory from "../researches/spanish/functionWords.js";
const spanishFunctionWords = spanishFunctionWordsFactory();
import italianFunctionWordsFactory from "../researches/italian/functionWords.js";
const italianFunctionWords = italianFunctionWordsFactory();
import frenchFunctionWordsFactory from "../researches/french/functionWords.js";
const frenchFunctionWords = frenchFunctionWordsFactory();
import portugueseFunctionWordsFactory from "../researches/portuguese/functionWords.js";
const portugueseFunctionWords = portugueseFunctionWordsFactory();
import russianFunctionWordsFactory from "../researches/russian/functionWords.js";
const russianFunctionWords = russianFunctionWordsFactory();
import polishFunctionWordsFactory from "../researches/polish/functionWords.js";
const polishFunctionWords = polishFunctionWordsFactory();
import swedishFunctionWordsFactory from "../researches/swedish/functionWords.js";
const swedishFunctionWords = swedishFunctionWordsFactory();
import indonesianFunctionWordsFactory from "../researches/indonesian/functionWords.js";
const indonesianFunctionWords = indonesianFunctionWordsFactory();
import hebrewFunctionWordsFactory from "../researches/hebrew/functionWords.js";
const hebrewFunctionWords = hebrewFunctionWordsFactory();
import arabicFunctionWordsFactory from "../researches/arabic/functionWords.js";
const arabicFunctionWords = arabicFunctionWordsFactory();
import farsiFunctionWordsFactory from "../researches/farsi/functionWords.js";
const farsiFunctionWords = farsiFunctionWordsFactory();
import hungarianFunctionWordsFactory from "../researches/hungarian/functionWords.js";
const hungarianFunctionWords = hungarianFunctionWordsFactory();
import norwegianFunctionWordsFactory from "../researches/norwegian/functionWords.js";
const norwegianFunctionWords = norwegianFunctionWordsFactory();
import turkishFunctionWordsFactory from "../researches/turkish/functionWords.js";
const turkishFunctionWords = turkishFunctionWordsFactory();

/**
 * Returns the function words for all languages.
 *
 * @returns {Object} Function words for all languages.
 */
export default function() {
	return {
		en: englishFunctionWords,
		de: germanFunctionWords,
		nl: dutchFunctionWords,
		fr: frenchFunctionWords,
		es: spanishFunctionWords,
		it: italianFunctionWords,
		pt: portugueseFunctionWords,
		ru: russianFunctionWords,
		pl: polishFunctionWords,
		sv: swedishFunctionWords,
		id: indonesianFunctionWords,
		he: hebrewFunctionWords,
		ar: arabicFunctionWords,
		fa: farsiFunctionWords,
		hu: hungarianFunctionWords,
		nb: norwegianFunctionWords,
		tr: turkishFunctionWords,
	};
}
