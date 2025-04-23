
import { useState } from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';
import Tus from '@uppy/tus';

function UppyUpload() {
  // IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
  const [uppy] = useState(() => new Uppy({ autoProceed: true, debug: true }).use(Tus, {
    endpoint: 'http://tus-server-test-production.up.railway.app/files', // URL do seu Railway
  }));

  return <Dashboard uppy={uppy} />;
};

export default UppyUpload;
