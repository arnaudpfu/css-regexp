# CSS RegExp
List of Regular Expressions to detect CSS pattern.

## Example
```typescript
import { REGEXP_SELECTORS } from './regexp-selectors';

const color = 'rgba(4,230,255, 0.95)';
const r = new RegExp(REGEXP_SELECTORS.color.all);
console.log( r.test(color) );
//true
```
