import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'

export const mostrarToastBueno = (mensaje) => {
    toast.success(mensaje, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}

export const mostrarToastMalo = (mensaje) => {
    toast.error(mensaje, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}

export const mostrarToastInfo = (mensaje) => {
    toast.info(mensaje, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}

export const mostrarAlertaExitosa = (id) => {
    Swal.fire({
        title: 'Compra Exitosa!',
        text: `Tu orden de compra es: ${id}`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: null,
        showConfirmButton: true,
    }).then((result) => {
        if (result.isConfirmed) {

            window.location.href = '/'
        }
    })
}

export const mostrarAlertaError = () => {
    Swal.fire({
        title: 'Error',
        text: 'Hubo un error a la hora de mostrar los datos, recargue la página',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: null,
        showConfirmButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/'
        }
    })

}







