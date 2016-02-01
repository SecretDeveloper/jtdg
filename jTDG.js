/*
  Author: Gary Kenneally (@SecretDeveloper)
  Webpage: https://github.com/secretdeveloper/jtdg
  Javascript port of the C# TestDataGenerator library which uses a regular
  expression like syntax to produce content.
*/
(function(exports){

   exports.test = function(){
        return 'test';
    };

})(typeof exports === 'undefined'? this['jTDG']={}: exports);
