const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an Anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an Anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an Anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
