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

function translitSlug(str) {
    return str
        .toLowerCase()
        .split('')
        .map(ch => {
            if (/[a-z0-9]/.test(ch)) return ch;
            if (symbolMap[ch] !== undefined) return symbolMap[ch];
            if (/[a-z0-9]/.test(ch)) return ch;
            return '-';
        })
        .join('')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

CMS.registerEventListener({
    name: 'preSave',
    handler: ({ entry }) => {
        if (entry.getIn(['data', 'slug'], '')) return;
        const title = entry.getIn(['data', 'title'], '') || '';
        const slug = translitSlug(title);
        return entry.get('data').set('slug', slug);
    }
});
