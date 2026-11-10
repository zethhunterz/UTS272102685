import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Content } from '../content/content';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { Profile } from '../profile/profile';

@Component({
  imports: [Header, Sidebar, Content, Footer],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}
