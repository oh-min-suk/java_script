const word = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
console.log(word.replace('밥', '라면'));

console.log(word.replace(/밥/, '라면'));

console.log(word.replace(/밥/g, '라면'));

console.log(word.replaceAll('밥', '라면'));
console.log(word.replaceAll(/밥/g, '라면'));