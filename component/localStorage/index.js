export default {
  setItem:(key,value)=>{
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem:(key,value)=>{
    let values = localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)) : '';
    return values;
  },
  removeItem:(key)=>{
    return localStorage.removeItem(key);
  },
}
