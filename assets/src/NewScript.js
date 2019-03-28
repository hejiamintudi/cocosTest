cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad () {
        let arr = [
            1, "aa_1", "ee"    
        ];
        this.t = 0;
        dyl.process(this, arr, true);
    },

    aa_1 (end) {
        cc.log("aa");
        end(this, "bb");
        end(this, "cc");
        this.t++;
        if (this.t > 3) {
            end();
            end(1);
        }
        else {
            end(1);
        }
    },

    bb (end, arg) {
        cc.log("bb", arg);
        end();
    },

    cc (end, arg) {
        cc.log("cc", arg);
        end();
    },

    ee (end) {
        cc.log("ee");
        end();
    },
});