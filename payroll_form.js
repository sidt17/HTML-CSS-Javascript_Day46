window.addEventListener('DOMContentLoaded',(event) => {
    const name =document.querySelector('#name');
const textError=document.querySelector('.text-error');

name.addEventListener('input',function() {
if(name.value.length==0){
    textError.textContent="";
  return;
}
try {
    (new EmployeePayrollData()).name = name.value;
     textError.textContent ="";
   } 
   catch(e) 
   {
   textError.textContent=e;
   }
   });
   const salary = document.querySelector('#salary');
   const output = document.querySelector('.salary-output'); 
   output.textContent = salary.value;
   salary.addEventListener('input', function() {
   output.textContent = salary.value;
   });
   
});

const save=()=>{
    alert(salary.tostring())
    try{
        let employeePayRollData=CreateEmployeePayroll();
        createAndUpdateStorage(employeePayRollData)
    }catch(e)
    {
        return;
    }
}
 const CreateEmployeePayroll=()=>
 {
     let employeePayrollData=new EmployeePayrollData();
     try{
         employeePayrollData.name=getInputValueById('#name');
     }catch(e)
     {
         setTextValue('.text-error',e);
         throw e;
     }
     employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues ('[name=department]'); 
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date = getInputValueById('#day') +" " +getInputValueById('#month') +" "
    +getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
 }

 const getInputValueById=(id)=> {
     let value = document.queryselector(id).value;
     return value;
 }

 const  getSelectedValues = (propertyValue) => {

    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item =>{
        if(item.checked) selItems.push(item.value);

    });
    return selItems;
}
function createAndUpdateStorage(employeePayrollData)
{
    let emplloyeePayrollList=JSON.parse(localStorage.getItem("EmployeePayRollList"));
    if(emplloyeePayrollList!=undefined)
    {
        emplloyeePayrollList.push(employeePayrollData)
    }else{
        emplloyeePayrollList=[employeePayrollData]
    }
    alert(emplloyeePayrollList.tostring());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(emplloyeePayrollList))
}

const resetForm = () =>{
    setValue('#name','');
    unsetSelectedValues('[name=profile]'); 
    unsetSelectedValues ( '[name=gender]');
    unsetSelectedValues ( '[name-department]');
    setValue('#salary',  ''); 
    setValue('#notes','');
    setValue('#day', '1');
    setValue( '#month', 'January');
    setValue('#year', '2020'); 
}

const unsetSelectedValues= (propertyValue) => {
    let allItems = document.querySelectorAll (propertyValue); 
    allItems.forEach(item => {item. checked = false;
});

const setTextValue =(id, value)=>{
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value)=> { 
    const element = document.querySelector(id)
    element.value= value;
}

}