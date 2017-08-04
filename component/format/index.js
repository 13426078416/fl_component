module.exports = function(time, type) {
  console.log(444,typeof(time))
  if(typeof(time)==='object'){
    console.log(8888)
    return time.format(type||'YYYY-MM-DD')
  }
  return time;
}
