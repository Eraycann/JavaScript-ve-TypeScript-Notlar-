let message = 'Hello World!';

let count = message.length; // message string olduğu bilindiğinden dolayı, string metotlarını kullanmamıza olanak tanır.


let message2;
message2 = 'Hello World!';
let count2 = (<string>message2).length; // message2, varoluşsal any old. için, message2'nin string olduğunu bilinçli bir şekilde belirtip (bilinçi tür dönüşümü), bu vasıtayla string metotlarını kullanabildik.
let count3 = (message2 as string).length;   // üsttekiyle aynı (bilinçli tür dönüşümü)

