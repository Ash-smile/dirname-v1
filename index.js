/**
 * Copyright (c) 2023, Ash-smile •|•
 * All rights reserved.
 *
 * This code is licensed under the [license] license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { fileURLToPath } from 'url';
import path from 'path';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const __dirname = path.dirname(fileURLToPath(
  typeof __filename !== 'undefined' ? 
  __filename : 
  import.meta.url));

export default dirname;
export default __dirname;
