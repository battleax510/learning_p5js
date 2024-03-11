import { heroJumpSounds } from './core/core.hero.sounds';
import { heroPerishSounds } from './core/core.hero.sounds';

const backgroundMusic = new Audio('sounds_effect/superman.guitar.theme.o7PuveYmEWU.wav');
backgroundMusic.preload = 'auto';
backgroundMusic.volume = 0.2; // Adjust the volume as needed

let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let flight_sound = new Audio('sounds_effect/flight-sound.wav');
flight_sound.preload = 'auto';
flight_sound.volume = 0.3;
backgroundMusic.pause();
backgroundMusic.currentTime = 0;
// let sound_die = new Audio('sounds_effect/die.mp3');

// getting bird element properties
let bird_props = bird.getBoundingClientRect();

// This method returns DOMReact -> top, right, bottom, left, x, y, width and height
let background = document.querySelector('.background').getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

// In your main file
// import { heroJumpSounds } from './core/core.hero.sounds';


// Perish Sounds
const sound_six = new Audio(heroPerishSounds.perish_zero);
const sound_seven = new Audio(heroPerishSounds.perish_one);
const sound_eight = new Audio(heroPerishSounds.perish_two);
const sound_nine = new Audio(heroPerishSounds.perish_three);
const sound_ten = new Audio(heroPerishSounds.perish_four);
const sound_eleven = new Audio(heroPerishSounds.perish_five);

// Jump Sounds
const sound_one = new Audio(heroJumpSounds.jump_zero);
const sound_two = new Audio(heroJumpSounds.jump_one);
const sound_three = new Audio(heroJumpSounds.jump_two);
const sound_four = new Audio(heroJumpSounds.jump_three);
const sound_five = new Audio(heroJumpSounds.jump_four);

const perishSounds = [
    sound_six,
    sound_seven,
    sound_eight,
    sound_nine,
    sound_ten,
    sound_eleven
];



const jumpSounds = [
    sound_one,
    sound_two,
    sound_three,
    sound_four,
    sound_five
];



function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function reloadPageAfterDelay(delay) {
    setTimeout(function () {
        window.location.reload();
    }, delay);
}



let randomAudioIndex, randomAudioElement

// Now you can use randomAudioElement for further actions (e.g., playing the random sound)


let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

// document.addEventListener('keydown', (e) => {

//     if (e.key == 'Enter' && game_state != 'Play') {

//         document.querySelectorAll('.pipe_sprite').forEach((e) => {
//             e.remove();
//         });
//         img.style.display = 'block';
//         bird.style.top = '40vh';
//         game_state = 'Play';
//         message.innerHTML = '';
//         score_title.innerHTML = 'Score : ';
//         score_val.innerHTML = '0';
//         message.classList.remove('messageStyle');
//         play();
//         backgroundMusic.play();
//     }
// });

function play() {
    function move() {
        if (game_state != 'Play') return;

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if (pipe_sprite_props.right <= 0) {
                element.remove();
            } else {
                if (bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top) {
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red');
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    // sound_die.play();
                    let randomIndex = getRandomIndex(perishSounds);
                    randomAudioElement = perishSounds[randomIndex];
                    randomAudioElement.play();
                    backgroundMusic.pause();
                    reloadPageAfterDelay(2000);
                    return;
                } else {
                    if (pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1') {
                        score_val.innerHTML = + score_val.innerHTML + 1;
                        let randomIndex = getRandomIndex(jumpSounds);
                        randomAudioElement = jumpSounds[randomIndex];
                        console.log(randomAudioElement)
                        randomAudioElement.play()

                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity() {
        if (game_state != 'Play') return;
        bird_dy = bird_dy + grativy;
        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/superHero-2.png';
                bird_dy = -7.6;
                flight_sound.play();


            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/superHero-1.png';
            }
        });

        if (bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
            game_state = 'End';
            // message.style.left = '28vw';
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;

            let randomIndex = getRandomIndex(perishSounds);
            randomAudioElement = perishSounds[randomIndex];
            randomAudioElement.play();
            message.innerHTML = 'Game Over'.fontcolor('red');
            message.classList.add('messageStyle');
            reloadPageAfterDelay(3000);

            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let pipe_seperation = 0;

    let pipe_gap = 35;

    function create_pipe() {
        if (game_state != 'Play') return;

        if (pipe_seperation > 115) {
            pipe_seperation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';

            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';

            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}