import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule,  HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { pagesToggleService } from './_pages/services/toggler.service';

import { SidebarComponent } from './_pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from './_pages/components/quickview/quickview.component';
import { QuickviewService } from './_pages/components/quickview/quickview.service';
import { SearchOverlayComponent } from './_pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from './_pages/components/header/header.component';
import { HorizontalMenuComponent } from './_pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from './_pages/components/shared.module';
import { pgListViewModule} from './_pages/components/list-view/list-view.module';
import { pgCardModule} from './_pages/components/card/card.module';
import { pgCardSocialModule} from './_pages/components/card-social/card-social.module';

import {BsDropdownModule,
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CollapseModule,
        ModalModule,
        ProgressbarModule,
        TabsModule,
        TooltipModule,
        TypeaheadModule,
} from 'ngx-bootstrap';

import { pgTabsModule } from './_pages/components/tabs/tabs.module';
import { pgSwitchModule } from './_pages/components/switch/switch.module';
import { ProgressModule } from './_pages/components/progress/progress.module';

import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { DashboardComponent } from './_pages/layouts/dashboard/dashboard.component';
import {BaseComponent} from './_pages/layouts/base/base.component';
import {BlankComponent} from './_pages/layouts/blank/blank.component';
import {AuthInterceptor} from './auth/auth.interceptor';
import {MessageModule} from './_pages/components/message/message.module';
import {MessageService} from './_pages/components/message/message.service';
import {RootLayout} from './_pages/layouts';
import {PublicBaseComponent} from './_pages/public/public-base/public-base.component';
import {PublicRootLayout} from './_pages/public/public-root/public-root.component';
import {PublicDashboardComponent} from './_pages/public/public-dashboard/public-dashboard.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export class AppHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'pinch': { enable: false },
      'rotate': { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent, QuickviewComponent, SearchOverlayComponent, HeaderComponent, HorizontalMenuComponent,
    RootLayout,
    BaseComponent,
    DashboardComponent,
    BlankComponent,
    PublicBaseComponent,
    PublicRootLayout,
    PublicDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    ProgressModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    pgTabsModule,
    PerfectScrollbarModule,
    pgSwitchModule,
    QuillModule.forRoot(),
    MessageModule,
    NgxDatatableModule
  ],
  providers: [QuickviewService, pagesToggleService, MessageService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: AppHammerConfig
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
