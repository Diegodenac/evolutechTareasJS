let cities = {arr1: [{ name: "New York", population: 18.65e6 },
{ name: "Cairo", population: 18.82e6 },
{ name: "Mumbai", population: 19.32e6 },
{ name: "SÃ£o Paulo", population: 20.88e6 },
{ name: "Mexico City", population: 21.34e6 },
{ name: "Shanghai", population: 23.48e6 },
{ name: "Delhi", population: 25.87e6 },
{ name: "Tokyo", population: 37.26e6 }],
arr1: [{ name: "New York", population: 18.65e6 },
{ name: "Cairo", population: 18.82e6 },
{ name: "Mumbai", population: 19.32e6 },
{ name: "SÃ£o Paulo", population: 20.88e6 },
{ name: "Mexico City", population: 21.34e6 },
{ name: "Shanghai", population: 23.48e6 },
{ name: "Delhi", population: 25.87e6 },
{ name: "Tokyo", population: 37.26e6 }]};
for (let arra in cities) {
    for (let city of cities[arra]) {
        for (let key in city) {
            console.log(`${key} ---> ${city[key]}`);
        }
    }
}