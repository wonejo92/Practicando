import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(public afs: AngularFirestore) { }

  save(mascota:mascota){
    const refMascota =this.afs.collection("Mascota");
    if(mascota.uid==null){
      mascota.uid= this.afs.createId();
    }
    refMascota.doc(mascota.uid).set(Object.assign({},mascota));
  }

  listarMascotas(): Observable<any[]>{
    return this.afs.collection("Mascota").valueChanges();
  }
  
  buscarMascota(nombre:string): Observable<any>{
    return this.afs.collection("Mascota",
    ref=>ref.where('Nombre','==',nombre)).valueChanges();
  }
}
