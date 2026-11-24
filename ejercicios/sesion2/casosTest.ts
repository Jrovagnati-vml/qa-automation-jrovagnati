//1. Crear un archivo casosTest.ts dentro de ejercicios/sesion2.
//2. Definir una interface CasoDeTest con: id (number), titulo (string), prioridad (string) y ejecutado (boolean).
//3. Declarar un array de al menos 3 objetos tipados con la interface.
//4. Escribir una función obtenerCasosDeTest(): Promise<CasoDeTest[]> que envuelva el array en un setTimeout + Promise (500ms), simulando una llamada a un servidor.
//5. Escribir una función async main() que haga await a obtenerCasosDeTest() y use forEach para imprimir cada caso formateado con formatearCaso.
//6. Correr el archivo con npx tsx casosTest.ts y confirmar que no hay errores de tipos.
//7. Commit y push a una rama nueva (por ejemplo, sesion2).



interface CasoDeTest {
    id: number;
    titulo: string;
    prioridad: string;
    ejecutado: boolean;
}
const casosDeTest: CasoDeTest[] = [
    {
        id: 1,
        titulo: "Validar inicio de sesión",
        prioridad: "Alta",
        ejecutado: true
    },
    {
        id: 2,
        titulo: "Verificar botón de login",
        prioridad: "Media",
        ejecutado: false
    },
    {
        id: 3,
        titulo: "Validar mensaje de error",
        prioridad: "Baja",
        ejecutado: true
    }
];

function obtenerCasosDeTest(): Promise<CasoDeTest[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(casosDeTest);
        }, 500);
    });
}
async function main(): Promise<void> {
    const casos = await obtenerCasosDeTest();

    casos.forEach((caso) => {
        console.log(formatearCaso(caso));
    });
}

main();
