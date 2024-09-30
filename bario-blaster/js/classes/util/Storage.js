function Storage(prefix) {
    this.prefix = prefix;
}

Storage.prototype.getItem = function(name, type) {
    var _item = localStorage.getItem(this.prefix + name);
    
    // return false if no item found in local storage
    if (_item === null) return false;
    
    if (type === 'int') {
        return parseInt(_item);
    } else if (type === 'float') {
        return parseFloat(_item);
    } else {
        return _item;
    }
}

Storage.prototype.setItem = function(name, value) {
    localStorage.setItem(this.prefix + name, value);
}

Storage.prototype.initItem = function(name, defaultValue, type) {
    var _item = localStorage.getItem(this.prefix + name);
    if (_item === null) {
        this.setItem(name, defaultValue);
        _item = defaultValue;
    }
    
    if (type === 'int') {
        return parseInt(_item);
    } else if (type === 'float') {
        return parseFloat(_item);
    } else {
        return _item;
    }
}

Storage.prototype.removeItem = function(name) {
    localStorage.removeItem(this.prefix + name);
}