// Взято из кода БЗ https://github.com/simplygoodsoftware/pyrus/blob/1458aacd5e67984af97077303715d27104dea493/frontend/shared/helpers/knowledgeBase/url/formatStringToSlug.ts

// Таблица соответствия для транслитерации. Соответствует ГОСТ Р 7.0.34—2014.
const TRANSLIT_CONVERT_RU = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "j",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "x",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shh",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
};

function formatStringToTranslit(string) {
    const TRANSLIT_CONVERT = TRANSLIT_CONVERT_RU;

    return Array.from(string).reduce((acc, char) => {
        const charLowerCase = char.toLocaleLowerCase();
        const translitChar = TRANSLIT_CONVERT[charLowerCase] ?? char;
        const translitCharWithNoralizedCapitalization =
            charLowerCase === char
                ? translitChar
                : translitChar.toLocaleUpperCase();

        return acc + translitCharWithNoralizedCapitalization;
    }, "");
}

const replaceSeparatorWithWhitespace = (string, separator) => {
    const regex = new RegExp(separator, "g");
    return string.replace(regex, " ");
};
// [^\S]+ - выбирает больше двух пробельных символов подряд. Не просто пробельный символ \s, потому что нужно учесть полупробелы и пр.
const removeExtraWhitespaces = (string) =>
    string.trim().replace(/[^\S]+/g, " ");
// "u" - флаг для поддержки 4-байтных символов Unicode.
// "\p{Letter}" - символ Unicode категории Letter, то есть буква алфавита любого языка.
// "0-9" - арабские цифры.
// " " - пробел.
const filterAlphabetNumberWhitespace = (string) =>
    string.replace(/[^\p{Letter}0-9 ]/gu, "");
const replaceWhitespaceWithSeparator = (string, separator) =>
    string.replace(/ /g, separator);

// Форматирует строку в slug.
// Разрешены только буквы алфавита любого языка, арабские цифры, пробел и разделитель. Русские буквы транслитерируются.
// slug - это уникальная строка идентификатор, понятная человеку (в отличие от ID) и содержащая только "безопасные" символы.
// TODO: написать тесты для regex
function formatStringToSlug(string) {
    const SEPARATOR = "-";
    const MAX_LENGTH = 1000;
    let result = "";

    // "Hello World! Привет Français в 2022-2023!" → "Hello World! Privet Français v 2022-2023!".
    result = formatStringToTranslit(string);
    // "Hello World! Privet Français v 2022-2023!" → "Hello World! Privet Français v 2022 2023!".
    result = replaceSeparatorWithWhitespace(result, SEPARATOR);
    // В начале и конце строки обрезаем пробелы, множественные пробелы заменяем одиночными.
    result = removeExtraWhitespaces(result);
    // "Hello World! Privet Français v 2022 2023!" → "Hello World Privet Français v 2022 2023".
    result = filterAlphabetNumberWhitespace(result);
    result = result.slice(0, MAX_LENGTH);
    // Еще раз склеиваем пробелы.
    result = removeExtraWhitespaces(result);
    // "Hello World Privet Français v 2022 2023" → "hello world privet français v 2022 2023".
    result = result.toLocaleLowerCase();
    // "hello world privet français v 2022 2023" → "hello-world-privet-français-v-2022-2023".
    result = replaceWhitespaceWithSeparator(result, SEPARATOR);

    return result;
}

CMS.registerEventListener({
    name: 'preSave',
    handler: ({ entry }) => {
        const collectionName = entry.get('collection');

        if (collectionName === 'ru_vacancies') {
            const slug = entry.getIn(['data', 'slug'], '');
            const newSlug = formatStringToSlug(slug);

            return entry.get('data').set('slug', newSlug);
        }

        if (!entry.getIn(['data', 'slug'], '')) {
            const title = entry.getIn(['data', 'title'], '') || '';
            const newSlug = formatStringToSlug(title);

            return entry.get('data').set('slug', newSlug);
        }
    }
});
