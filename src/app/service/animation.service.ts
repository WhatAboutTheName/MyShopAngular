export class AnimationService{

    addScrollButton(){
        window.onscroll = function(){
            if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
                document.getElementById('scrollTop').style.display = 'block';
            } else {
                document.getElementById('scrollTop').style.display = 'none';
            }
        }
    }

    scrollTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}