(function () {
    'use strict';

    //==================================================
    // "APP" NAMESPACE
    //--------------------------------------------------
    window.APP = ( typeof APP !== 'undefined' && APP instanceof Object ) ? APP : {

        //--------------------------------------------------
        // CONFIGS
        //--------------------------------------------------
        configs: {

        },

        //--------------------------------------------------
        // UTILITY METHODS
        //--------------------------------------------------
        utils: {
            preloadAssets: function(){

                var myLoader = html5Preloader();
                myLoader.on('finish', function(){
                  //redirect to experience
                  console.log('all done');
                });
                myLoader.addFiles(
                  'assets/home1.jpg',
                  'assets/home2.jpg',
                  'assets/fiosmobile.mov'
                );
            }
        }
    };
    //--------------------------------------------------
    // end "APP" NAMESPACE
    //==================================================




    //==================================================
    // DOCUMENT READY...
    //--------------------------------------------------

    $(function() {

        APP.utils.preloadAssets();


    });

    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================

}());
