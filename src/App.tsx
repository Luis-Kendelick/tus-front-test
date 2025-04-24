
import { useState } from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import Audio from '@uppy/audio';
import GoogleDrivePicker from '@uppy/google-drive-picker';
import Webcam from '@uppy/webcam';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';
import '@uppy/audio/dist/style.min.css';


import Tus from '@uppy/tus';
import {
  audioStringsLocale,
  GDriveKeys,
  tusStringLocale,
  // GDriveKeys, 
  // tusStringLocale 
} from './utils';

function UppyUpload() {
  const [uppy] = useState(() => new Uppy({
    autoProceed: true, debug: true
  }).use(Tus, {
    endpoint: 'http://localhost:4010/afiles',
    onSuccess: (file) => {
      console.log('File successfully uploaded:', file);
    }
  }).use(Audio, {
    locale: {
      strings: audioStringsLocale
    }
  }).use(Webcam).use(GoogleDrivePicker, GDriveKeys));

  const [uppy1] = useState(() => new Uppy({
    autoProceed: true, debug: true, locale: {
      pluralize: () => {
        return 2
      },
      strings: tusStringLocale,
    }
  }).use(Tus, {
    endpoint: 'https://tus-server-test-production.up.railway.app/files',
    onSuccess: (file) => {
      console.log('File successfully uploaded:', file);
    }
  }));

  return (
    <div className='w-screen h-screen flex items-center justify-start flex-col gap-5 py-5'>
      <div className='flex items-center justify-center gap-2 flex-col'>
        <p>Local</p>
        <Dashboard height={250} showProgressDetails theme='dark' uppy={uppy} />
      </div>
      <div className='flex items-center justify-center gap-2 flex-col'>
        <p>Server</p>
        <Dashboard height={250} showProgressDetails theme='dark' uppy={uppy1} />
      </div>
    </div>
  )
};

export default UppyUpload;
