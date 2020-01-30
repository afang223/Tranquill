function pulse (){
    console.log('hello');
    document.getElementById('first').classList.add('one');
    document.getElementById('second').classList.add('two');
}

function nopulse (){
    console.log('hello');
    document.getElementById('first').classList.remove('one');
    document.getElementById('second').classList.remove('two');
}

function playPause(){
    if(document.getElementById('playPause').classList.contains('play')){
        document.getElementById('music').play();
        document.getElementById('playPause').classList.add('pause');
        document.getElementById('playPause').classList.remove('play');
    }else{
        document.getElementById('music').pause();
        document.getElementById('playPause').classList.remove('pause');
        document.getElementById('playPause').classList.add('play');
    }
    
}



  


