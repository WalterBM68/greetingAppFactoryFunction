describe('The Greeting App function', function(){

    it('It should be able to set the name', function(){
        let greet = greetingsFunction();

        greet.setName('Walter');
        assert.equal('Walter', greet.getName());
    });

    it('It should be able to greet the user in English', function(){
        let greet = greetingsFunction();
        
        greet.setName('Walter');
        assert.equal('Hello Walter', greet.language().English);
    });

    it('It should be able to greet the user in Tshivenda', function(){
        let greet = greetingsFunction();
        
        greet.setName('Nedzelele');
        assert.equal('Ndi matsheloni Nedzelele', greet.language().Tshivenda);
    });

    it('It should be able to greet the user in IsiZulu', function(){
        let greet = greetingsFunction();
        
        greet.setName('Sipho');
        assert.equal('Sawubona Sipho', greet.language().IsiZulu);
    });

    it('It should be able to greet the user in Sepedi', function(){
        let greet = greetingsFunction();
        
        greet.setName('Kgotso');
        assert.equal('Thobela Kgotso', greet.language().Sepedi);
    });

    it('It should be able to greet the user in SeSotho', function(){
        let greet = greetingsFunction();
        
        greet.setName('Tumelo');
        assert.equal('Dumelang Tumelo', greet.language().SeSotho);
    });

});