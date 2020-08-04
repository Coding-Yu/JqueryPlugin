//查询与当前时间相差多久 参数date：计算的时间（精确到秒数的时间戳）
function ASCTimer(date) {
    //时间戳转换公式
    //时间戳=从格林威治时间1970-1-1 00：00：00(GMT)开始的毫秒数
    var current_date = new Date().getTime() / 1000;//取当前时间的时间戳 精确到秒数
    var usedTime = (current_date - date);//相差秒数
    var day = Math.floor(usedTime / (60 * 60 * 24));// 相差秒数/一天的秒数=相差天数
    var hours = Math.floor(usedTime / (60 * 60) - (day * 24));
    var minutes = Math.floor(usedTime / 60 - (day * 24 * 60) - (hours * 60));
    var seconds = Math.floor(usedTime - (day * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60));
    return day + "天" + hours + "时" + minutes + "分" + seconds + "秒";
}

//倒计时 参数date：到期时间戳（精确到秒数的时间戳）
function DescTimer(date) {
    var current_date = new Date().getTime() / 1000;//取当前时间的时间戳 精确到秒数
    var usedTime = (date - current_date);//相差秒数
    var day = Math.floor(usedTime / (60 * 60 * 24));// 相差秒数/一天的秒数=相差天数
    var hours = Math.floor(usedTime / (60 * 60) - (day * 24));
    var minutes = Math.floor(usedTime / 60 - (day * 24 * 60) - (hours * 60));
    var seconds = Math.floor(usedTime - (day * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60));
    return day + "天" + hours + "时" + minutes + "分" + seconds + "秒";
}

//将时间戳转换为时间（yyyy-MM-dd HH:mm:ss)
function convertTimestampByGMT(time) {
    var date = new Date(Number(time) * 1000);
    var Y = date.getFullYear();
    var M = date.getMonth() + 1 < 10 ? +'0' + date.getMonth() + 1 : date.getMonth() + 1;//0-11 0代表一月; 
    var d = date.getDate();//1-31
    var H = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return Y + '-' + M + '-' + d + " " + H + ':' + m + ':' + s;
}
//将时间(yyyy-MM-dd HH:mm:ss)转为时间戳
function convertGMTByTimestamp(strTime) {
    var date = new Date(strTime);
    var time1 = date.getTime();//精确到毫秒
    //var time2 = date.valueOf();//精确到秒，毫秒用0代替
    return time1;
}