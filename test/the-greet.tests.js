describe('The Greeting App function', function(){

    it('It should be able to set the name', function(){
        let greet = greetingsFunction();

        greet.setName('Walter');
        assert.equal('Walter', greet.getName());
    });

    it("It should print 'Name is required!' message if the user didn't enter his or her name", function(){
        let greet = greetingsFunction();

        greet.setName('');
        assert.equal('Name is required!', greet.checkingTheName());
    });

    it("It should print 'Enter the name not the number' message if the user entered the number", function(){
        let greet = greetingsFunction();

        greet.setName(5);
        assert.equal('Enter the name not the number', greet.checkingTheNumber());
    });

    it("It should print 'This name has been greeted before' if the user entered the same name for the second time", function(){
        let greet = greetingsFunction();

        greet.setName('Walter');
        assert.equal('This name has been greeted before', greet.greetingUserForSecondTime());
    });

    it("It should print 'This name has been greeted before' if the user entered the same name for the second time", function(){
        let greet = greetingsFunction();

        greet.setName('Walter');
        assert.equal('Please select the language', greet.selectingTheLanguage());
    });

    it('It should be able to greet the user in English', function(){
        let greet = greetingsFunction();
        
        greet.setName('Walter');
        assert.equal('Hello Walter', greet.languages().English);
    });

    it('It should be able to greet the user in Tshivenda', function(){
        let greet = greetingsFunction();
        
        greet.setName('Nedzelele');
        assert.equal('Ndi matsheloni Nedzelele', greet.languages().Tshivenda);
    });

    it('It should be able to greet the user in IsiZulu', function(){
        let greet = greetingsFunction();
        
        greet.setName('Sipho');
        assert.equal('Sawubona Sipho', greet.languages().IsiZulu);
    });

    it('It should be able to greet the user in Sepedi', function(){
        let greet = greetingsFunction();
        
        greet.setName('Kgotso');
        assert.equal('Thobela Kgotso', greet.languages().Sepedi);
    });

    it('It should be able to greet the user in SeSotho', function(){
        let greet = greetingsFunction();
        
        greet.setName('Tumelo');
        assert.equal('Dumelang Tumelo', greet.languages().SeSotho);
    });

});