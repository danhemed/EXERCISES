const builder = {
    text: "",
    append: function (text) {
        this.text = text;
        return this;
    },
    upper: function () {
        this.text = this.text.toUpperCase();
        return this;
    },
    print: function () {
        console.log(this.text);
        return this;
    }
};

builder.append("hello").upper().print();