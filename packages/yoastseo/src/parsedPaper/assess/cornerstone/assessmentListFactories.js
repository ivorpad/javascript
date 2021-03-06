/**
 * Factory functions for creating lists of assessments for cornerstone content.
 *
 * To be used in creating the different kinds of assessors.
 */

/**
 * Creates a new list of SEO assessments.
 *
 * @returns {module:parsedPaper/assess.Assessment[]} The list of SEO assessments.
 *
 * @private
 * @memberOf module:parsedPaper/assess
 */
const constructSEOAssessments = () => [
	// Needs to be populated by fancy new assessments that work on the tree representation of the text.
];

/**
 * Creates a new list of readability assessments.
 *
 * @returns {module:parsedPaper/assess.Assessment[]} The list of readability assessments.
 *
 * @private
 * @memberOf module:parsedPaper/assess
 */
const constructReadabilityAssessments = () => [
	// Needs to be populated by fancy new assessments that work on the tree representation of the text.
];

/**
 * Creates a new list of SEO assessments for related keyphrases.
 *
 * @returns {module:parsedPaper/assess.Assessment[]} The list of SEO assessments.
 *
 * @private
 * @memberOf module:parsedPaper/assess
 */
const constructRelatedKeyphraseAssessments = () => [
	// Needs to be populated by fancy new assessments that work on the tree representation of the text.
];

export {
	constructSEOAssessments,
	constructReadabilityAssessments,
	constructRelatedKeyphraseAssessments,
};
