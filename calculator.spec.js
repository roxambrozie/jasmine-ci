describe('calculator.js', function() {
    describe('Calculator', function(){

        let calculator;
        let calculator2;

        beforeEach(function(){
            calculator = new Calculator();
            calculator2 = new Calculator();
        })

        afterEach(function(){
            
        })

        it('should initialize the total', function()  {

            expect(calculator.total).toBe(0);
        });
    
        it('can be instantiated', function(){
            jasmine.addMatchers(customMatchers);
    
            expect(calculator).toBeCalculator();
            expect(2).not.toBeCalculator();
            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
            expect(calculator).toEqual(calculator2);
        });
        
        it('instatiantes unique object', function(){
      
            expect(calculator).not.toBe(calculator2);
        });
    
        it('has commom operations', function(){
    
            expect(calculator.add).not.toBeUndefined();
            expect(calculator.substract).not.toBeUndefined();
            expect(calculator.multiply).not.toBeUndefined();
            expect(calculator.divide).not.toBeUndefined();
        });
    
        it('does not handle NaN', function(){
      
            calculator.total=20;
            calculator.multiply('a');
    
            expect(calculator.total).toBeNaN();
        });

        describe('add()', function(){
            it('should add numbers to total', function() {
                calculator.add(5);
        
                expect(calculator.total).toBe(5);
            });

            it('returns total', function(){
                calculator.total=50;
        
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
                expect(calculator.total).toEqual(jasmine.anything());
             
            })

        })

        describe('substract()', function(){
            it('should substract numbers from total', function() {
           
                calculator.total=30;
                calculator.substract(5);
        
                expect(calculator.total).toBe(25);
        
            });

        })

        describe('multiply()', function(){
            it('should multiply total by number', function() {
                calculator.total=100;
                calculator.multiply(2);
        
                expect(calculator.total).toBe(200);        
            });
        })

        describe('divide()', function(){
            it('should divide total by number', function() {
                calculator.total = 200;
                calculator.divide(2);
        
                expect(calculator.total).toBe(100);
            });

            it('handles divide by zero', function(){
        
                expect(function (){calculator.divide(0)}).toThrow();
                expect(function (){calculator.divide(0)}).toThrowError(Error);
                expect(function (){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
            });
        });

        describe('get version', function() {
            it('fetches version from external source', function(done) {
              
              spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                  new Response('{"version": "0.1"}')
              ));

                calculator.version.then(function(version){
                expect(version).toBe('0.1');

                done();
                
                });
            });
        });
    });
});

