var mSearch = location.search.split("&");
  var objSearch = mSearch.reduce(function(o, v) {
  var kv = v.split("=");
  kv[0] = kv[0].replace("?", "");
  o[kv[0]] = kv[1];
  return o;
},{});
