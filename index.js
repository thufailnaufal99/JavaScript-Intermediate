const cekPalindrom = require("./PL");
const reverseWords = require("./RW");
const FazzFood = require("./FF");
const divideAndSort = require("./DS");

//cekPalindrom
cekPalindrom("SIang");
cekPalindrom("MalAm");
cekPalindrom(123);
cekPalindrom("AA");
cekPalindrom("Malam Malam");
cekPalindrom("123");

//reverseWords
reverseWords("Saya Belajar Javascript");
reverseWords("Saya Javascript");
reverseWords("Javascript");
reverseWords(123);
reverseWords("");

//FazzFood
FazzFood("75000", 123, "5", "FAZZFOOD50");
FazzFood("75000", "FAZZFOOD50", 5, true);
FazzFood(75000, "FAZZFOOD50", "5", true);
FazzFood(75000, 123, 5, true);
FazzFood(75000, "FAZZFOOD50", 5, "FAZZFOOD50");
FazzFood(75000, "FAZZFOOD50", 5, false);

FazzFood(200000, "FAZZFOOD50", 5, true);
FazzFood(200000, "FAZZFOOD50", 5, false);
FazzFood(25000, "FAZZFOOD50", 5, true);
FazzFood(25000, "FAZZFOOD50", 5, false);
FazzFood(50000, " ", 5, false);

FazzFood(50000, "DITRAKTIR60", 5, true);
FazzFood(50000, "DITRAKTIR60", 5, false);
FazzFood(200000, "DITRAKTIR60", 5, true);
FazzFood(200000, "DITRAKTIR60", 5, false);
FazzFood(20000, "DITRAKTIR60", 5, true);
FazzFood(20000, "DITRAKTIR60", 5, false);

//divideAndSort
divideAndSort(595656015946605);
divideAndSort(72803920529031);
