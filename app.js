import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAjfrMUlQeAoo8rf6RMb_X-d4Dbvm6rOAA',
  authDomain: 'registrition-5d19b.firebaseapp.com',
  projectId: 'registrition-5d19b',
  storageBucket: 'registrition-5d19b.appspot.com',
  messagingSenderId: '78717137797',
  appId: '1:78717137797:web:65c43a6d7cb76058088aec',
  measurementId: 'G-GGRV4BSK14'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let messageRef = app.database().ref('messages');
const button = document.querySelector('.block__button').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    function SaveMessage(email, password, text){
        let newMessageRef = messageRef.push()
        newMessageRef.set({
            email: email,
            password: password,
            text: text
        })
    };
    
    function getInputValue(id) {
        return document.getElementById(id).value;
    }

    let email = getInputValue('email');
    let password = getInputValue('password');
    let text = getInputValue('text');

    SaveMessage(email, password, text);
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();
}