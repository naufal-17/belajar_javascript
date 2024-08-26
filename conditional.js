let mhs = {
    name: "daffa",
    age: 20,
    major: "TRPL",
    skills: ['Sysadmin', 'OOP', 'design'],
    poor: true, 
}

// console.log('Mahasiswa boleh daftar : ' , mhs.age > 17)

// if (mhs.major == "TRMG") {
//     console.log(mhs.name + " Jurusan TRMG");
// } else if (mhs.major == "TRKJ") {
//     console.log(mhs.name + " Jurusan TRKJ");
// } else if (mhs.major == "TRPL") {
//     console.log(mhs.name + " Jurusan TRPL");
// }
    
// conditional function
// kriteria : umur kurang dari 21, miskin, skill lebih dari 2
function cekKelulusan(peserta) {
     let age = peserta.age;
     let poor = peserta.poor;
     let skills = peserta.skills;
     if (!poor) {
        console.log("peserta tidak lulus")
     } else if (poor) {
        console.log("peserta lulus")
     } else {
        console.log("peserta tidak lulus")
     }
}

cekKelulusan(mhs);
