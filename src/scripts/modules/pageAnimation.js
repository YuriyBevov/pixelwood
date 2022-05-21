import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let overlay = document.querySelector('.gsap-animate-overlay');
let top = overlay.querySelector('.top');
let middle = overlay.querySelector('.middle');
let bottom = overlay.querySelector('.bottom');
const title = document.querySelector('.intro__content h2');
const text = document.querySelector('.intro__content p')

document.addEventListener('DOMContentLoaded', () => {
  overlay.style.backgroundColor = 'transparent';

    gsap.to(top, {
      duration: 1,
      delay: 0.6,
      x: '-100vw',
      ease: 'ease-in'
    })

    gsap.to(middle, {
      duration: 1,
      delay: 0.3,
      x: '100vw',
      ease: 'ease-in'
    })

    gsap.to(bottom, {
      duration: 1,
      delay: 0.6,
      x: '-100vw',
      ease: 'ease-in'
    })

    setTimeout(() => {
      gsap.to(title, {
        duration: 0.5,
        delay: 0.1,
        opacity: 1,
        x: 0,
      })

      gsap.to(text, {
        duration: 0.5,
        delay: 0.3,
        opacity: 1,
        y: 0,
      })
    }, 800);


    const features = document.querySelectorAll('.features__section-content');

    if(features) {
      features.forEach(feature => {
        const text = feature.querySelectorAll('.features-text');

        text.forEach((el,i) => {
          el.style.transform = 'translateY(150px)';
          el.style.opacity = '0';

          gsap.to(el, {
            scrollTrigger: feature, // start the animation when ".box" enters the viewport (once)
            delay: 0.2 * (i+1),
            duration: 0.5,
            y: 0,
            opacity: 1,
            ease: 'ease-in'
          });
        });
      });
    }

    const featuresImg = document.querySelectorAll('.features__section-img');

    if(featuresImg) {
      featuresImg.forEach((img, i) => {

        if(i % 2 === 0) {
          img.style.transform = 'translateX(150px)';
        } else {
          img.style.transform = 'translateX(-150px)';
        }

        img.style.opacity = '0';

        gsap.to(img, {
          scrollTrigger: img,
          delay: 0.4 * (i+1),
          duration: 0.5,
          x: 0,
          opacity: 1,
          ease: 'ease-in'
        });

      });
    }

    const charCard = document.querySelectorAll('.char-card');

    if(charCard) {
      charCard.forEach((card, i) => {

        if(i % 2 === 0) {
          card.style.transform = 'translateX(150px)';
        } else {
          card.style.transform = 'translateX(-150px)';
        }

        card.style.opacity = '0';

        gsap.to(card, {
          scrollTrigger: card,
          delay: 0.2 * (i+1),
          duration: 0.5,
          x: 0,
          opacity: 1,
          ease: 'ease-in'
        });

      });
    }

    const question = document.querySelector('.main-footer .feedback h2');
    question.style.opacity = '0';
    question.style.transform = 'translateY(150px)';

    if(question) {
      gsap.to(question, {
        scrollTrigger: question,
        duration: 0.5,
        delay: 0.4,
        y: 0,
        opacity: 1,
        ease: 'ease-in'
      });
    }
});
