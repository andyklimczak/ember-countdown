/*jshint node:true*/
module.exports = {
  description: 'Countdownjs blueprint',

  normalizeEntityName: function() {},

   afterInstall: function(options) {
     return this.addBowerPackageToProject('countdownjs');
   }
};
