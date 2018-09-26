import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  daftarMhs:Mahasiswa[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mhs;

  constructor() { }

  ngOnInit() {
  }

  tambahMhs() {
    this.mhs = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
