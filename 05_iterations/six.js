const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

const newNums = []

// mynums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book one' , genere: 'fiction' , publish: 1981 , edition: 2004},
    {title: 'Book two' , genere: 'non-fiction' , publish: 1992 , edition: 2008},
    {title: 'Book three' , genere: 'history' , publish: 1999 , edition: 2007},
    {title: 'Book four' , genere: 'non-fiction' , publish: 1989 , edition: 2010},
    {title: 'Book five' , genere: 'science' , publish: 2009 , edition: 2014},
    {title: 'Book six' , genere: 'fiction' , publish: 1987 , edition: 2010},
    {title: 'Book seven' , genere: 'history' , publish: 1986 , edition: 1996},
    {title: 'Book eight' , genere: 'science' , publish: 2011 , edition: 2016},
]

let userBooks = books.filter((bk) => bk.genere === 'history')

// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genere === "history"
// })
console.log(userBooks);
