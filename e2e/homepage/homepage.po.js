var prot = protractor.getInstance();

module.exports = function () {
    this.drawerButton = $('#drawer-button');
    this.drawerMenu = $('#drawer-menu');

    this.get = function() {
        prot.get('/');
    }
};