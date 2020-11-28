function helloCrush()
{
    console.log("hello world")
}
export {helloCrush} // chìa ra cho các bên khác sử dụng
function kissMe()
{
    console.log("Kiss me");
}
export {kissMe}
export function toUpper(str)

{
   str=str.toUpperCase();
   console.log(str);
}