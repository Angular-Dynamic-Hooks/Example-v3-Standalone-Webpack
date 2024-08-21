import 'zone.js';
import '@angular/localize/init';
import { parse, createProviders, HookParserEntry, observeElement } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './components/example/example.component';
import { CounterService } from './services/counterService';
import { CounterWriteComponent } from './components/counterWrite/counterWrite.component';
import { CounterReadComponent } from './components/counterRead/counterRead.component';
import { WidgetComponent } from './components/widget/widget.component';
import { NoticeComponent } from './components/notice/notice.component';
import { CarouselComponent } from './components/carousel/carousel.component';

// No need to load Angular traditionally like this:
// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// Load components directly into existing HTML via parse() instead
const parsers: HookParserEntry[] = [
  ExampleComponent,                                       // For example 1
  { component: WidgetComponent, selector: '.myWidget'},   // For example 2
  NoticeComponent,                                        // For example 3
  CarouselComponent                                       // For example 5
];
parse(document.body, parsers);

// For example 4
const scope = createProviders([CounterService]);
scope.parse(document.body, [CounterWriteComponent, CounterReadComponent]);

// Optional: Automatically parse again when new elements are added
observeElement(document.body, parentElement => {
  parse(parentElement, parsers);
  scope.parse(parentElement, [CounterWriteComponent, CounterReadComponent]);
});