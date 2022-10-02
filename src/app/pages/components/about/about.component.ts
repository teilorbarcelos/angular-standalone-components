import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public form = this.formBuilder.group({
    email: ['teste@teste'],
    password: [''],
  })

  ngOnInit(): void {
    console.log(this.form.value.email)
  }
}
