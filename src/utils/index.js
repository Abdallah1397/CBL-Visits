export function getLocalStorage(item,defaultValue,object=false){
    if (typeof localStorage !== 'undefined'){
        if (localStorage.getItem(item)){
            if(object) return JSON.parse(localStorage.getItem(item));
            return localStorage.getItem(item);
        }
        return defaultValue;
    }
    return defaultValue;
}

export function setLocalStorage(item,value){
    if (typeof localStorage !== 'undefined'){
        localStorage.setItem(item,value);
    }
}