import { Component, HostListener } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  description: string;
  demoUrl: string;
  technologies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="scroll-to-top" [class.visible]="isScrollButtonVisible" (click)="scrollToTop()">
      <i class="fas fa-arrow-up"></i>
    </div>

    <header class="section" style="background: #f8f9fa;">
      <div class="container">
        <h1 style="font-size: 3rem; margin-bottom: 20px;">Indrajeet Giram</h1>
        <p style="font-size: 1.2rem; color: #666;">Full Stack Angular Developer</p>
        <div class="header-social-links">
          <a href="https://x.com/CuriousIndra" target="_blank" class="header-social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/indrajeetcv/" target="_blank" class="header-social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://wa.me/+919518351482" target="_blank" class="header-social-link">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Skills</h2>
        <div class="skills-list">
          <span class="skill-item" *ngFor="let skill of skills">{{ skill }}</span>
        </div>
      </div>
    </section>

    <section class="section" style="background: #f8f9fa;">
      <div class="container">
        <h2 class="section-title">Angular Projects</h2>
        <div class="project-grid">
          <div class="project-card" *ngFor="let project of angularProjects">
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div style="margin-bottom: 15px;">
                <span class="skill-item" *ngFor="let tech of project.technologies" style="margin-right: 8px;">
                  {{ tech }}
                </span>
              </div>
              <a [href]="project.demoUrl" target="_blank" class="project-link">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">React Projects</h2>
        <div class="project-grid">
          <div class="project-card" *ngFor="let project of reactProjects">
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div style="margin-bottom: 15px;">
                <span class="skill-item" *ngFor="let tech of project.technologies" style="margin-right: 8px;">
                  {{ tech }}
                </span>
              </div>
              <a [href]="project.demoUrl" target="_blank" class="project-link">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: #f8f9fa;">
      <div class="container">
        <h2 class="section-title">JavaScript Projects</h2>
        <div class="project-grid">
          <div class="project-card" *ngFor="let project of jsProjects">
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div style="margin-bottom: 15px;">
                <span class="skill-item" *ngFor="let tech of project.technologies" style="margin-right: 8px;">
                  {{ tech }}
                </span>
              </div>
              <a [href]="project.demoUrl" target="_blank" class="project-link">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: #fff;">
      <div class="container">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-form">
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                [(ngModel)]="contactData.name" 
                required 
                class="form-control"
                placeholder="Your name"
              >
            </div>
            
            <div class="form-group">
              <label for="company">Company</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                [(ngModel)]="contactData.company" 
                required 
                class="form-control"
                placeholder="Your company"
              >
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="contactData.email" 
                required 
                class="form-control"
                placeholder="your@email.com"
              >
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                [(ngModel)]="contactData.message" 
                required 
                class="form-control"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>

            <button 
              type="submit" 
              [disabled]="!contactForm.form.valid"
              class="submit-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">
            Made with <span class="heart">♥</span> by Indrajeet
          </p>
          <p class="footer-text">
            © {{ currentYear }} All rights reserved
          </p>
          <div class="social-links">
            <a href="https://twitter.com/indrajeet" target="_blank" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/indrajeet" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/yournumber" target="_blank" class="social-link">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class App {
  currentYear = new Date().getFullYear();
  isScrollButtonVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrollButtonVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  skills: string[] = [
    'Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material',
    'Angular Universal', 'Jasmine', 'Karma', 'Angular CLI',
    'Angular Forms', 'Angular Router', 'Angular Animations',
    'REST APIs', 'HTML5', 'CSS3', 'SCSS', 'JavaScript ES6+',
    'Git', 'npm', 'Webpack', 'Jest', 'CI/CD'
  ];

  contactData = {
    name: '',
    company: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactData);
    alert('Thank you for your message! I will get back to you soon.');
    this.contactData = {
      name: '',
      company: '',
      email: '',
      message: ''
    };
  }

  angularProjects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce platform with product catalog, cart management, and payment integration.',
      demoUrl: 'https://angular-ecommerce-demo.com',
      technologies: ['Angular', 'NgRx', 'Angular Material', 'Stripe']
    },
    {
      title: 'Task Management System',
      description: 'Project management tool with real-time updates, task tracking, and team collaboration features.',
      demoUrl: 'https://angular-task-manager.com',
      technologies: ['Angular', 'Firebase', 'RxJS', 'Angular Forms']
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with interactive charts and data visualization.',
      demoUrl: 'https://social-dashboard-demo.com',
      technologies: ['Angular', 'D3.js', 'Angular Material', 'NgRx']
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and search platform with map integration and filtering capabilities.',
      demoUrl: 'https://realestate-angular-app.com',
      technologies: ['Angular', 'Google Maps API', 'Angular Universal']
    },
    {
      title: 'Fitness Tracking App',
      description: 'Workout tracking application with progress monitoring and exercise library.',
      demoUrl: 'https://fitness-tracker-demo.com',
      technologies: ['Angular', 'Chart.js', 'Angular Material']
    },
    {
      title: 'Recipe Book',
      description: 'Recipe management system with shopping list integration and meal planning.',
      demoUrl: 'https://recipe-book-angular.com',
      technologies: ['Angular', 'Firebase', 'Angular Forms']
    }
  ];

  reactProjects: Project[] = [
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking app with location-based forecasts.',
      demoUrl: 'https://weather-react-app.com',
      technologies: ['React', 'Redux', 'Weather API']
    },
    {
      title: 'Movie Database',
      description: 'Movie information and review platform using TMDB API.',
      demoUrl: 'https://movie-db-react.com',
      technologies: ['React', 'Context API', 'Styled Components']
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with room creation and file sharing.',
      demoUrl: 'https://chat-app-react.com',
      technologies: ['React', 'Socket.io', 'Firebase']
    }
  ];

  jsProjects: Project[] = [
    {
      title: 'Todo List',
      description: 'Simple todo list with local storage persistence.',
      demoUrl: 'https://todo-js-app.com',
      technologies: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Calculator',
      description: 'Scientific calculator with advanced mathematical functions.',
      demoUrl: 'https://calculator-js-app.com',
      technologies: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Memory Game',
      description: 'Card matching memory game with different difficulty levels.',
      demoUrl: 'https://memory-game-js.com',
      technologies: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Quiz App',
      description: 'Interactive quiz application with multiple categories.',
      demoUrl: 'https://quiz-js-app.com',
      technologies: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Budget Tracker',
      description: 'Personal finance tracker with expense categorization.',
      demoUrl: 'https://budget-tracker-js.com',
      technologies: ['JavaScript', 'Chart.js', 'LocalStorage']
    },
    {
      title: 'Music Player',
      description: 'Custom audio player with playlist management.',
      demoUrl: 'https://music-player-js.com',
      technologies: ['JavaScript', 'Web Audio API', 'CSS3']
    },
    {
      title: 'Drawing App',
      description: 'Canvas-based drawing application with various tools.',
      demoUrl: 'https://drawing-app-js.com',
      technologies: ['JavaScript', 'Canvas API', 'HTML5']
    },
    {
      title: 'Typing Speed Test',
      description: 'Application to measure typing speed and accuracy.',
      demoUrl: 'https://typing-test-js.com',
      technologies: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Weather Widget',
      description: 'Minimalist weather widget with location detection.',
      demoUrl: 'https://weather-widget-js.com',
      technologies: ['JavaScript', 'Weather API', 'Geolocation']
    },
    {
      title: 'Countdown Timer',
      description: 'Customizable countdown timer with notifications.',
      demoUrl: 'https://countdown-timer-js.com',
      technologies: ['JavaScript', 'Notifications API', 'CSS3']
    }
  ];
}

bootstrapApplication(App);