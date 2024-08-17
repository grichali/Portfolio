import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public typedText: string = '';
  private phrases: string[] = ['Software Engineer', 'Full Stack Developer'];
  private currentPhraseIndex: number = 0;
  private typingSpeed: number = 200; // Adjust the speed as needed
  private eraseSpeed: number = 200; // Speed to erase the text
  private pauseBetweenPhrases: number = 10; // Pause between phrases

  ngOnInit(): void {
    this.typeAndEraseText();
  }

  private typeAndEraseText(): void {
    let index = 0;
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const interval = setInterval(() => {
      if (index < currentPhrase.length) {
        this.typedText += currentPhrase.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          this.eraseText();
        }, this.pauseBetweenPhrases);
      }
    }, this.typingSpeed);
  }

  private eraseText(): void {
    let index = this.typedText.length;
    const interval = setInterval(() => {
      if (index > 0) {
        this.typedText = this.typedText.slice(0, -1);
        index--;
      } else {
        clearInterval(interval);
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        setTimeout(() => {
          this.typeAndEraseText();
        }, this.pauseBetweenPhrases);
      }
    }, this.eraseSpeed);
  }
}
