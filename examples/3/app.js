
function HelloWorldController() {
    var that = this;

    this.yourname = "Boom";
    this.changed = "";

    this.$watch("yourname", function () {
        that.changed = that.changed + "!";
    });

};
