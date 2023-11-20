import { client } from '../database/db'; 

async function registrarEmpleado(nombre, apellido, dni, edad, cargo) {
    try {
        const query = 'INSERT INTO empleados (nombre, apellido, dni, edad, cargo) VALUES ($1, $2, $3, $4, $5)';
        await client.query(query, [nombre, apellido, dni, edad, cargo]);
        return 'Empleado registrado con éxito';
    } catch (error) {
        console.error('Error al registrar empleado:', error);
        throw error;
    }
}

async function obtenerEmpleados() {
    try {
        const query = 'SELECT * FROM empleados';
        const result = await client.query(query);
        return result.rows; // Devuelve un arreglo de empleados
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        throw error;
    }
}

async function actualizarEmpleado(id, nombre, apellido, dni, edad, cargo) {
    try {
        const query = 'UPDATE empleados SET nombre = $1, apellido = $2, dni = $3, edad = $4, cargo = $5 WHERE id = $6';
        await client.query(query, [nombre, apellido, dni, edad, cargo, id]);
        return 'Empleado actualizado con éxito';
    } catch (error) {
        console.error('Error al actualizar empleado:', error);
        throw error;
    }
}

async function eliminarEmpleado(id) {
    try {
        const query = 'DELETE FROM empleados WHERE id = $1';
        await client.query(query, [id]);
        return 'Empleado eliminado con éxito';
    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        throw error;
    }
}

export {
    registrarEmpleado,
    obtenerEmpleados,
    actualizarEmpleado,
    eliminarEmpleado
};
