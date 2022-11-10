import Swal, { SweetAlertIcon } from 'sweetalert2';

export function displayAlert(
  titleValue: string,
  message: string,
  duration: number,
  iconType: SweetAlertIcon
) {
  Swal.fire({
    title: titleValue,
    text: message,
    timer: duration,
    icon: iconType,
    position: 'bottom-right',
    heightAuto: false,
    showConfirmButton: false,
  });
}
