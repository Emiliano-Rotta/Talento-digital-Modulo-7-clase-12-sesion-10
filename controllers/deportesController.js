const { Deporte, Evento } = require('../models');

// Crear un deporte
async function crearDeporte(nombre) {
    return await Deporte.create({ nombre });
}

// Crear un evento asociado a un deporte
async function crearEvento(deporteId, nombre, fecha) {
    return await Evento.create({ deporteId, nombre, fecha });
}

// Consultar deportes con sus eventos
async function obtenerDeportesConEventos() {
    return await Deporte.findAll({ include: Evento });
}

// Eliminar un deporte (incluye eventos por cascada)
async function eliminarDeporte(deporteId) {
    await Deporte.destroy({ where: { id: deporteId } });
    console.log(`Deporte con ID ${deporteId} eliminado.`);
}

module.exports = {
    crearDeporte,
    crearEvento,
    obtenerDeportesConEventos,
    eliminarDeporte,
};

