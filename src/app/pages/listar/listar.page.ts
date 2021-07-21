import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  mascota:any;
  mascotaBuscar: mascota = new mascota();

  constructor(private mascotaService: MascotaService,private router:Router) { }

  ngOnInit() {
    this.mascota=this.mascotaService.listarMascotas()
  }

  actualiza(mascota: any){
    console.log('Se procede a editar la mascota');
    console.log(mascota);

    let params: NavigationExtras ={
      queryParams:{
        Mascota:mascota
      }
    };

    this.router.navigate(['editar'],params)
  }

  Buscar(){
    console.log(this.mascotaBuscar)
    this.mascotaService.buscarMascota(this.mascotaBuscar.Nombre).subscribe(data=>{
      this.mascotaBuscar=data[0]
    })

  }

}
