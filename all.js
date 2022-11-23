//註冊功能
const account=document.querySelector('.account');
const password=document.querySelector('.password');
const send=document.querySelector('.send');

send.addEventListener('click',function(e){
callSingUp()
})
function callSingUp(){
    if(account.value==""||password.value==""){
        alert("請填寫完整資料");
        return;
    }
    let obj={};
    obj.email=account.value;
    obj.password=password.value;
    
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',obj) 
  .then(function (response) {
        if(response.data.message=="帳號註冊成功"){
            alert('恭喜你註冊成功！');
}else{
    alert('此帳號已被使用！');
}
    account.value="";
    password.value="";
  })
  .catch(function (error) {
    console.log(error);
  });
}


//登入功能
const createAccount=document.querySelector('.createAccount');
const createPassword=document.querySelector('.createPassword');
const creat=document.querySelector('.creat');

creat.addEventListener('click',function(e){
    callLogin();
});
function callLogin(){
if(createAccount.value==""||createPassword.value==""){
alert("請填寫完整資料")
return;
}
let obj={};
obj.email=createAccount.value;
obj.password=createPassword.value;

axios.post('https://hexschool-tutorial.herokuapp.com/api/signin',obj) 
  .then(function (response) {
        if(response.data.message=="登入成功"){
            alert('恭喜你登入成功！');
}else{
    alert('此帳號不存在或帳號密碼錯誤');
}
createAccount.value="";
createPassword.value="";
  })
  .catch(function (error) {
    console.log(error);
  });
}
