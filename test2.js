var num       = document.getElementById('txt-num');
var btnAdd    = document.getElementById('btn-add');
var btnView   = document.getElementById('btn-view');
var btnUpdate = document.getElementById('btn-update');
var btnDelete = document.getElementById('btn-delete');

const arrnum  = [100,200,300,400];

//add
btnAdd.addEventListener('click',function(){

    if(num.value==''){
        alert('please enter number')
    }
    else{
        //add value to the end index of array
        arrnum.push(num.value);

        num.value = '';
    }    
})
//view
btnView.addEventListener('click',function(){
    var txt = `
        <table class="table table-hover table-dark text-center">
                <tr>
                    <th>Index</th>
                    <th>Value</th>
                </tr>
    `;
    arrnum.forEach(function(value,index,array){
       txt += `
            <tr>
                <td>${index}</td>
                <td>${value}</td>
            </tr>
       `;
    })
    document.getElementById('demo').innerHTML = txt+'</table>';
})  
//update
btnUpdate.addEventListener('click',function(){

    // var check = arrnum.findIndex((val)=> val == num.vlaue);

    var check = arrnum.findIndex(function(value,index,obj){
        return value == num.value;
    });
    if(check != -1){
        arrnum[check] = Number(prompt('Enter New number:'));
    }
    else{
        alert('Value not found');
    }
})
//delete
btnDelete.addEventListener('click',function(){
    var check = arrnum.findIndex((val) => val == num.value);

    if(check != -1){
        arrnum.splice(check,1);
    }
    else{
        alert('Value not found');
    }
})