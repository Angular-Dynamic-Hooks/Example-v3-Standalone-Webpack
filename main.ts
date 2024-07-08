import 'zone.js';
import { HookParserEntry, parseHooks } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './src/components/example/example.component';
import { greet } from './src/otherCode';

export class TestService {
  value = 'This is the test service';
}

const parsers: HookParserEntry[] = [
  ExampleComponent,
  /*
  {
    component: {
      importName: 'ExampleComponent',
      importPromise: () => import('./src/components/example/example.component')
    },
    selector: 'app-example'
  }
  */
];
parseHooks(document.body, parsers).then(result => {
  console.log(result);
});

// You can import and use other logic as usual
greet('dear visitor');