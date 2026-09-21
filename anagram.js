function isAnagram(s1, s2) {
   s1 = s1.toLowerCase()
   s2 = s2.toLowerCase()

   s1 = s1.replace(/[^a-z]/g, "")
   s2 = s2.replace(/[^a-z]/g, "")
  
   s1 = s1.split("").sort().join()
   s2 = s2.split("").sort().join()
   
    return s1==s2? true : false
}


console.log(isAnagram("1122 liten","silent"))