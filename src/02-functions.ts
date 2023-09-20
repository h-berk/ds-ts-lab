import {Friend, Colleague } from './myTypes'

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
function highestExtension(cs: Colleague[]): Colleague {
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
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
  addColleague(colleagues.current, "Hasan Berk", "Eng", "hb@setu.ie");
  console.log(colleagues.current.filter((c) => c.name === "Hasan Berk"));

//console.log(highestExtension(colleagues.current));
//console.log(older(friends[0]))
//console.log(allOlder(friends))