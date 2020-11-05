import { Pipe, PipeTransform } from '@angular/core';
import { Habitacion } from '../Hotel_Neruda/models/habitacion';

@Pipe({
  name: 'filtroHabitacion'
})
export class FiltroHabitacionPipe implements PipeTransform {

  transform(habitacion: Habitacion[], searchText: string): any {
    if (searchText == null) return habitacion;
        return habitacion.filter(p =>
        p.numero_Habitacio.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1 ||
        p.tipo.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1 ||
        p.precio.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1 );
    }

}
