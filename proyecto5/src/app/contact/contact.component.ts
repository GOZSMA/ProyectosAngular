import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{

  contactForm!: FormGroup;
  name!: string;

  constructor(private readonly fb: FormBuilder, private readonly route: ActivatedRoute){ }

    ngOnInit(): void {
    
      this.contactForm = this.initForm();
  }
  


    onSubmit():void{
      console.log('Form ->', this.contactForm.value);
    }
  
    initForm(): FormGroup {
      return this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        genero: ['', [Validators.required]],
        edad: ['', [Validators.required, Validators.maxLength(2)]],
        correo: ['', [Validators.required]],
      });
  } 

}