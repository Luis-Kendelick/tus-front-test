import { ToasterProps } from "sonner";

export const tusStringLocale = {
  // When `inline: false`, used as the screen reader label for the button that closes the modal.
  closeModal: "Close Modal",
  // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
  addMoreFiles: "Add more files",
  addingMoreFiles: "Adding more files",
  // Used as the header for import panels, e.g., “Import from Google Drive”.
  importFrom: "Import from %{name}",
  // When `inline: false`, used as the screen reader label for the dashboard modal.
  dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
  // When `inline: true`, used as the screen reader label for the dashboard area.
  dashboardTitle: "Uppy Dashboard",
  // Shown in the Informer when a link to a file was copied to the clipboard.
  copyLinkToClipboardSuccess: "Link copied to clipboard.",
  // Used when a link cannot be copied automatically — the user has to select the text from the
  // input element below this string.
  copyLinkToClipboardFallback: "Copy the URL below",
  // Used as the hover title and screen reader label for buttons that copy a file link.
  copyLink: "Copy link",
  back: "Back",
  // Used as the screen reader label for buttons that remove a file.
  removeFile: "Remove file",
  // Used as the screen reader label for buttons that open the metadata editor panel for a file.
  editFile: "Edit file",
  // Shown in the panel header for the metadata editor. Rendered as “Editing image.png”.
  editing: "Editing %{file}",
  // Used as the screen reader label for the button that saves metadata edits and returns to the
  // file list view.
  finishEditingFile: "Finish editing file",
  saveChanges: "Save changes",
  // Used as the label for the tab button that opens the system file selection dialog.
  myDevice: "Meu PC",
  dropHint: "Drop your files here",
  // Used as the hover text and screen reader label for file progress indicators when
  // they have been fully uploaded.
  uploadComplete: "Upload complete",
  uploadPaused: "Upload paused",
  // Used as the hover text and screen reader label for the buttons to resume paused uploads.
  resumeUpload: "Resume upload",
  // Used as the hover text and screen reader label for the buttons to pause uploads.
  pauseUpload: "Pause upload",
  // Used as the hover text and screen reader label for the buttons to retry failed uploads.
  retryUpload: "Retry upload",
  // Used as the hover text and screen reader label for the buttons to cancel uploads.
  cancelUpload: "Cancel upload",
  // Used in a title, how many files are currently selected
  xFilesSelected: {
    0: "%{smart_count} file selected",
    1: "%{smart_count} files selected",
  },
  uploadingXFiles: {
    0: "Uploading %{smart_count} file",
    1: "Uploading %{smart_count} files",
  },
  processingXFiles: {
    0: "Processing %{smart_count} file",
    1: "Processing %{smart_count} files",
  },
  // The "powered by Uppy" link at the bottom of the Dashboard.
  poweredBy: "Powered by %{uppy}",
  addMore: "Adicionar",
  editFileWithFilename: "Edit file %{file}",
  save: "Save",
  cancel: "Cancel",
  dropPasteFiles: "Arraste os arquivos até aqui ou %{browseFiles}",
  dropPasteFolders: "Arraste os arquivos até aqui ou %{browseFolders}",
  dropPasteBoth: "Drop files here, %{browseFiles} ou %{browseFolders}",
  dropPasteImportFiles:
    "Arraste os arquivos até aqui, %{browseFiles} ou importe de:",
  dropPasteImportFolders:
    "Arraste os arquivos até aqui, %{browseFolders} ou importe de:",
  dropPasteImportBoth:
    "Arraste os arquivos até aqui, %{browseFiles}, %{browseFolders} ou importe de:",
  importFiles: "Importe arquivos de:",
  browseFiles: "pesquise os arquivos no seu computador",
  browseFolders: "browse folders",
  recoveredXFiles: {
    0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
    1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload.",
  },
  recoveredAllFiles: "We restored all files. You can now resume the upload.",
  sessionRestored: "Session restored",
  reSelect: "Re-select",
  Audio: "Audio",
  missingRequiredMetaFields: {
    0: "Missing required meta field: %{fields}.",
    1: "Missing required meta fields: %{fields}.",
  },
};

export const audioStringsLocale = {
  pluginNameAudio: "Áudio",
  startAudioRecording: "",
  stopAudioRecording: "",
  allowAudioAccessTitle: "",
  allowAudioAccessDescription: "",
  noAudioTitle: "",
  noAudioDescription: "",
  recordingStoppedMaxSize: "",
  recordingLength: "",
  submitRecordedFile: "",
  discardRecordedFile: "",
};

export const GDriveKeys = {
  apiKey: "AIzaSyB7ziaWZijUeQFKnirYwxPc-nCpyWhnwxo",
  clientId:
    "882685982504-10vt1piqdcbvsl1gg7om1hukvkfiqh3v.apps.googleusercontent.com",
  appId: "882685982504",
  companionUrl: "http://localhost:3020",
};

export const toastProps: ToasterProps = {
  duration: 10000,
  richColors: true,
  closeButton: true,
};
