import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export function userNamevalidator(forbiddenName:RegExp):ValidatorFn{
    return (control:AbstractControl)=>
    {
       const forbidden =forbiddenName.test(control.value);
       return forbidden? {"forbiddenName":{value:control.value}} :null;
    }
}

export function emailNamevalidator(forbiddenName:RegExp):ValidatorFn{
    return (control:AbstractControl)=>
    {
       const forbidden =forbiddenName.test(control.value);
       return forbidden? {"invalid Email":{value:control.value}} :null;
    }
}
export function validatePassword(formcontrol:FormControl) {
   const pass=formcontrol.get('password');
   const cPass=formcontrol.get('confirmPass');

   if(pass && cPass &&pass!=cPass)
   {
       return{"mismatch":true}
   }
   return null;
}