import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentServices } from '../Inverstment.Services';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enterdInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');


  constructor(private investmentServices: InvestmentServices){}

  onSubmit() {
    this.investmentServices.calculateInvestmentResults({
      initialInvestment: +this.enterdInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
    });
    this.enterdInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredDuration.set('10')
    this.enteredExpectedReturn.set('5')
  }
}
