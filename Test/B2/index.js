let fc = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },
    {
        name: "Manchester United",
        points: 65,
        GD: 29
    },
    {
        name: "Aanchester United",
        points: 65,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 68,
        GD: 39
    },
    {
        name: "Manchester city",
        points: 68,
        GD: 40
    }
]
fc.sort(function (a, b) {
   if(a.points>b.points) return -1;
   if(a.points<b.points) return 1
   if(a.GD>b.GD) return -1;
   if(a.GD<b.GD) return 1
   if(a.name>b.name) return 1;
   if(a.name<b.name) return -1;
   return 0;
})
console.log(fc);
for (let i=0; i<fc.length; i++) {
   fc[i].position= i+1;
}
console.log(fc);