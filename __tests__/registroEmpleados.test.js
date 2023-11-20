import {
    registrarEmpleado,
    obtenerEmpleados,
    actualizarEmpleado,
    eliminarEmpleado
} from '../lambda/registroEmpleados';

//prueba para la función registrarEmpleado
test('Prueba de registro de empleado', async () => {
    const resultado = await registrarEmpleado('Juan', 'Pérez', '12345678', 'Gerente');
    expect(resultado).toBe('Empleado registrado con éxito');
});

//prueba para la función obtenerEmpleados
test('Prueba de obtención de empleados', async () => {
    const empleados = await obtenerEmpleados();
    expect(Array.isArray(empleados)).toBe(true);
});

//prueba para la función actualizarEmpleado
test('Prueba de actualización de empleado', async () => {
    const resultado = await actualizarEmpleado(1, 'Pedro', 'Gómez', '87654321', 'Analista');
    expect(resultado).toBe('Empleado actualizado con éxito');
});

//prueba para la función eliminarEmpleado
test('Prueba de eliminación de empleado', async () => {
    const resultado = await eliminarEmpleado(1);
    expect(resultado).toBe('Empleado eliminado con éxito');
});
