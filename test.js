function a() {

    var arr = new Array(1000000);

    for(var i = 0; i < arr.length;i ++) {

        arr[i] = i;

    }



    var start1 = new Date().getTime();

    for(var i = 0; i < arr.length;i ++) {

        arr[i] = i+1;

    }

    var stop1 = new Date().getTime();

    console.info(stop1-start1);



    var start2 = new Date().getTime();

    arr.forEach(function(value,index,array) {

        arr[i] = i+1;

    });

    var stop2 = new Date().getTime();

    console.info(stop2-start2);



    var start3 = new Date().getTime();

    arr.map(function(index,value,array) {

        arr[i] = i+1;

    });

    var stop3 = new Date().getTime();

    console.info(stop3-start3);

}

a();