import { initRemoveAndHideEventListeners } from './removeAndHideEventListeners';
import initEventsForUpdatingData from './eventsForUpdatingData';
import initClickToSaveEventListener from './clickToSaveEventListener';
import optionsData from './optionsData';
import { 
  onSave, 
  onFileUpload, 
  onFileUploadProgress, 
  onAddItem, 
  onRemoveItem, 
  onSync 
} from './callbacks';
import { 
  initSaveFunctions, 
  callSaveFunction
} from './onSave';
import initEditableAttribute from './editableAttribute';
import initAddingItemEventListener from './addingItemEventListener';
import initSortableElements from './sortableElements';
import initAutoGeneratedComponents from './autoGeneratedComponents';
import initEventListenerHelpers from './eventListenerHelpers';
import runWatchFunctions from './runWatchFunctions';
import processShowIfAttributes from '../common/show-if';

const merge = require('lodash/merge');

function init (options) {
  merge(optionsData, options);
  
  // first because they affect might affect visibility of some elements
  processShowIfAttributes();
  runWatchFunctions();

  // this creates element, so it should be loaded before most other scripts
  initAutoGeneratedComponents(); 

  initSaveFunctions();
  initRemoveAndHideEventListeners();
  initEventsForUpdatingData();
  initClickToSaveEventListener();
  initEditableAttribute();
  initAddingItemEventListener();
  initEventListenerHelpers();

  if (optionsData.sortable) {
    initSortableElements();
  }

  onAddItem(function () {
    runWatchFunctions();
    processShowIfAttributes();
  });

  onRemoveItem(function () {
    runWatchFunctions();
  });
}

export {
  init,
  callSaveFunction,
  onSave,
  onFileUpload,
  onFileUploadProgress,
  onAddItem,
  onRemoveItem,
  runWatchFunctions,
  onSync
}





