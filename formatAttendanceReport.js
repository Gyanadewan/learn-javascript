function formatAttendanceReport(students) {
    const result = [];
    let status;
      for (const student of students){
        const  nearestStudent = Math.round((student.present / student.total) * 100)
         if (nearestStudent >= 90){
             status=("Excellent")
         }
         else if (nearestStudent >= 75){
                status=("Good")
         }
         else {
              status=("At Risk")
         }
         result.push(`${student.name}: ${student.present}/${student.total} (${nearestStudent}%) - ${status}`)
      }
    
     return result
}
 console.log(formatAttendanceReport([
  { name: "Lina", present: 15, total: 20 },
  { name: "Sam", present: 12, total: 20 }
]));