import jabez from "./jabez";

/**
 * Generate some Jabez-like text.
 * @function generateText
 * @public
 * @param 	{Int} 	paragraphs 		The required number of paragraphs.
 * @param 	{Int} 	minSentences 	The minimum number of sentences in each paragraph.
 * @param 	{Int} 	maxSentences 	The maximum number of sentences in each paragraph.
 * @return 	{[String]} 				The generated text (each paragraph is an item in the array).
 */
export const generateText = (paragraphs, minSentences, maxSentences) => {
    // Split the source sentences into an array
    var sentences = jabez.split("\n");
    // Generate the text.
    var text = new Array(paragraphs).fill("");
    for (let i = 0; i < paragraphs; i++) {
        // Build paragraph
        var paragraphLength = Math.floor(Math.random() * (maxSentences - minSentences + 1) + minSentences);
        var paragraph = "";
        for (let j = 0; j < paragraphLength; j++) {
            // Select a random sentence and remove it from the array
            var randomIndex = Math.floor(Math.random() * sentences.length);
            var randomSentence = sentences[randomIndex];
            sentences.splice(randomIndex, 1);
            // Add sentence to paragraph
            paragraph += randomSentence + "  ";
            // Special case if we run out of sentences because the user requested everything
            if (sentences.length === 0) {
                // Add paragraph to text and return early
                text[i] = paragraph;
                return text;
            }
        }
        // Add paragraph to text
        text[i] = paragraph;
    }
    // All done
    return text;
}