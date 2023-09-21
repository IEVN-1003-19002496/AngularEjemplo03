import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEjemplo03';

  duplicaValor(valo:number):number{
    return valo*2;
  }
  pelicula={
    titulo:'Ted',
    FechaLanzamiento:new Date(),
  }

}
