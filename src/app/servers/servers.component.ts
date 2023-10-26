import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector : 'app-servers',
  //template: `<app-server></app-server>
  //            <app-server></app-server>`, 
  templateUrl :'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus ="No server was created !" ;
  serverName = 'TestServer';
  userNameEmpty = true;
  usernameCreated="";
  username="";

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }
  
  onCreateServer(){
    return this.serverCreationStatus = "Server was created !!!, Name is" + this.serverName;
  }

  onCreateUser() {
    this.usernameCreated =this.username;
    this.username="";
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
