function loadStorage(object_name, default_object = {}){
  if (!window.localStorage || !window.localStorage[object_name])
    return default_object;
  return JSON.parse(window.localStorage[object_name]);
}

function saveStorage(object_name, object_data){
  if (!window.localStorage)
    return false;
  window.localStorage[object_name] = JSON.stringify(object_data);
}

var settings = loadStorage('settings', {});
