const var1j = $('.Ivar1');
const var2j = $('.ivar2');
const var3j = $('.ivar3');
const var4j = $('.ivar4');
const var5j = $('.ivar5');
const var6j = $('.ivar6');
const speachj = $('.ispeach');

const btnCreate = $('.btncreate');
const btnReplace = $('.btnreplace');
const textNode = $('.itext');


const startObj = {
  "text":[
    "Жили-были {var1} да {var2}. Была у них {var3}. Снесла {var3} {var4}, не простое - золотое - {var1} бил, бил - не разбил - {var2} била, била - не разбила {var5} бежала, {var6} задела, {var4} упало и разбилось. {var1} плачет, {var2} плачет, а {var3} кудахчет: {speach}"
  ]
};

btnCreate.click(function() {
  textNode.html(startObj.text);
})

btnReplace.click(function() {
  const var1 = var1j.val();
  const var2 = var2j.val();
  const var3 = var3j.val();
  const var4 = var4j.val();
  const var5 = var5j.val();
  const var6 = var6j.val();
  const speach = speachj.val();
    
  const newObj = {
    "text":[
      `Жили-были ${var1} да ${var2}. Была у них ${var3}. Снесла ${var3} ${var4}, не простое - золотое - ${var1} бил, бил - не разбил - ${var2} била, била - не разбила ${var5} бежала, ${var6} задела, ${var4} упало и разбилось. ${var1} плачет, ${var2} плачет, а ${var3} кудахчет: ${speach}`,
    ]
  };
  
    
  textNode.html(newObj.text);
})

