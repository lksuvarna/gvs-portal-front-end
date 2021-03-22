export function getTitle(){
    //for title
    switch (this.service){
      case "jabber_new":
      this.title="Request new Jabber service";
      break;
      case "resources":
        this.title="Resources";
        break;
        case "requests":
          this.title="Requests";
          break;
          case "approvalpending":
          this.title="Approvals";
          break;
      }
      }