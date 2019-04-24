cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad () {
    	this.touchArr1 = [...hjm._in1.getChildren()];
    	this.touchArr2 = [...hjm._in2.getChildren()];
    	this.node.button = [...hjm._button.getChildren()];
    },

    touchOn (p) {
    	cc.log("touchOn")
    	let node = p.in(...this.touchArr1, ...this.touchArr2);
    	if (node) {
    		this.change(node);
    	}
    	return true;
    },

    buttonOn (node) {
    	cc.log("buttonOn");
    	this.change(node);
    },

    buttonEnd (node) {
    	cc.log("buttonEnd");
    	this.change(node);
    },

    change (node) {
    	let color = node.color;
    	node.color = cc.color(255 - color.r, 255, 255);
    },
    
});