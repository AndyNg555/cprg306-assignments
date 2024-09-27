export default function ObjectPage(){
  let studentOne = {
    studentName: "Joe",
    studentAge: 25,
    hasGraduated: false,
    schedule:["CRPG123", "CPRG234","CPRG678"],
    address: {
      line1: "123 Main St.",
      city: "Calgary",
      province: "AB",
    },
  };
  let {
    studentName, 
    studentAge: age, 
    // schedule: [class1,class2,class3,webDev2]},
    // schedule: [,,webDev2]},
    schedule: {2:webDev2},
    address:{city}
  } = studentOne;
  return(
    <main>
      <h1>Objects</h1>
      <h2>Dot Notation</h2>
      <p>Name: {studentOne.studentName}</p>
      <p>Age: {studentOne.studentAge}</p>
      <p>Web Dev 2: {studentOne.schedule[1]}</p>
      <p>City: {studentOne.address.city}</p>
      <p>Name: {studentName}</p>
      <p>Age: {age}</p>
      <p>Web Dev 2:{webDev2}</p>
      <p>City: {city}</p>
    </main>
  );
}