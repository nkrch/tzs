function words() {
    let word=prompt('Здравствуйте! Введите текст произвольной длины');
    let words=new Array;
    words=word.split(' ');
    console.log(words);
    /*sort */
    words.sort(function(a, b) {
        return b.length - a.length || // sort by length, if equal then
               b.localeCompare(a);    // sort by dictionary order
      });
    
        console.log(words);
        let newWords='';
    for(i=0;i<3;i++){
        newWords+=`\n${words[i]};`;
    }

    alert(`Самые длинные слова: ${newWords}`)
}
