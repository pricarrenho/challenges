function ransomNoteInMagazine(ransomNote, magazine) {
  if (typeof ransomNote !== "string" || typeof magazine !== "string")
    return "Coloque um valor válido";

  const normalizedRansomNote = ransomNote.toLowerCase();
  let normalizedMagazine = magazine.toLowerCase();

  for (const value of normalizedRansomNote) {
    if (normalizedMagazine.includes(value)) {
      normalizedMagazine = normalizedMagazine.replace(value, "");
    } else {
      return false;
    }
  }

  return true;
}

const ransomNote1 = "a";
const magazine1 = "b";

const ransomNote2 = "aa";
const magazine2 = "ab";

const ransomNote3 = "ab";
const magazine3 = "aacpb";

const ransomNote4 = "aab";
const magazine4 = "baa";

const ransomNote5 = "aab";
const magazine5 = 4;

console.log("teste1", ransomNoteInMagazine(ransomNote1, magazine1));
console.log("teste2", ransomNoteInMagazine(ransomNote2, magazine2));
console.log("teste3", ransomNoteInMagazine(ransomNote3, magazine3));
console.log("teste4", ransomNoteInMagazine(ransomNote4, magazine4));
console.log("teste5", ransomNoteInMagazine(ransomNote5, magazine5));
