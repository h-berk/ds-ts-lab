import {Friend, Colleague, EmailContact } from './myTypes'

import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends:Friend[]) : string[] {
    const newAges: string[] = [];
    friends.forEach(f => {
        f.age += 1
        newAges.push (`${f.name} is now ${f.age}`)
    });
    return newAges;
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

  function addColleague(cs: Colleague[],name: string,department: string,email: string,): Colleague {
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension : highestExtension(cs).contact.extension+1, //+1 as this colleague will be added to the colleagues therefore incrementing the highest extension by 1
      },
    };
    cs.push(newColleague);
    return newColleague;
  }

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
addColleague(colleagues.current, "Hasan Berk", "Eng", "hb@setu.ie");
//console.log(colleagues.current.filter((c) => c.name === "Hasan Berk"));

//console.log(highestExtension(colleagues.current));
//console.log(older(friends[0]))
//console.log(allOlder(friends))

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
//console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
//console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
//console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

function findFriends(fs: Friend[], criteria:(f: Friend)=> boolean): Friend[] {
  const matchingFriends: Friend[] = []; //Create an empty array for friends matching the criteria
  for (const f of fs) { //for each f in fs array, if it matches criteria push it to the matching friends array
    if (criteria(f)) {
      matchingFriends.push(f);
    }
  }
  return matchingFriends; //return matchingFriends
}

//console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
//console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(friend: Friend, interest: string): string[] {
  if(!friend.interests){
    friend.interests = [];
  }
  friend.interests.push(interest);
  return friend.interests
}

console.log(addInterest(friends[0], 'Politics'))
console.log(addInterest(friends[0], 'Gaming'))
console.log(addInterest(friends[0], 'Sport'))
console.log(addInterest(friends[1], 'Coding'))