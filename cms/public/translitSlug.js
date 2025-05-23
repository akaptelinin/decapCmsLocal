const symbolMap = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shh',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'yu',
    я: 'ya'
};

function translit(str) {
    return str
        .toLowerCase()
        .split('')
        .map(ch => {
            if (map[ch] !== undefined) return map[ch];
            if (/[a-z0-9]/.test(ch)) return ch;
            if (ch === ' ' || ch === '_' || ch === ',') return '-';
            return '';
        })
        .join('')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

window.slugify = translit;
