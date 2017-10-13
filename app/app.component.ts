import { Component } from '@angular/core';

import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.css'
  ]
})
export class AppComponent  {
  name = 'Angular';
  //propositions = propositions;

  propositions = [
    {
      icon: 'browser.png',
      title: 'Cross-browser development',
      description: 'All modern browsers support.'
    },
    {
      icon: 'search-1.png',
      title: 'Pixel perfect development',
      description: 'Full match with mock-ups.'
    },
    {
      icon: 'devices.png',
      title: 'Responsive development',
      description: 'Good viewing at any device.'
    }
  ];
  contacts = [
    {//browser
      icon: 'linkedin.png',
      link: 'https://www.linkedin.com/in/katya-dubinina-109754104/'
    },
    {
      icon: 'facebook.png',
      link: 'https://www.facebook.com/katia.dubinina'
    },
    {
      icon: 'skype.png'
    }
  ];

  projects = [
    {
      class: 'one',
      name: 'KORTX',
      mainDescription: 'Freelancing platform',
      extraDescription: 'Allows clients to interview, hire and work with freelancers and agencies.',
      done: 'Front-end developing of more than 30 web-pages, <br>back-end connection, <br>chat developing.',
      technologies: [
        {
          title: 'HTML5',
          icon: 'html'
        },
        {
          title: 'AngularJS',
          icon: 'angular'
        },
        {
          title: 'SCSS',
          icon: 'sass'
        },
        {
          title: 'Gulp',
          icon: 'gulp'
        }
      ],
      link: 'http://kweb.dev2.yarandin.com/#/login'
    },
    {
      class: 'two',
      name: 'crazyfatburn',
      mainDescription: 'Sports training platform',
      extraDescription: 'Allows clients to pass a course of sports training right from home.',
      done: 'Front-end developing of half of the web-pages,  <br> project deployment <br> ui/ux refinement.',
      technologies: [
        {
          title: 'HTML5',
          icon: 'html'
        },
        {
          title: 'AngularJS',
          icon: 'angular'
        },
        {
          title: 'SCSS',
          icon: 'sass'
        },
        {
          title: 'Gulp',
          icon: 'gulp'
        }
      ],
      link: 'http://crazyfatburn.dev2.yarandin.com/#/wall'
    },
    {
      class: 'three',
      name: '',
      mainDescription: 'Leaflux',
      extraDescription: 'Landing page adwertising bay leaf.',
      done: 'Front-end fixes, multilanguages.',
      technologies: [
        {
          title: 'HTML5',
          icon: 'html'
        },
        {
          title: 'SCSS',
          icon: 'sass'
        },
        {
          title: 'Gulp',
          icon: 'gulp'
        }
      ],
      link: 'http://alahno.dev2.yarandin.com/'
    },
    {
      class: 'four',
      name: '',
      mainDescription: 'Yarandin',
      extraDescription: 'Company web-site and blog.',
      done: 'Front-end fixes.',
      technologies: [
        {
          title: 'HTML5',
          icon: 'html'
        },
        {
          title: 'AngularJS',
          icon: 'angular'
        },
        {
          title: 'SCSS',
          icon: 'sass'
        },
        {
          title: 'Gulp',
          icon: 'gulp'
        }
      ],
      link: 'http://www.yarandin.com/en'
    }

  ];
}
