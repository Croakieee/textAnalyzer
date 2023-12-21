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

    // Подсчет самых часто встречающихся слов
    const mostFrequentWords = getMostFrequentItems(words, 5);

    // Подсчет самых часто встречающихся букв
    const lettersOnly = text.replace(/[^a-zA-Z]/g, ''); // Убираем все символы, кроме букв
    const mostFrequentLetters = getMostFrequentItems([...lettersOnly], 5);

    // Проверка на наличие пустого текста
    const isEmptyText = text === '';

    return {
        wordCount,
        characterCount,
        sentenceCount,
        uniqueWordCount,
        averageWordLength,
        characterCountWithoutSpaces,
        mostFrequentWords,
        mostFrequentLetters,
        isEmptyText,
    };
}

function getMostFrequentItems(items, count) {
    const itemFrequencyMap = items.reduce((map, item) => {
        map.set(item, (map.get(item) || 0) + 1);
        return map;
    }, new Map());

    const sortedItems = [...itemFrequencyMap.entries()].sort((a, b) => b[1] - a[1]);

    return sortedItems.slice(0, count).map(item => item[0]);
}

// Пример использования
const sampleText = "This is a sample sentence. It has multiple words and some punctuation!";
const analysisResult = analyzeText(sampleText);

console.log("Analysis Result:", analysisResult);
