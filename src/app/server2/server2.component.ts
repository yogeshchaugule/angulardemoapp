import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName = 'Test Server';
  serverCreated = false;
  isDisabled = true;

  serverID = 10;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    // this.allowNewServer = true;
    this.serverCreationStatus = 'Server created, server name : ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = (event.target as HTMLInputElement).value;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}
