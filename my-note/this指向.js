var obj = {
    name: function () {
    console.log(this); //function name(){}
        setTimeout(() => 
        {console.log(this)}) //function name(){}
    }
}
obj.name()

