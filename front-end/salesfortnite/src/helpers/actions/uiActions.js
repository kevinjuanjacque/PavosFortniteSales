export const abrirModal = () => {
    return {
        type:'modal-visible'
    }
}
export const cerrarModal = () => {
    return {
        type:'modal-invisible'
    }
}
export const abrirSide = () => {
    return {
        type:'sidebar-visible'
    }
}
export const cerrarSide = () => {
    return {
        type:'sidebar-invisible'
    }
}

export const abrirSideLeft = () => {
    return {
        type:'sidebarleft-visible'
    }
}
export const cerrarSideLeft = () => {
    return {
        type:'sidebarleft-invisible'
    }
}