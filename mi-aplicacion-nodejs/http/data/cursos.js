let infoCursos = {
    'programacion': [
        {
            id:1,
            titulo: "Python", 
            lenguaje : "python",
            vistas: 15000,
            nivel: "basico"
        },
        {
            id:2,
            titulo: "Aprende Java", 
            lenguaje : "Java",
            vistas: 20000,
            nivel: "basico"
        },
        {
            id:3,
            titulo: "Aprende JS", 
            lenguaje : "Js",
            vistas: 10000,
            nivel: "avanzado"
        }
    ],
    'matematicas' : [
        {
            id: 1,
            titulo: "Aprende calculo",
            tema:"calculo",
            vistas:10000,
            nivel:"basico"
        },
        {
            id: 2,
            titulo: "Aprende algebra",
            tema:"algebra",
            vistas:40000,
            nivel:"intermedio"
        }
    ]
};

module.exports.infoCursos = infoCursos;
