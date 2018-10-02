if (!window.localStorage)
  window.localStorage = {};

function loadStorage(object_name, default_object = {}){
  if (!window.localStorage[object_name])
    return default_object;
  return JSON.parse(window.localStorage[object_name]);
}

function saveStorage(object_name, object_data){
  window.localStorage[object_name] = JSON.stringify(object_data);
  return true;
}

var settings = loadStorage('settings', {});
