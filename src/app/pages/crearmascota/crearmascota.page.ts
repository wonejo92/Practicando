import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-crearmascota',
  templateUrl: './crearmascota.page.html',
  styleUrls: ['./crearmascota.page.scss'],
})
export class CrearmascotaPage implements OnInit {

  mascota:mascota= new mascota();

  constructor(private mascotaService: MascotaService,private router:Router) { }

  ngOnInit() {
  }
  guardar(){
    console.log(this.mascota)
    this.mascotaService.save(this.mascota)
    this.router.navigate(['listar'])
  }

}
