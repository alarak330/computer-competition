export {token};
var val =localStorage.getItem('token')&&JSON.parse(localStorage.getItem('token')).token
var token ={
    token:val===null ? null:val,
};
