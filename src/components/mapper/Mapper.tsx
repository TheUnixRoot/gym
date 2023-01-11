export function Mapper(input) {
    
    const nombre :string = input["nombre-rutina"].S

    let output :Object = {};
    output[nombre] = {
        "series": input["series"].N,
        "ejercicios": input["ejercicios"].SS,
        "repeticiones": {
            min: input["repeticiones"].NS[0], 
            max: input["repeticiones"].NS[1]
        }
    };
    return output;
}

// export class Input {
//     public getDefault = {
//         "series": {N: "0"},
//         "nombre-rutina": {S: "nada"},
//         "ejercicios": {SS: ["nada"]},
//         "repeticiones": {NS: [{N: "0"}, {N: "0"}]}
//     };
// };

// export class Output {
//     public getDefault = {
//         "nada": {
//             "series": 0,
//             "ejercicios": ["nada"],
//             "repeticiones": {
//                 "min": 0, 
//                 "max": 0
//             }
//         }
//     };
// };