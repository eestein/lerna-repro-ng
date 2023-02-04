import { NgModule } from '@angular/core';
import { UsingSharedComponent } from './using-shared.component';
import { CoreModule } from '@scope/shared/core';

@NgModule({
  declarations: [
    UsingSharedComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    UsingSharedComponent
  ]
})
export class UsingSharedModule {}
