
//bai 1
function changeColor() {
    let array = document.getElementsByName('Text');
    let color = ['blue', 'red', 'yellow'];

    for (let i = 0; i < array.length; i++) {
        array[i].style.color = color[i];
    }

}
changeColor();


//bai 2

function changeBgColor() {
    document.getElementsByTagName('body')[0].style.background = "tan";


}
changeBgColor();

// //bai 3

function copyContent(paragraph1, paragraph2) {

    let text1 = document.getElementById(paragraph2).innerHTML;
    let text2 = document.getElementById(paragraph1).innerHTML;
    document.getElementById(paragraph1).innerHTML = text1;
    document.getElementById(paragraph2).innerHTML = text2;


}


copyContent('text1', 'text2');

//bai 4

function changeFontSize(x) {
    document.getElementsByTagName("p")[0].style.fontSize = x;
    document.getElementsByTagName("p")[1].style.fontSize = x;
    document.getElementsByTagName("p")[2].style.fontSize = x;
}
changeFontSize('30px');



