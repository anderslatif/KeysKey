import library from './ChatGPT';

library.is([
    library.specialTrue.and.True.or.False,
    library.not(library.True.or.True)
]);