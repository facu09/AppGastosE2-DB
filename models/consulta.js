const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

const getAllGastos = async () => {
    try {
        const allGastos = await prisma.Gastos.findMany()
        return allGastos
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getAllGastosOrderAscByImpote = async () => {
    try {
        const allGastos = await prisma.Gastos.findMany({
            orderBy: {
                importe: "asc"
            }
        })
        return allGastos
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getAllGastosOrderAscByFecha= async () => {
    try {
        const allGastos = await prisma.Gastos.findMany({
            orderBy: {
                fechaGasto: "asc"
              }
        })
        return allGastos
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getPromedioDeAllGastos = async () => {
    try {
        const aggregations = await prisma.Gastos.aggregate({
            _avg: {
              importe: true,
            },
        })
        console.log('Average age:' + aggregations._avg.importe)
        return {"El Gasto Promedio del período es:": parseInt(aggregations._avg.importe)}
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getSumaDeAllGastos = async () => {
    try {
        const aggregations = await prisma.Gastos.aggregate({
            _sum: {
              importe: true,
            },
        })
        console.log('Suma de Gastos:' + aggregations._sum.importe)
        return {"La Sumar Total de Gastos del período es:": parseInt(aggregations._sum.importe)}
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getSumaDeGastosPorUsuario = async () => {
    try {
        const fd = await prisma.Gastos.groupBy({
            by: ['userId'],
            _sum: {
              importe: true,
            },
        })
        console.log(fd)
        return {"Suma de Gastos del Período por Usuario: ": fd  }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getSumaDeGastosPorTipoGasto = async () => {
    try {
        const fd = await prisma.Gastos.groupBy({
            by: ['tipoGastoId'],
            _sum: {
              importe: true,
            },
        })
        console.log(fd)
        return {"Suma de Gastos del Período por Tipo de Gasto: ": fd  }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getMayorDeAllGastos = async () => {
    try {
        const aggregations = await prisma.Gastos.aggregate({
            _max: {
              importe: true,
            },
        })
        console.log('El Mayor Gastos:' + aggregations._max.importe)
        return {"El Mayor de los Gastos del período es:": parseInt(aggregations._max.importe)}
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}

const getMenorDeAllGastos = async () => {
    try {
        const aggregations = await prisma.Gastos.aggregate({
            _min: {
              importe: true,
            },
           
        })
        console.log('El Menor de los Gastos del Período:' + aggregations._min.importe)
        return {"El Menor de los Gastos del período es:": parseInt(aggregations._min.importe)}
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
}



module.exports = {
    getAllGastos,
    getAllGastosOrderAscByImpote,
    getAllGastosOrderAscByFecha,
    getPromedioDeAllGastos,
    getSumaDeAllGastos,
    getSumaDeGastosPorUsuario,
    getSumaDeGastosPorTipoGasto,
    getMayorDeAllGastos,
    getMenorDeAllGastos,
}