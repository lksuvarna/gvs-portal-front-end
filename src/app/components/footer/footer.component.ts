import { Component, OnInit } from '@angular/core';
import {TranslateConfigService} from '../../_services/translate-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translateconfigservice : TranslateConfigService) { }

  ngOnInit(): void {
  }

}
