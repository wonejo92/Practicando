import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  mascota:mascota = new mascota();

  constructor(private router: Router, private route: ActivatedRoute,private mascotaService : MascotaService) {

    route.queryParams.subscribe(params=>{
      console.log('Son los parametros de llegada',params);
      this.mascota=params.Mascota;
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.mascota=this.router.getCurrentNavigation().extras.queryParams.Mascota;
        console.log('Mascota a editar',this.mascota);
      }
    });


   }

  ngOnInit() {
  }
  guardar(){
    this.mascotaService.save(this.mascota)
    this.router.navigate(['listar'])
  }

}
