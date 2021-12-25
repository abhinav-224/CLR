const inq= require("inquirer")
const cp =require("child_process")
function data(){
inq.prompt([
    {
        type :'list',
        name : 'select',
        choices:['HOME','ACADEMICS','ABOUT','EXTRAS']
    }
])

.then ((choices)=>{
if(choices.select =='HOME'){
     cp.execSync('start chrome https://sites.google.com/view/abhi224/home')
    goback();
}
else if(choices.select =='ACADEMICS'){
    cp.execSync('start chrome https://sites.google.com/view/abhi224/academics')
    goback();
}
 else if(choices.select =='EXTRAS'){
    cp.execSync('start chrome https://sites.google.com/view/abhi224/extras')
    goback();
}
else if(choices.select=='ABOUT'){
    cp.execSync('start chrome https://sites.google.com/view/abhi224/about')
    goback();
}





})
}
data();
 
function goback(){
    inq.prompt([
        {
            type :'list',
            name : 'select',
            choices:['GO BACK']
        }
    ])
    
    .then ((choices)=>{
    if(choices.select =='GO BACK'){
       
        data();
    }
   
    
    
    })
}

