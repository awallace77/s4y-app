import { Injectable } from '@angular/core';
import { UserDetailModel, UserModel } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {

  users: UserModel[] = [
    {
      name: 'Mary Smith',
      position: 'Child and Youth Counsellor',
      education: 'Advanced Diploma',
      location: 'Toronto, Ontario',
      phoneNumber: '(123) 456-7890',
      email: 'mary-smith@gmail.com',
      image: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      about: `Nullam ornare et odio id sollicitudin. Nullam suscipit urna sodales, ullamcorper justo eget, bibendum lacus.
      Nunc tempus, lorem at suscipit fermentum, massa nibh efficitur orci, vitae dapibus dui enim nec nunc. Curabitur aliquam
      felis neque. In ullamcorper, odio eu tristique sodales, massa est fermentum ligula, vel eleifend arcu mi id urna.
      Curabitur non nisl sed quam vestibulum varius.`

    },
    {
      name: 'John Smith',
      position: 'Child and Youth Counsellor',
      education: 'Advanced Diploma',
      location: 'Barrie, Ontario',
      phoneNumber: '(705) 456-7890',
      email: 'john-smith@gmail.com',
      image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      about: `Nullam ornare et odio id sollicitudin. Nullam suscipit urna sodales, ullamcorper justo eget, bibendum lacus.
      Nunc tempus, lorem at suscipit fermentum, massa nibh efficitur orci, vitae dapibus dui enim nec nunc. Curabitur aliquam
      felis neque. In ullamcorper, odio eu tristique sodales, massa est fermentum ligula, vel eleifend arcu mi id urna.
      Curabitur non nisl sed quam vestibulum varius.`
    },
    {
      name: 'Josh Bowley',
      position: 'Child and Youth Counsellor',
      education: 'Advanced Diploma',
      location: 'Hamilton, Ontario',
      phoneNumber: '(905) 456-7890',
      email: 'josh-bowley@gmail.com',
      image: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
      about: `Nullam ornare et odio id sollicitudin. Nullam suscipit urna sodales, ullamcorper justo eget, bibendum lacus.
      Nunc tempus, lorem at suscipit fermentum, massa nibh efficitur orci, vitae dapibus dui enim nec nunc. Curabitur aliquam
      felis neque. In ullamcorper, odio eu tristique sodales, massa est fermentum ligula, vel eleifend arcu mi id urna.
      Curabitur non nisl sed quam vestibulum varius.`
    }
  ]

  userDetailModel: UserDetailModel =
    {
      name: 'Mary Smith',
      position: 'Child and Youth Counsellor',
      education: 'Advanced Diploma',
      location: 'Toronto, Ontario',
      phoneNumber: '(123) 456-7890',
      email: 'mary-smith@gmail.com',
      image: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      about: `Nullam ornare et odio id sollicitudin. Nullam suscipit urna sodales, ullamcorper justo eget, bibendum lacus.
      Nunc tempus, lorem at suscipit fermentum, massa nibh efficitur orci, vitae dapibus dui enim nec nunc. Curabitur aliquam
      felis neque. In ullamcorper, odio eu tristique sodales, massa est fermentum ligula, vel eleifend arcu mi id urna.
      Curabitur non nisl sed quam vestibulum varius.`,
      credentials: ['Certificate in CYC', 'Certificate in XYZ'],
      focus: ['Youth mental health', 'Group therapy', 'XYZ specialty'],
      experience: ['2 Years CYC management', '3 years as CYC St. School of health'],
      rate: 150
    };
  constructor() { }
}
