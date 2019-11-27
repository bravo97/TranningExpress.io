

module.exports= (app,express,bodyParser) =>{
    //dinh nghia duong dan cho controller dung trong ejs
    app.set('views',__dirname+"/views");
    app.set('view engine','ejs');

    //config static folder
    //Static dai dien cho duong dan dc truyen vaof express.static
    app.use('/static',express.static(__dirname+"/../public"));

    app.use(bodyParser.urlencoded({extended:true}));
}