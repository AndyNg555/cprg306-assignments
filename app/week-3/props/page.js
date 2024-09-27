import StudentComp from "./student-component";
import StudentObjComp from "./student-obj-component";

export default function ObjectPage() {
  let studentOne = {
    studentName: "Joe",
    studentAge: 25,
    hasGraduated: false,
    schedule: ["CRPG123", "CPRG234", "CPRG678"],
    address: {
      line1: "123 Main St.",
      city: "Calgary",
      province: "AB",
    },
  };

  let studentTwo = {
    studentName: "Alice",
    studentAge: 22,
    address: {
      line1: "456 Maple St.",
      city: "Edmonton",
      province: "AB",
    },
  };

  return (
    <main>
      <h1>Objects</h1>
      <StudentComp sName="Kevin" sAge="28" sCity="Lethbridge" sProvince="AB" />
      <StudentComp
        sName={studentOne.studentName}
        sAge={studentOne.studentAge}
        sCity={studentOne.address.city}
        sProvince={studentOne.address.province}
      />
      <StudentObjComp studentObj={studentOne} />
      <StudentObjComp studentObj={studentTwo} />
    </main>
  );
}
