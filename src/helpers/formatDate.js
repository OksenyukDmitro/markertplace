export default function formatDate(date) {
    var diff = new Date() - date; // разница в миллисекундах  
  
 
  
    var min = Math.floor(diff / 60000); // округлить diff до минут
    if (min < 1440) {
      return `Today ${date.getHours()}:${  date.getMinutes()}`;
    }
  
    // форматировать дату, с учетом того, что месяцы начинаются с 0
    var d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ];
  
    for (var i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  export function formatingTime(date){
    var d = date;
    d = [
     
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ];
  
    for (var i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }
    if(date.getHours()>12)
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')+"PM";
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')+"AM";
  }
  export function formatingTimeAgo(date){

    var diff = new Date() - date; 
  
 
  
    var min = Math.floor(diff / 60000); 
    if (min < 60) {
        if(min<1)
      return `just now`;
      return `${min} minutes ago`;
    }
    if(min<1440){
      const hours = min/60;
      return `${Math.trunc(hours)} hours ago`;
    }
    
    var d = date;
    d = [
     
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ];
  
    for (var i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }
    if(date.getHours()>12)
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')+"PM";
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')+"AM";
  }