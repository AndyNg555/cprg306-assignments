 export default function StudentObjComp({studentObj}){
    let{studentName, studentAge, address : {city, province}}= studentObj

    return(
        <div class="inline-block     bg-green-500 mb-10 mx-6 border border-red-500 px-3 py-4 mt-5">
            <h1>{studentName}</h1>
            <p>Age: {studentAge}</p>
            <p>{city},<b>{province}</b></p>
        </div>
    );
 }