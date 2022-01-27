import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoolComponent } from './cool/cool.component';
import { downgradeComponent, getAngularJSGlobal } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule
  ],
  entryComponents: [
    CoolComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    
    this.ngDoBootstrap();
    
  }

  ngDoBootstrap() {
   
    const angular = getAngularJSGlobal();
    angular.module('todoApp')
    .directive(
      'cool',
      downgradeComponent({ component: CoolComponent })
    );

    // Bootstrap AngularJS only after registering all components
    this.upgrade.bootstrap(document.body, ['todoApp'], {strictDi: true});
  }
}





