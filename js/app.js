document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === "tabbar") {
        //Code for tabbar
        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });
    }

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#homebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));
        });
    }

    if (page.id === 'tab1') {
        //Code for Tab 1
        $("#btn1").click(function () {
            ons.notification.alert("Hello");
        });
    }

    if (page.id === "signin") {
        //Code for tabbar
        $("#signinbtn").click(function () {
            var content = document.getElementById('content');
            content.load('splitter.html')
                    
        });
    }

    if (page.id === "signin") {
        //Code for tabbar
        $("#signupbtn").click(function () {
            var content = document.getElementById('content');
            content.load('signup.html')
                    
        });
    }
    
    
    if (page.id === "signup") {
        //Code for tabbar
        $("#createbtn").click(function () {
            var content = document.getElementById('content');
            content.load('login.html')
                    
        });
    }
  
    if (page.id === "shop") {
        //Code for tabbar
        $("#listbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('ListStarbuck.html');
            
                    
        });
    }

    // if (page.id === 'feed') {
    //     page.querySelector('#listbtn').onclick = function() {
    //       document.querySelector('#myNavigator').pushPage('ListStarbuck.html', {data: {title: 'Starbuck'}});
    //     };
    //   } else if (page.id === 'list') {
    //     page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    //   }
    // });
    if (page.id === "list") {
        //Code for tabbar
        $("#backbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('tabbar.html');
            
                    
        });
    }

    if (page.id === "cart") {
        //Code for tabbar
        $("#backbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('tabbar.html');
            
                    
        });
    }
    
    // document.querySelector('ons-back-button').onClick = function(event) {
    //     // Reset the whole stack instead of popping 1 page
    //     document.querySelector('ons-navigator').resetToPage('splitter.html');
    //   };
    
    if (page.id === "list") {
        //Code for tabbar
        $("#cfbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('cart1.html');
            
                    
        });
    }

      
    if (page.id === "tabhome") {
        //Code for tabbar
        $("#fbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('shop1.html');
            
                    
        });
    }
   
    if (page.id === "tabhome") {
        //Code for tabbar
        $("#bbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('shop1.html');
            
                    
        });
    }
    if (page.id === "tabhome") {
        //Code for tabbar
        $("#dbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('shop1.html');
            
                    
        });
    }
    if (page.id === "tabhome") {
        //Code for tabbar
        $("#vbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('shop1.html');
            
                    
        });
    }

    if (page.id === "shop") {
        //Code for tabbar
        $("#backbtn").click(function () {
            var content = document.getElementById('content'); 
            content.load('tabbar.html');
            
                    
        });
    }

    if (page.id === "cart1") {
        //Code for tabbar
        $("#backbtn").click(function () {
            var content = document.getElementById('content'); 
            
            content.load('tabbar.html')
                
            
                    
        });
    }

    if (page.id === "shop1") {
        //Code for tabbar
        $("#listbtn").click(function () {
            var content = document.getElementById('content'); 
            
            content.load('ListStarbuck.html')
                
            
                    
        });
    }

    
    if (page.id === "shop1") {
        //Code for tabbar
        $("#backbtn").click(function () {
            var content = document.getElementById('content'); 
            
            content.load('tabbar.html')
                
            
                    
        });
    }


});
