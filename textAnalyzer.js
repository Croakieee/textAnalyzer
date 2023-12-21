function analyzeText(text) {
    // Удаление лишних пробелов в начале и конце текста
    text = text.trim();

    // Анализ количества слов
    const words = text.split(/\s+/);
    const wordCount = words.length;

    // Анализ количества символов (включая пробелы)
    const characterCount = text.length;

    // Анализ количества предложений (по наличию точек, восклицательных и вопросительных знаков)
    const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
    const sentenceCount = sentences.length;

    // Подсчет количества уникальных слов
    const uniqueWords = [...new Set(words)];
    const uniqueWordCount = uniqueWords.length;

    // Подсчет средней длины слова в тексте
    const averageWordLength = characterCount / wordCount || 0;

    // Подсчет количества символов без пробелов
    const characterCountWithoutSpaces = text.replace(/\s/g, '').length;

    // Проверка на наличие пустого текста
    const isEmptyText = text === '';

    return {
        wordCount,
        characterCount,
        sentenceCount,
        uniqueWordCount,
        averageWordLength,
        characterCountWithoutSpaces,
        isEmptyText,
    };
}

// Пример использования
const sampleText = "This is a sample sentence. It has multiple words and some punctuation!";
const analysisResult = analyzeText(sampleText);

console.log("Analysis Result:", analysisResult);
