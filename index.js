
function introduction(name){
    let intro = `Hi, my name is ${name}.`;
    return intro;
}
console.log(introduction('Aki'))

function introductionWithLanguage(name, language){
    let introwithlang = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return introwithlang;
}
console.log(introductionWithLanguage('Ember', 'Ember.js'))

function introductionWithLanguageOptional(name, language = "JavaScript"){
    let opt = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return opt;
};

