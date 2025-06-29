let strYH = `{ 
    "user":{ 
           "name":"alien Yueheng",  
           "activity": "watching YouTube", 
           "occupation": ["gamer", "student", "potential youtuber"]}
         }`;

let strYH2 = `{
    "name": "alien Yueheng",
    "activity": "watching YouTube",
    "occupation": ["gamer", "student", "potential youtuber"]
}`;

let objYH = JSON.parse(strYH);
//console.log(objYH);

let objYH2 = JSON.parse(strYH2);
//console.log(objYH2);

let objYHUpdated1 = {
  user: {
    hisName: "Mr. Yueheng",
    activity: "Mystery",
    occupation: ["Dentist", "swimmer"],
  },
};

let objYHUpdated2 = {
  hisName: "Mr. Yueheng",
  activity: "Mystery",
  occupation: ["Dentist", "swimmer"],
};

let strYHUpdated1 = JSON.stringify(objYHUpdated1);
//console.log(strYHUpdated1);

let strYHUpdated2 = JSON.stringify(objYHUpdated2);
//console.log(strYHUpdated2);

console.log(objYH.user.name);
console.log(objYH2.name);
