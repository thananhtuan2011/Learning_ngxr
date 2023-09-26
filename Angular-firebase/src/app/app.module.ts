import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import "firebase/firestore";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './core/store/reducer/student.reducer';
import { FeatureEffects } from './core/store/effect/effect';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([FeatureEffects]),
    StoreModule.forRoot({}, {}),
    // StoreModule.forRoot({ counter: counterReducer })
    StoreModule.forFeature('feature_student', counterReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
