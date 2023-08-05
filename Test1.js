// Sort People by name using sort()

const people = { Mary: 17, Bob: 62, John: 32 };

function listPeople(people) {
  const sortedNames = Object.keys(people).sort();
  const sortedPeople = sortedNames.map((name) => `${name} (${people[name]})`);
  return sortedPeople.join(", ");
}

console.log(listPeople(people));

// without using sort()

// const people = { Mary: 17, Bob: 62, John: 32 };

// function listPeople(people) {
//   const sortedNames = Object.keys(people).reduce((sorted, name) => {
//     const insertIndex = sorted.findIndex((sortedName) => name < sortedName);
//     if (insertIndex !== -1) {
//       sorted.splice(insertIndex, 0, name);
//     } else {
//       sorted.push(name);
//     }

//     return sorted;
//   }, []);

//   return sortedNames.join(", ");
// }

// console.log(listPeople(people));
