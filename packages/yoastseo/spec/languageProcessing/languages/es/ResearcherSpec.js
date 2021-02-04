import Researcher from "../../../../src/languageProcessing/languages/es/Researcher.js";
import Paper from "../../../../src/values/Paper.js";
import getMorphologyData from "../../../specHelpers/getMorphologyData";
import functionWords from "../../../../src/languageProcessing/languages/es/config/functionWords";
import transitionWords from "../../../../src/languageProcessing/languages/es/config/transitionWords";
import firstWordExceptions from "../../../../src/languageProcessing/languages/es/config/firstWordExceptions";
import twoPartTransitionWords from "../../../../src/languageProcessing/languages/es/config/twoPartTransitionWords";
import stopWords from "../../../../src/languageProcessing/languages/es/config/stopWords";
import syllables from "../../../../src/languageProcessing/languages/es/config/syllables.json";
const morphologyDataES = getMorphologyData( "es" );

describe( "a test for the Spanish Researcher", function() {
	const researcher = new Researcher( new Paper( "Este es un documento nuevo!" ) );

	it( "returns true if the inherited Abstract Researcher has a specific research", function() {
		expect( researcher.hasResearch( "getParagraphLength" ) ).toBe( true );
	} );

	it( "returns true if the English Researcher has a specific research", function() {
		expect( researcher.hasResearch( "getPassiveVoice" ) ).toBe( true );
	} );

	it( "returns the Spanish function words", function() {
		expect( researcher.getConfig( "functionWords" ) ).toEqual( functionWords.all );
	} );

	it( "returns the Spanish first word exceptions", function() {
		expect( researcher.getConfig( "firstWordExceptions" ) ).toEqual( firstWordExceptions );
	} );

	it( "returns the singleWords Spanish transition words", function() {
		expect( researcher.getConfig( "transitionWords" ) ).toEqual( transitionWords );
	} );

	it( "returns the Spanish two part transition word", function() {
		expect( researcher.getConfig( "twoPartTransitionWords" ) ).toEqual( twoPartTransitionWords );
	} );

	it( "returns the Spanish syllables data", function() {
		expect( researcher.getConfig( "syllables" ) ).toEqual( syllables );
	} );

	it( "returns the Spanish stop words", function() {
		expect( researcher.getConfig( "stopWords" ) ).toEqual( stopWords );
	} );

	it( "returns the Spanish locale", function() {
		expect( researcher.getConfig( "language" ) ).toEqual( "es" );
	} );

	it( "returns the Spanish passive construction type", function() {
		expect( researcher.getConfig( "passiveConstructionType" ) ).toEqual( "periphrastic" );
	} );

	it( "stems a word using the Spanish stemmer", function() {
		researcher.addResearchData( "morphology", morphologyDataES );
		expect( researcher.getHelper( "getStemmer" )( researcher )( "gatos" ) ).toEqual( "gat" );
	} );

	it( "splits Spanish sentence into parts", function() {
		const sentence = "Ellos eran tres amigos cuando los conocí.";
		expect( researcher.getHelper( "getSentenceParts" )( sentence )[ 0 ].getSentencePartText() ).toBe( "eran tres amigos" );
	} );

	it( "checks if a Spanish sentence is passive or not", function() {
		expect( researcher.getHelper( "isPassiveSentencePart" )( "Una manzana será comida por mí.", [ "será" ] ) ).toEqual( true );
		expect( researcher.getHelper( "isPassiveSentencePart" )( "Yo comeré una manzana.", [] ) ).toEqual( false );
	} );

	it( "calculates the Flesch reading score using the formula for Spanish", function() {
		const statistics = {
			numberOfWords: 1000,
			numberOfSentences: 100,
			syllablesPer100Words: 250,
		};
		expect( researcher.getHelper( "fleschReadingScore" )( statistics ) ).toBe( 46.6 );
	} );
} );