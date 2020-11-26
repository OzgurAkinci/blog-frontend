import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FileBrowserComponent } from './file-browser.component';
import { ProgressModule } from '../progress/progress.module';
@NgModule({
  declarations: [FileBrowserComponent],
  exports: [FileBrowserComponent],
  imports: [CommonModule, ProgressModule]
})
export class FileBrowserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FileBrowserModule
    };
  }
}
