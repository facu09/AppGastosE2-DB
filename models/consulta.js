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
        lsTotConFormato = Intl.NumberFormat('en-EN', { style: 'currency', currency: 'ARG' }).format(aggregations._avg.importe)
        console.log('Average age:' + lsTotConFormato)
        return {"El Gasto Promedio del período es: ": lsTotConFormato}
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
        console.log('Suma de Gastos: ' + aggregations._sum.importe)
        // const liSumTotGastos= parseInt(aggregations._sum.importe);
        lsTotConFormato = Intl.NumberFormat('en-EN', { style: 'currency', currency: 'ARG' }).format(aggregations._sum.importe)
        console.log('Suma de Gastos: ' + lsTotConFormato)
        return {"La Sumar Total de Gastos del período es: ":    lsTotConFormato}
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

        lsTotConFormato = Intl.NumberFormat('en-EN', { style: 'currency', currency: 'ARG' }).format(aggregations._max.importe)
        console.log('El Mayor Gastos: ' + lsTotConFormato)
        return {"El Mayor de los Gastos del período es: ": lsTotConFormato}
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
        lsTotConFormato = Intl.NumberFormat('en-EN', { style: 'currency', currency: 'ARG' }).format(aggregations._min.importe)
        console.log('El Menor de los Gastos del Período: ' +lsTotConFormato)
        return {"El Menor de los Gastos del período es: ": lsTotConFormato}
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