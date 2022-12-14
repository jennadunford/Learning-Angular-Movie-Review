import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './site-messages.component.html',
  styleUrls: ['./site-messages.component.css'],
})
export class SiteMessagesComponent {
  constructor(public messageService: MessageService) {}
}
