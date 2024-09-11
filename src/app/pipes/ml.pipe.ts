import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ml',
  standalone: true,
})
export class MlPipe implements PipeTransform {
  lang: string = 'ENG';
  constructor() {}
  transform(value: string, ...args: string[]): string {
    if (this.lang == 'ENG') return langDictionary.dictionary[value];
    else return value;
  }
}

export class langDictionary {
  public static dictionary: any = {
    'ბუღალტრული მომსახურების შეთავაზების მისაღებად შეავსეთ კითხვარი':
      'To send you a service offer, please fill in the questionnaire',
    სტარტაპერი: 'Startup',
    'მცირე ბიზნესი': 'Small business',
    ინდივიდუალური: 'Individual',
    'აირჩიეთ პაკეტი': 'Select service package',
    'ძირითადი საქმიანობის აღწერა': 'Key business area',
    'დამატებითი საქმიანობის აღწერა': 'Supplementary business area',
    'სალარო აპარატების რაოდენობა': 'Number of cash machines in the business',
    'ნაღდი ფულის ოპერაციების რაოდენობა (თვეში)':
      'Number of cash operations (monthly)',
    'იმპორტების რაოდენობა (თვეში)': 'Number of imports (monthly)',
    'თანამშრომლების რაოდენობა': 'Number of employees',
    'შესყიდვის ინვოისების რაოდენობა (თვეში)':
      'Number of purchase invoices (monthly)',
    'ხართ თუ არა დღგ-ს გადამხდელად რეგისტრირებული?':
      'Is your business registered as a VAT payer?',
    'რამდენი სახეობის მზა პროდუქცია და ნედლეული გაქვთ?':
      'How many types of inventories does your business have?',
    'გაქვს თუ არა წარმოება, კომპლექტაცია?':
      'Does your business have manufacturing?',
    'საწყობების რაოდენობა': 'Number of warehouses',
    'იყენებთ თუ არა საწვავს საქმიანობაში?':
      'Does your business use fuel in everyday operations?',
    'კომპანიის საიდენტიფიკაციო კოდი': 'Company’s identification number',
    'საკონტაქტო მეილი': 'Contact e-mail',
    'საკონტაქტო მობილურის ნომერი': 'Mobile phone number',
    'სახელი, გვარი': 'Name and Surname',
    'საოპერაციო საქმიანობა (დამატებითი პაკეტი)':
      'Operations (supplementary service package)',
    'საბანკო გადარიცხვებს თქვენ გააკეთებთ თუ ჩვენი დახმარება გჭირდებათ?':
      'Do you plan to perform bank transfers on your own or would you like us to assist you?',
    'გჭირდებათ თუ არა ადგილზე ბუღალტერი, ინვოისების, ზედნადებების, მიღება-ჩაბარებების და სხვა პირველადი დოკუმენტების შექმნაში დასახმარებლად?':
      'Do you need accountants on-site to assist in preparing invoices, act-of acceptances, and other documents',
    'ყოველთვიური საშუალო შემოსავალი დღგ-ს გარეშე':
      'Average monthly revenue excluding VAT?',
    'კითხვარი წარმატებით გადაიგზავნა და შეთავაზებას გამოგიგზავნით უახლოეს მომავალში':
      'Questionnaire has sent successfully. wait for our offer soon',
    გაგზავნა: 'Send',
    'ნაღდი ფულით შესყიდვის ჩეკების რაოდენობა (თვეში)':
      'Number of purchased receipts by cash (monthly)',
    'საიდან გაიგეთ ჩვენს შესახებ?': 'How did you hear about us?',
    'ახლობელმა მირჩია': 'Recommendation',
    სხვა: 'Other',
    'დამატებითი ინფორმაცია': 'Additional Info',
    'პირველად დოკუმენტაციას ( ზედნადები, ინვოისები, მიღება-ჩაბარებები და სხვა) თქვენ მოამზადებთ თუ ბუღალტერმა უნდა მოამზადოს?':
      'Do you need accountants to assist in preparing invoices, act-of acceptances and other documents',
    'საბანკო გადარიცხვების რაოდენობა თვეში':
      'Quantity of Bank Payment operations Per month',
    'ოპერაციების რაოდენობა ბანკში და სალაროში საშუალოდ თვეში':
      'Quantity of Bank and Cash operations Per month',
    'კინოთეატრის რეკლამა': 'Cinema Ads',
    ბილბორდი: 'Billboards',
    'საგადასახადო მომსახურების განაცხადი': 'Tax service application form',
    'სტარტაპ პაკეტი': 'Startup Package',
    'საბაზისო პაკეტი': 'Basic Package',
    'პრემიუმ პაკეტი': 'Premium Package',
  };
}
